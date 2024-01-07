import { ClerkProvider } from "@clerk/nextjs";
import { dark } from '@clerk/themes';
import { type AppType } from "next/app";
import { NextUIProvider } from "@nextui-org/react"
import { api } from "~/utils/api";

import "~/styles/globals.css";


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark
      }}
      afterSignInUrl='/dashboard' >

      <Component {...pageProps} />
    </ClerkProvider >
  )
};

export default api.withTRPC(MyApp);
