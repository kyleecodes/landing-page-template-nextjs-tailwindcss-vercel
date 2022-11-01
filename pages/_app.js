import "../styles/globals.css";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
