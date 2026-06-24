import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Smart Web - Blog</title>
        <meta
          name="description"
          content="Artículos y novedades sobre desarrollo web"
        />
        <meta property="og:title" content="Blog Smart Web" />
        <meta
          property="og:description"
          content="Contenido optimizado para buscadores"
        />
        <meta property="og:type" content="article" />
      </Head>

      <h1>Blog</h1>
      <p>Últimos artículos de desarrollo web.</p>
    </>
  );
}