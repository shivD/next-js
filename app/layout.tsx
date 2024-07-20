"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from '../scss/style.module.scss'
const inter = Inter({ subsets: ["latin"] });
import { MsalProvider } from "@azure/msal-react";
import {PublicClientApplication, Configuration } from "@azure/msal-browser";
import { msalConfig } from "./msal/msal";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pca = new PublicClientApplication(msalConfig);
  return (


    <html lang="en">
      <body className={`${inter.className} ${styles.body}`} suppressHydrationWarning={true}>
      <MsalProvider instance={pca}>
        {children}
 </MsalProvider>
        </body>
    </html>
  );
}
