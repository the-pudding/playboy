import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { css } from "@emotion/css";

import Wordmark from "./Wordmark";

export default function Footer() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    async function loadStories() {
      const url = `https://pudding.cool/assets/data/stories.json?v=${Date.now()}`;

      const response = await fetch(url);
      const data = await response.json();
      setStories(
        data.filter((d) => d.url !== window.location.href).slice(0, 4)
      );
    }

    loadStories();
  }, []);

  return (
    <footer
      className={css`
        padding: 3em 1em;
        margin-top: 10em;
      `}
    >
      <section
        style={{
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          maxWidth: "70em",
        }}
      >
        {stories.map(({ hed, url, image }) => (
          <div
            className={css`
              display: block;
              width: 100%;
              margin-bottom: 3rem;

              @media only screen and (min-width: 30em) {
                width: 50%;
                padding: 0 1rem;
              }

              @media only screen and (min-width: 50em) {
                width: 25%;
                padding: 0 1rem;
              }
            `}
          >
            <a
              href={`https://pudding.cool/${url}`}
              style={{
                display: "block",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              <img
                src={`https://pudding.cool/common/assets/thumbnails/640/${image}.jpg`}
                alt="thumbnail"
                style={{
                  width: "100%",
                }}
              />
              <span
                style={{
                  display: "block",
                  marginTop: "1em",
                  lineHeight: "1.2",
                }}
              >
                {hed}
              </span>
            </a>
          </div>
        ))}
      </section>

      <section
        style={{
          margin: "3rem auto",
          marginTop: "0",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "10em",
            margin: "1em auto",
            height: "auto",
          }}
        >
          <Wordmark />
        </div>
        <p>
          <a href="https://pudding.cool">The Pudding</a> is a digital
          publication that explains ideas debated in culture with visual essays.
        </p>
      </section>

      <section class="links">
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { name: "about", url: "https://pudding.cool/about" },
            { name: "facebook", url: "https://facebook.com/pudding.viz/" },
            { name: "twitter", url: "https://twitter.com/puddingviz/" },
            {
              name: "instagram",
              url: "https://www.instagram.com/the.pudding",
            },
            { name: "patreon", url: "https://patreon.com/thepudding/" },
            { name: "privacy", url: "https://pudding.cool/privacy/" },
            { name: "newsletter", url: "http://eepurl.com/czym6f" },
            { name: "rss", url: "https://pudding.cool/feed/index.xml" },
          ].map(({ name, url }) => (
            <li
              key={name}
              style={{
                display: "flex",
                padding: "0.5em 1em",
              }}
            >
              <a
                href={url}
                style={{
                  display: "flex",
                  border: "none",
                  alignItems: "center",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    marginLeft: "0.5em",
                  }}
                >
                  {name.toUpperCase()}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </footer>
  );
}
