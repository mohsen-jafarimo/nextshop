import Header from "@/components/Nav";
import "./globals.css";
import { Raleway } from "next/font/google";

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
        <main>{children}</main>
      </body>
    </html>
  );
}
