import { Orbitron } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Tanmoy | Developer Portfolio",
  description: "Welcome to Tanmoy's Portfolio",
};

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"], // choose the weights you need
  variable: "--font-orbitron",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${orbitron.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
