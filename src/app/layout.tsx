import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "QR Code",
//   description: "Generated by Endy",
// };

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <div className="flex flex-col">
        {/* <header className="bg-gray-900 mb-8 py-d">
          <div className="container mx-auto flex justify-center">
            <Link href="/" legacyBehavior>
              Home
            </Link>
            
          </div>
        </header> */}
        <main className="container max-auto flex-1">{children}</main>
        {/* <footer className="'bg-gray-900 mt-8 py-4">
          <div className="container mx-auto flex justify-center">
            &copy; 2023 EndyQR
          </div>
        </footer> */}
      </div>
    </html>
  );
}
