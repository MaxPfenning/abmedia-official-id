import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// All team members who should receive contact form notifications
const TEAM_EMAILS = [
  "angelina@abmedia-team.com",
  "service@team-abmedia.com",
  "thomas.thomasklein@gmail.com",
  "kleinabmedia@gmail.com",
  "jungabmedia@gmail.com",
  "wolfabmedia@gmail.com",
  "marcusabmedia@gmail.com",
  "paulkatz.abmedia@gmail.com",
  "ajosesales36@gmail.com",
  "georgabmediateam@gmail.com",
  "jannes@scoolfinanceedu.com",
];

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

// Helper function to add delay between emails
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Helper function to send email with retry logic
const sendWithRetry = async (emailData: any, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await resend.emails.send(emailData);
      return response;
    } catch (error) {
      if (i === retries - 1) throw error;
      console.log(`Retry ${i + 1}/${retries} after error:`, error);
      await delay(1000 * (i + 1)); // Exponential backoff
    }
  }
};

// Function to get service badge color
const getServiceColor = (service: string): string => {
  const colors: Record<string, string> = {
    "Google My Business": "#10b981",
    "Social Media Management": "#3b82f6",
    "SEO Optimization": "#8b5cf6",
    "Content Creation": "#f59e0b",
    "Paid Advertising": "#ef4444",
  };
  return colors[service] || "#6b7280";
};

// Enhanced HTML template for team notification
const getTeamEmailHTML = (name: string, email: string, phone: string | undefined, service: string, message: string): string => {
  const serviceColor = getServiceColor(service);
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f3f4f6; padding: 40px 0;">
        <tr>
          <td align="center">
            <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              
              <!-- Header with gradient -->
              <tr>
                <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                  <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 700;">🔔 New Lead Alert</h1>
                  <p style="color: rgba(255, 255, 255, 0.9); margin: 10px 0 0 0; font-size: 16px;">My Review Media Contact Form</p>
                </td>
              </tr>
              
              <!-- Service Badge -->
              <tr>
                <td style="padding: 24px 30px 0 30px;">
                  <div style="text-align: center; margin-bottom: 24px;">
                    <span style="background-color: ${serviceColor}; color: #ffffff; padding: 8px 16px; border-radius: 20px; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                      ${service}
                    </span>
                  </div>
                </td>
              </tr>
              
              <!-- Contact Information Cards -->
              <tr>
                <td style="padding: 0 30px 24px 30px;">
                  
                  <!-- Name Card -->
                  <div style="background-color: #f9fafb; border-radius: 12px; padding: 20px; margin-bottom: 12px; border-left: 4px solid #667eea;">
                    <div style="display: flex; align-items: center;">
                      <span style="font-size: 24px; margin-right: 12px;">👤</span>
                      <div>
                        <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                        <p style="margin: 4px 0 0 0; font-weight: 600; font-size: 16px; color: #111827;">${name}</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Email Card -->
                  <div style="background-color: #f9fafb; border-radius: 12px; padding: 20px; margin-bottom: 12px; border-left: 4px solid #10b981;">
                    <div style="display: flex; align-items: center;">
                      <span style="font-size: 24px; margin-right: 12px;">📧</span>
                      <div>
                        <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                        <p style="margin: 4px 0 0 0; font-weight: 600; font-size: 16px; color: #111827;">
                          <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  ${phone ? `
                  <!-- Phone Card -->
                  <div style="background-color: #f9fafb; border-radius: 12px; padding: 20px; margin-bottom: 12px; border-left: 4px solid #f59e0b;">
                    <div style="display: flex; align-items: center;">
                      <span style="font-size: 24px; margin-right: 12px;">📱</span>
                      <div>
                        <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Phone</p>
                        <p style="margin: 4px 0 0 0; font-weight: 600; font-size: 16px; color: #111827;">
                          <a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  ` : ''}
                  
                </td>
              </tr>
              
              <!-- Message Section -->
              <tr>
                <td style="padding: 0 30px 24px 30px;">
                  <div style="background-color: #ffffff; border: 2px solid #e5e7eb; border-radius: 12px; padding: 24px;">
                    <div style="display: flex; align-items: center; margin-bottom: 12px;">
                      <span style="font-size: 24px; margin-right: 12px;">💬</span>
                      <h3 style="margin: 0; color: #111827; font-size: 18px;">Message</h3>
                    </div>
                    <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                  </div>
                </td>
              </tr>
              
              <!-- Call to Action Button -->
              <tr>
                <td style="padding: 0 30px 32px 30px; text-align: center;">
                  <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: #ffffff; padding: 16px 32px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(37, 99, 235, 0.3);">
                    📧 Reply to ${name}
                  </a>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="padding: 24px 30px; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
                  <p style="margin: 0; color: #6b7280; font-size: 13px; text-align: center;">
                    ⏰ Received: ${new Date().toLocaleString('en-US', { timeZone: 'Europe/Berlin', dateStyle: 'medium', timeStyle: 'short' })} CET
                  </p>
                  <p style="margin: 12px 0 0 0; color: #9ca3af; font-size: 12px; text-align: center;">
                    My Review Media | Spitalerstraße 23, 20095 Hamburg, Germany
                  </p>
                </td>
              </tr>
              
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};

