import type { Metadata } from "next";
import AuthContext from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "IChat V2",
  description: "IChat Version 2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
