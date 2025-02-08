export type Props = {
  title: string;
  includeNav: boolean;
};

export const Header = (props: Props) => {
  return (
    <header>
      <h1>
        <img class="logo" src="/web-app-manifest-192x192.png" alt="" />{" "}
        {props.title}
      </h1>
      {props.includeNav && <a href="/about.html">Hakkında</a>}
    </header>
  );
};
