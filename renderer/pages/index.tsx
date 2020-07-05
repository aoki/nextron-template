import Head from "next/head";
import React from "react";

const IndexPage = () => {
  return (
    <div className="main">
      <Head>
        <title>Hello Nextron</title>
      </Head>
      <div>
        <img src="/images/logo_electron.svg" id="electron-log" />
        <h1> Electron + Next.js</h1>
        <img src="/images/logo_nextjs.svg" id="nextjs-log" />
      </div>
      <style jsx>{`
        .main {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
        }
        h1 {
          font-weight: 100;
          display: inline;
          margin-right: 0.5em;
          margin-left: 0.5em;
        }
        #electron-log {
          height: 24px;
        }
        #nextjs-log {
          height: 24px;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
