import { Orbitron } from "next/font/google";
import "./globals.css";
import BackgroundMotion from "./components/BackgroundMotion";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
});

export const metadata = {
  title: "Tanmoy | Developer Portfolio",
  description: "Welcome to Tanmoy's Portfolio",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} antialiased relative bg-black`}>
        {/* Background animation */}
        <BackgroundMotion />

        {/* Main content */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
