import Layout from "../components/layout/Layout";
import MainNavigation from "../components/layout/MainNavigation";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
