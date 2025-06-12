import { Geist, Geist_Mono, Russo_One, Audiowide } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const russoOne = Russo_One({
  weight: '400',
  subsets: ['latin'],
})

const audiowide = Audiowide({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Stealth Cuztomz | Premium Car Wraps",
  keywords: [],
  description: "Premium Car Wraps and Delailing Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${russoOne.variable} ${audiowide.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
