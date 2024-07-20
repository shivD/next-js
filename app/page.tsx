'use client'

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css"
import { Suspense } from "react";
import Loading from "./loading";
import ImagePic from '../images/tree-736885_640.jpg'
import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

export default function Home() {
  const { instance } = useMsal();
  const initializeSignIn = () => {
    instance.loginRedirect();
  };
  return (
    <main className={styles.main}>
                                     <div className={styles.description}>



      <Suspense fallback={<Loading/>}>
        <ul>
          <li> <Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
        </ul>|

        <div onClick={initializeSignIn}>Sign in</div>

        <AuthenticatedTemplate>
<h2>logged in</h2>
</AuthenticatedTemplate>
<UnauthenticatedTemplate>
   <h2>Not logged in</h2>
</UnauthenticatedTemplate>

    <Image
      src={ImagePic}
      alt="Picture of the author"
      width={500}
      height={500}
    />

        </Suspense>
      </div>


    </main>
  )

}
