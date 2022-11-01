import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function About() {
  return (
    <div className={styles.landing_container}>
      <Head>
        <title>Your title</title>
        <meta name="description" content="Your website" />
        <meta
          name="keywords"
          content="Your keybooard"
        ></meta>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main
        className={
          "text-center px-2 md:px-14 lg:px-40 mx-4 md:mx-6 lg:mx-20 2xl:mx-40 my-10 lg:my-20"
        }
      >
        <div className={styles.main_margin}>
          <div
            className={
              "text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl mb-1 md:mb-2"
            }
          >
            <h2 className={styles.line_height}>What is this landing page about?</h2>{" "}
          </div>

          <p
            className={
              "font-bold text-base md:text-sm lg:text-md xl:text-lg 2xl:text-xl mb-10"
            }
          >
            subtitle text subtitle text
          </p>

          <p
            className={
              "text-base md:text-sm lg:text-md xl:text-lg 2xl:text-xl mb-10"
            }
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>

          <button className={styles.primary_button}>
            <a
              target="_blank"
              href="/"
              rel="noopener noreferrer"
            >
              {" "}
              LINK{" "}
            </a>
          </button>

          <p
            className={
              "text-base md:text-sm lg:text-md xl:text-lg 2xl:text-xl my-10 font-semibold"
            }
          >
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>

          <button className={styles.primary_button}>
            <a
              target="_blank"
              href="https://blljhazo9cp.typeform.com/to/vOzyqBjF"
              rel="noopener noreferrer"
            >
              {" "}
              LINK{" "}
            </a>
          </button>
        </div>
      </main>
    </div>
  );
}
