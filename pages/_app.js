import { imageOptimizer } from "next/dist/server/image-optimizer";
import "../styles/globals.css";
import "../styles/home.css";
import "../styles/login.css";
import "../styles/register.css";
import "../styles/profile.css";
import "../styles/game.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
