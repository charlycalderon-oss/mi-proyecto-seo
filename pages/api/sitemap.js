const BASE_URL = "https://mi-proyecto-seo-virid.vercel.app";

async function getPagesFromCMS() {

  return [
    {
      title: "Inicio",
      url: "/"
    },
    {
      title: "Blog",
      url: "/blog"
    },
    {
      title: "Contacto",
      url: "/contacto"
    }
  ];

}


export default async function handler(req, res) {

  const pages = await getPagesFromCMS();


  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

${pages
  .map(
    (page) => `
<url>
  <loc>${BASE_URL}${page.url}</loc>
</url>
`
  )
  .join("")}

</urlset>`;


  res.setHeader(
    "Content-Type",
    "text/xml"
  );


  res.write(sitemap);

  res.end();

}