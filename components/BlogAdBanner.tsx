import React, { useEffect } from "react";

type AdBannerProps = {
  adSlot: string;
  adLayout?: "in-article";
  adFormat?: "auto" | "fluid";
};

export const AdBanner: React.FC<AdBannerProps> = (props) => {
  const adFormat = props.adFormat || "auto";

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", width: "100%" }}
      data-ad-client="ca-pub-6098077505348522"
      data-ad-slot={props.adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive="true"
      {...(props.adLayout && { "data-ad-layout": props.adLayout })}
    />
  );
};
