import { useScript } from "../hooks/useScript";

export const BlogTwitterEmbed = () => {
  useScript("https://platform.twitter.com/widgets.js");

  return (
    <div
      style={{
        alignSelf: "center",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          📢 Question: What do you Frontend/Node developers use spread in object
          literals for (the ...o syntax inside object literals)? Ideally with
          concrete examples.
          <br />
          <br />
          Please help us on the{" "}
          <a href="https://twitter.com/v8js">@v8js</a> team
          to understand your use cases so we can optimize the right things. 🙏
        </p>
        &mdash; Benedikt Meurer 🍀 @nodeconfeu 🇮🇪 (@bmeurer){" "}
        <a href="https://twitter.com/bmeurer/status/1137025197557669888">
          June 7, 2019
        </a>
      </blockquote>
    </div>
  );
};
