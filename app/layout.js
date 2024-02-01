import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Talwind Backgrounds",
  description: "A list of Talwind CSS background grids and gradients to use in your projects.",
  icons: "/logo.png",
};
export const viewport = {
  themeColor: "#020817",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
          <Header />
          {children}
          <Toaster />
          <Footer/>
      </body>
    </html>
  );
}
