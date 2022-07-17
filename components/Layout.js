import Head from "next/head";
import Header from "./navigation/Header";

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='title' content='Coffee Cabinet' />
      </Head>
      <Header />
      {children}
    </>
  );
}

export default Layout;

Layout.defaultProps = {
  title: "Coffee Cabinet",
};