// Enhanced HTML template for customer confirmation
const getCustomerEmailHTML = (name: string, service: string): string => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f3f4f6; padding: 40px 0;">
        <tr>
          <td align="center">
            <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              
              <!-- Success Header -->
              <tr>
                <td style="padding: 50px 30px 30px 30px; text-align: center;">
                  <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 24px; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 16px rgba(16, 185, 129, 0.3);">
                    <span style="font-size: 48px; color: #ffffff; line-height: 1;">✓</span>
                  </div>
                  <h1 style="color: #111827; margin: 0 0 12px 0; font-size: 32px; font-weight: 700;">Message Received!</h1>
                  <p style="color: #6b7280; margin: 0; font-size: 16px;">We've got your inquiry and we're on it</p>
                </td>
              </tr>
              
              <!-- Greeting -->
              <tr>
                <td style="padding: 0 30px 24px 30px;">
                  <p style="margin: 0 0 16px 0; color: #374151; font-size: 16px; line-height: 1.6;">Hi <strong>${name}</strong>,</p>
                  <p style="margin: 0; color: #374151; font-size: 16px; line-height: 1.6;">Thank you for reaching out to My Review Media! ✨ Your inquiry about <strong>${service}</strong> has been received and assigned to our specialist team.</p>
                </td>
              </tr>
              
              <!-- Timeline Card -->
              <tr>
                <td style="padding: 0 30px 32px 30px;">
                  <div style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); border-radius: 12px; padding: 24px; border-left: 4px solid #2563eb;">
                    <h3 style="margin: 0 0 16px 0; color: #1e40af; font-size: 18px; display: flex; align-items: center;">
                      <span style="margin-right: 8px;">📅</span> What Happens Next
                    </h3>
                    
                    <div style="margin-bottom: 16px;">
                      <div style="display: flex; align-items: start; margin-bottom: 12px;">
                        <div style="background-color: #2563eb; color: #ffffff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 14px; flex-shrink: 0; margin-right: 12px;">1</div>
                        <div>
                          <p style="margin: 0 0 4px 0; color: #1e40af; font-weight: 600; font-size: 15px;">Within 2 hours</p>
                          <p style="margin: 0; color: #1e3a8a; font-size: 14px;">Our team reviews your inquiry</p>
                        </div>
                      </div>
                    </div>
                    
                    <div style="margin-bottom: 16px;">
                      <div style="display: flex; align-items: start; margin-bottom: 12px;">
                        <div style="background-color: #2563eb; color: #ffffff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 14px; flex-shrink: 0; margin-right: 12px;">2</div>
                        <div>
                          <p style="margin: 0 0 4px 0; color: #1e40af; font-weight: 600; font-size: 15px;">Within 24 hours</p>
                          <p style="margin: 0; color: #1e3a8a; font-size: 14px;">Personal response from specialist</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div style="display: flex; align-items: start;">
                        <div style="background-color: #2563eb; color: #ffffff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 14px; flex-shrink: 0; margin-right: 12px;">3</div>
                        <div>
                          <p style="margin: 0 0 4px 0; color: #1e40af; font-weight: 600; font-size: 15px;">Within 48 hours</p>
                          <p style="margin: 0; color: #1e3a8a; font-size: 14px;">Detailed proposal (if applicable)</p>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </td>
              </tr>
              
              <!-- Contact Info -->
              <tr>
                <td style="padding: 0 30px 32px 30px;">
                  <div style="background-color: #f9fafb; border-radius: 12px; padding: 24px; text-align: center;">
                    <p style="margin: 0 0 16px 0; color: #111827; font-size: 16px; font-weight: 600;">Need urgent help? We're here!</p>
                    <a href="tel:+492037090726" style="display: inline-block; background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); color: #ffffff; padding: 14px 28px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 15px; margin: 0 8px 8px 0; box-shadow: 0 4px 6px rgba(37, 99, 235, 0.3);">
                      📞 Call Us Now
                    </a>
                    <p style="margin: 16px 0 0 0; color: #6b7280; font-size: 14px;">
                      Phone: <a href="tel:+492037090726" style="color: #2563eb; text-decoration: none;">+49 203 70907262</a>
                    </p>
                  </div>
                </td>
              </tr>
              
              <!-- Closing -->
              <tr>
                <td style="padding: 0 30px 32px 30px;">
                  <p style="margin: 0 0 8px 0; color: #374151; font-size: 15px;">Best regards,</p>
                  <p style="margin: 0; color: #111827; font-size: 15px; font-weight: 600;">The My Review Media Team</p>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="padding: 24px 30px; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
                  <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 13px; text-align: center;">
                    <strong>My Review Media</strong>
                  </p>
                  <p style="margin: 0; color: #9ca3af; font-size: 12px; text-align: center; line-height: 1.6;">
                    Spitalerstraße 23, 20095 Hamburg, Germany<br>
                    Email: alice@myreviewmedia.com | Phone: +49 203 70907262
                  </p>
                </td>
              </tr>
              
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
};

