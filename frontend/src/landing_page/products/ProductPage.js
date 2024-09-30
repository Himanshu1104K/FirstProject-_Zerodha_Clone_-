import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="images\kite.png"
        ProductName="Kite"
        ProductDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="https://kite-demo.zerodha.com/"
        learnMore="https://zerodha.com/products/kite"
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
      />

      <RightSection
        ProductName="Console"
        ProductDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        ArrowLink="https://zerodha.com/products/console"
        ArrowLinkTitle="Learn more"
        imageURL="images\console.png"
      />

      <LeftSection
        imageURL="images\coin.png"
        ProductName="Coin"
        ProductDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="https://coin.zerodha.com/"
        learnMore=""
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        appStore="https://apps.apple.com/in/app/coin-by-zerodha/id1392892554"
      />

      <RightSection
        ProductName="Kite Connect API"
        ProductDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        ArrowLink="https://kite.trade/"
        ArrowLinkTitle="Coin"
        imageURL="images\kiteconnect.png"
      />

      <LeftSection
        imageURL="images\varsity.png"
        ProductName="Varsity mobile"
        ProductDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
      />
      <Universe />
    </>
  );
}

export default ProductPage;
