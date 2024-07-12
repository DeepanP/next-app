import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import BlogHeader from "./components/BlogHeader";
import BlogNavHeader from "./components/BlogNavHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Blog App",
  description: "Generated by create next app with integrated with mongoose and graphql",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <article>
        <header>
            <BlogHeader/>
            <nav>
                <BlogNavHeader/>
            </nav>
        </header>
        <div>
            {children}
        </div>
    </article>
  );
}