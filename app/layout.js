import { Cabin_Condensed, Quintessential } from "next/font/google";
import "./globals.css";
import { FloatingNavbar } from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingActionButton from "./components/Floating";

const cabinCondensed = Cabin_Condensed({
  subsets: ["latin"],
  variable: "--font-cabin-condensed",
  weight: ["400", "500", "600", "700"], // Include all weights you need
});

const quintessential = Quintessential({
  subsets: ["latin"],
  variable: "--font-quintessential",
  weight: "400", // Quintessential typically has one weight
});

export const metadata = {
  title: "Krondoshi Dance Academy",
  description: "Classical Indian dance academy teaching Shankar style, Rabindrik, Nazrul nritya, Folk, Odissi and Bharatnatyam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cabinCondensed.variable} ${quintessential.variable} font-sans antialiased`}
      style={{
          fontFamily: 'var(--cabinCondensed)',
          
        }}>
          <FloatingNavbar />
        {children}
        <FloatingActionButton />
        <Footer />
      </body>
    </html>
  );
}