// Background task to send all emails
const sendAllEmails = async (name: string, email: string, phone: string | undefined, service: string, message: string) => {
  console.log(`📧 Starting email distribution to ${TEAM_EMAILS.length} team members...`);
  
  let successCount = 0;
  const failedEmails: string[] = [];
  
  // Send to all team members with delays
  for (const teamEmail of TEAM_EMAILS) {
    try {
      await sendWithRetry({
        from: "My Review Media <noreply@myreviewmedia.com>",
        to: [teamEmail],
        replyTo: email,
        subject: `🔔 New Lead: ${service} - ${name}`,
        html: getTeamEmailHTML(name, email, phone, service, message),
      });
      
      successCount++;
      console.log(`✅ Email sent to: ${teamEmail} (${successCount}/${TEAM_EMAILS.length})`);
      
      // Add 2-second delay between sends (except for the last one)
      if (teamEmail !== TEAM_EMAILS[TEAM_EMAILS.length - 1]) {
        await delay(2000);
      }
    } catch (error) {
      console.error(`❌ Failed to send to ${teamEmail}:`, error);
      failedEmails.push(teamEmail);
    }
  }
  
  console.log(`📊 Team emails complete: ${successCount}/${TEAM_EMAILS.length} successful`);
  if (failedEmails.length > 0) {
    console.log(`⚠️ Failed emails: ${failedEmails.join(', ')}`);
  }
  
  // Send confirmation email to customer
  try {
    console.log("📨 Sending confirmation to customer...");
    await sendWithRetry({
      from: "My Review Media <noreply@myreviewmedia.com>",
      to: [email],
      subject: "We received your message - My Review Media",
      html: getCustomerEmailHTML(name, service),
    });
    console.log("✅ Customer confirmation sent successfully");
  } catch (error) {
    console.error("❌ Failed to send customer confirmation:", error);
  }
  
  console.log("🎉 Email distribution complete!");
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, service, message }: ContactFormData = await req.json();

    console.log("📝 Contact form submission received:", { name, email, service });

    // Validate input
    if (!name || !email || !service || !message) {
      console.error("❌ Missing required fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Start background email sending (non-blocking)
    // @ts-ignore - EdgeRuntime is available in Supabase Edge Functions
    EdgeRuntime.waitUntil(
      sendAllEmails(name, email, phone, service, message)
    );

    // Return immediate success response
    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Your message has been received! We'll respond within 24 hours." 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );

  } catch (error: any) {
    console.error("❌ Error in contact form handler:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to process contact form",
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
