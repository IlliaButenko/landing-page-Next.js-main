import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { WalletKitProvider } from "@gokiprotocol/walletkit";
import { DEFAULT_WALLET_PROVIDERS } from "@saberhq/use-solana";

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap");
  }, []);
  useEffect(() => {
    require("jquery/dist/jquery.min.js");
  }, []);

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <WalletKitProvider
      app={{ name: "Molana" }}
      defaultNetwork="localnet"
      walletProviders={DEFAULT_WALLET_PROVIDERS}
    >
      <AnyComponent {...pageProps} />
    </WalletKitProvider>
  );
}

export default MyApp;
