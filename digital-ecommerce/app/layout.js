import { Inter } from "next/font/google";
import "../app/_styles/globals.css";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import { CartProvider } from "./_components/CartContext";
import { Toaster } from "react-hot-toast";
import { auth } from "./_lib/auth";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dragons",
  description: "the best digital e-commerce",
};

export default async function RootLayout({ children }) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={`${inter.className} h-full `}>
        <CartProvider>
          <Toaster />
          <div className="layout relative">
            <header className="absolute top-0 ">
              <Navbar session={session} />
            </header>
          </div>
          <main className="main-container mt-10 h-full relative min-h-screen">{children}</main>

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
