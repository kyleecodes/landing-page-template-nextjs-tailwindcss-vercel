import Head from "next/head";
import styles from "../styles/Home.module.css";
import SocialLink from "../components/SocialLinks";

export default function Socials() {
  return (
    <div className={styles.landing_container}>
      <Head>
        <title>Your title</title>
        <meta name="description" content="Your description" />
        <meta name="keywords" content="Your keywords"></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={"mx-6 md:mx-10 lg:mx-40 2xl:mx-80 my-1 lg:my-10"}>
        <div className={"text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl mb-10"}>
          <div className={styles.line_height}>
            <h2 className={"text-center"}>SOCIAL LINKS</h2>
          </div>{" "}
        </div>

        <div>
          <SocialLink />
        </div>
      </main>
    </div>
  );
}
