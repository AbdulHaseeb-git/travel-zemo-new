import localFont from "next/font/local";
import { Poppins, Volkhov } from '@next/font/google';
import "./globals.css";

const poppins = Poppins({
  subsets : ['latin'],
  weight : ['400', '500', '700'],
  variable : "--font-poppins"
})
const volkhov = Volkhov({
  subsets : ['latin'],
  weight : ['400', '700'],
  variable : "--font-volkhov"
})
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
  title: "Travel_App",
  description: "It is travel app using next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${volkhov.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
