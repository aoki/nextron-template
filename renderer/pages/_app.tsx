import React from "react";
import "../styles.css";
import TitleBar from "../components/title-bar";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div className="main">
      <TitleBar />
      <Component {...pageProps} />
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default MyApp;
