import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Smart Web - Contacto</title>
        <meta
          name="description"
          content="Página de contacto de Smart Web"
        />
        <meta property="og:title" content="Contacto Smart Web" />
        <meta
          property="og:description"
          content="Comunícate con nosotros"
        />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Contacto</h1>
      <p>Formulario de contacto.</p>
    </>
  );
}