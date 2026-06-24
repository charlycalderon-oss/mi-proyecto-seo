import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Smart Web - Inicio</title>
        <meta
          name="description"
          content="Página principal optimizada con técnicas SEO en Next.js"
        />
        <meta property="og:title" content="Smart Web - Inicio" />
        <meta
          property="og:description"
          content="Aplicación web optimizada con Next.js"
        />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Bienvenido a Smart Web</h1>
      <p>Página principal optimizada para SEO.</p>
    </>
  );
}