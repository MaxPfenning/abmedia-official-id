import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const now = new Date().toISOString();
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  
  <!-- Homepage - Highest Priority -->
  <url>
    <loc>https://myreviewmedia.com/</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://myreviewmedia.com/?lang=en"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://myreviewmedia.com/?lang=de"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://myreviewmedia.com/"/>
  </url>

  <!-- Impressum Page -->
  <url>
    <loc>https://myreviewmedia.com/impressum</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://myreviewmedia.com/impressum?lang=en"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://myreviewmedia.com/impressum?lang=de"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://myreviewmedia.com/impressum"/>
  </url>

  <!-- Privacy Policy Page -->
  <url>
    <loc>https://myreviewmedia.com/privacy-policy</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://myreviewmedia.com/privacy-policy?lang=en"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://myreviewmedia.com/privacy-policy?lang=de"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://myreviewmedia.com/privacy-policy"/>
  </url>

  <!-- Terms of Service Page -->
  <url>
    <loc>https://myreviewmedia.com/terms-of-service</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
    <xhtml:link rel="alternate" hreflang="en" href="https://myreviewmedia.com/terms-of-service?lang=en"/>
    <xhtml:link rel="alternate" hreflang="de" href="https://myreviewmedia.com/terms-of-service?lang=de"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://myreviewmedia.com/terms-of-service"/>
  </url>

</urlset>`;

    console.log('Sitemap generated successfully');

    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error('Error generating sitemap:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    );
  }
};

serve(handler);
