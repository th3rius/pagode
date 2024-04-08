import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource/iosevka-aile";
import "./globals.css";
import { Settings } from "luxon";

Settings.defaultLocale = "pt-BR";
Settings.defaultZone = "America/Sao_Paulo";

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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
