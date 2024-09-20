import localFont from "next/font/local";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Header from "../components/layout/Header";
import Body from "../components/layout/Body";
import Footer from "../components/layout/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "next-ecommerce",
  description: "e-commerce application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq0282KyyEpxfo1ITwwe8Gm6USdO5Zjq5Ms4MjHHk3G4IqBZT23bI3O-h7paOmmbEQ5CU&usqp=CAU"
        />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />
      </head>
      <body>
        <Header />
        <Body />
        {children}
        <Footer />
      </body>
    </html>
  );
}
