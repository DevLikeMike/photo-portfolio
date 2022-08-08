import Head from "next/head";
import Header from "./navigation/Header";

function Layout({ title, description, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='title' content={title} />
        <meta name='description' content={description} />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;

Layout.defaultProps = {
  title: "Coffee Cabinet",
  description: "lorem20",
};
