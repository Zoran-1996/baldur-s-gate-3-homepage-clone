import type { Metadata } from "next";
import { Crimson_Text, Noto_Sans } from "next/font/google"; // Add Google Fonts
import "./globals.css";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";

const crimsonText = Crimson_Text({
  weight: ["600"],
  variable: "--font-crimson-text",
  subsets: ["latin"],
  display: "swap",
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baldur's Gate 3 | Clone",
  description:
    "An ancient evil has returned to Baldur's Gate, intent on devouring it from the inside out. The fate of Faerûn lies in your hands. Alone, you may resist. But together, you can overcome. Gather your party.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${crimsonText.variable} ${notoSans.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
