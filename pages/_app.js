import App from "next/app";
import React from "react";
import Head from 'next/head'
//import '../styles/tailwind.css';
//import '../styles/global.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <>
      <Head>
        <title>Project Bright PDF Renderer</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://rsms.me/inter/inter.css" rel="stylesheet"/> 
      </Head>
      <Component {...pageProps} key={router.pathname} />    
      </>
    );
  }
}
