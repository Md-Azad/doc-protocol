import { Inter } from "next/font/google";
import "./globals.css";
import { getDirectory } from "@/lib/doc";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Doc-Protocal: A documantation website by Azad",
  description: "A documantation website by Azad",
};

export default function RootLayout({ children }) {
  const allDocuments = getDirectory();
  console.log(allDocuments)
  
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
