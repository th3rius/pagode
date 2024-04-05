import type { Metadata } from "next";
import "@fontsource/iosevka-aile";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quando é o próximo quinto dia útil? - Pagode",
  description:
    "Ansioso para o pagamento? Descubra quantos dias faltam até o próximo quinto dia útil do mês!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
