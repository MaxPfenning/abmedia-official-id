import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message }: ContactFormData = await req.json();

    console.log("Received contact form submission:", { name, email, service });

    // Validate input
    if (!name || !email || !service || !message) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Send email to business owner
    console.log("Sending email to business owner...");
    const ownerEmailResponse = await resend.emails.send({
      from: "My Review Media <noreply@myreviewmedia.com>",
      to: ["kontakt.abmedia@gmail.com"],
      replyTo: email,
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            <p><strong>Service Requested:</strong> ${service}</p>
          </div>
          
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 12px; margin-top: 30px;">
            Received: ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Berlin' })} (CET)
          </p>
        </div>
      `,
    });

    console.log("Owner email sent:", ownerEmailResponse.data?.id);

    // Send confirmation email to customer
    console.log("Sending confirmation email to customer...");
    const customerEmailResponse = await resend.emails.send({
      from: "My Review Media <noreply@myreviewmedia.com>",
      to: [email],
      subject: "We received your message - My Review Media",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for contacting My Review Media!</h2>
          
          <p>Hi ${name},</p>
          
          <p>We've received your inquiry about <strong>${service}</strong> and our team will review it shortly.</p>
          
          <div style="background: #dbeafe; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>📞 Quick Response:</strong> We typically respond within 24 hours during business hours (Mon-Fri, 9:00-18:00 CET).</p>
          </div>
          
          <p>In the meantime, if you have any urgent questions, feel free to call us at <a href="tel:+492037090726" style="color: #2563eb;">+49 203 70907262</a>.</p>
          
          <p style="margin-top: 30px;">Best regards,<br><strong>The My Review Media Team</strong></p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
          
          <p style="color: #6b7280; font-size: 12px;">
            My Review Media<br>
            Weselerstraße 73, 47169 Duisburg, Germany<br>
            Email: kontakt.abmedia@gmail.com | Phone: +49 203 70907262
          </p>
        </div>
      `,
    });

    console.log("Customer email sent:", customerEmailResponse.data?.id);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Emails sent successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("Error sending emails:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to send email",
        details: error.toString()
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
