import Header from "@/components/Nav";
import "./globals.css";
import { Raleway } from "next/font/google";
import Footer from "@/components/Footer";

const raleway = Raleway({
  weight: "200",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Store",
  description: "Web App By Mohsen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Header />
        <main className="bg-white mx-5">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
