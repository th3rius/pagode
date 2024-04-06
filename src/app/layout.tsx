import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
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
  // TZ is a reserved variable in Vercel, so we override it here
  // see: https://vercel.com/docs/projects/environment-variables/reserved-environment-variables
  process.env.TZ = "America/Sao_Paulo";

  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
