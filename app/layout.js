import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import UserScriptLoader from "@/components/lib-loader/UserScriptLoader";
import InjectCSS from "@/components/lib-loader/InjectCSS";
import UserHeader from "@/components/header/UserHeader";
import Footer from "@/components/footer/Footer";
import MenuHeader from "@/components/menu-header/MenuHeader";
import PopupSignin from "@/components/popup/PopupSignin";
import PopupSignup from "@/components/popup/PopupSignup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lové - Nền tảng đặt workshop chất lượng",
  description: "Love, nơi tụ họp của những workshop chất lượng và đặt vé siêu đơn giản",
  charset: "UTF-8",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="msapplication-TileColor" content="#0E0E0E" />
        <meta name="template-color" content="#0E0E0E" />
        <meta name="description" content="Index page" />
        <meta name="keywords" content="index, page" />
        <meta name="author" content="" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MenuHeader />
        <UserHeader />
        {children}
        <Footer />

        <PopupSignin />
        <PopupSignup />
        <InjectCSS url="/assets/lib/user/css/style.css?v=1.0.0" />
        <UserScriptLoader />
      </body>
    </html>
  );
}
