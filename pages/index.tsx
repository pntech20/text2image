import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Form from "./form";
import Carousel from "./carousel";
import ThemeToggle from "./themeToggle";
import { useState } from "react";

export default function Home() {
  const [images, setImages] = useState<string[]>([]);
  return (
    <>
      <Head>
        <title>
          Text2Image - Transform Your Texts into Stunning Images with
          OpenAI&apos;s API
        </title>
        <meta
          name="description"
          content="Welcome to our website, where you can easily transform your texts into beautiful, eye-catching images using OpenAI's advanced API technology. Whether you're a business owner looking to create engaging social media posts or a blogger looking to add some visual flair to your articles, our tool makes it simple and straightforward to turn your words into art."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          // name="image"
          property="og:image"
          content="https://text2image-git-reponsive-page-pntech20.vercel.app/ms-icon-310x310.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        {/* <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" /> */}
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            <code className={styles.code}>Text2Image</code>
          </p>
          <div>
            <a
              href="https://github.com/pntech20"
              target="_blank"
              rel="noopener noreferrer"
            >
              By <code className={styles.code}>pntech20</code>
            </a>
          </div>
          <ThemeToggle />
        </div>
        {/* <div className={styles.mobile}>
          <Menu shadow="md" width={200}>
            <Menu.Target>
              <Button>
                <IconMenu size={14} />
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Label>
                <p>
                  <code className={styles.code}>Text2Image</code>
                </p>
              </Menu.Label>

              <ThemeToggle />

              <Menu.Divider />
              <Menu.Label>
                <div>
                  <a
                    href="https://github.com/pntech20"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    By <code className={styles.code}>pntech20</code>
                  </a>
                </div>
              </Menu.Label>
            </Menu.Dropdown>
          </Menu>
        </div> */}
        <Form setImages={setImages} />

        <div className={styles.center}>
          {images.length > 0 && <Carousel images={images} />}
        </div>
      </main>
    </>
  );
}
