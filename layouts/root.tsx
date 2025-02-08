import { PropsWithChildren } from "hono/jsx";

export type Props = {
  title: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
  extraScripts?: Array<string>;
};

export const Root = (props: PropsWithChildren<Props>) => {
  return (
    <>
      {"<!DOCTYPE html>"}
      <html lang="tr">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>{props.title}</title>
          <link
            rel="icon"
            type="image/png"
            href="/favicon-96x96.png"
            sizes="96x96"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link rel="manifest" href="/site.webmanifest" />

          <link rel="stylesheet" href="/styles.css" />

          {props.description && (
            <>
              <meta name="description" content={props.description} />
              <meta property="og:description" content={props.description} />
            </>
          )}
          <meta property="og:title" content={props.title} />
          {props.ogImage && (
            <meta property="og:image" content={props.ogImage} />
          )}
          <meta property="og:image:alt" content="" />
          <meta property="og:locale" content="tr_TR" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          {props.ogUrl && (
            <>
              <meta property="og:url" content={props.ogUrl} />
              <link rel="canonical" href={props.ogUrl} />
            </>
          )}

          <link rel="icon" href="/favicon.ico" />
          {props.extraScripts &&
            props.extraScripts.map((script) => <script src={script}></script>)}
        </head>

        <body>
          <div class="fill">{props.children}</div>
          <footer>Selim Dinçer – tüm hakları saklıdır.</footer>
        </body>
      </html>
    </>
  );
};
