import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { CookieBanner } from "../components/CookieBanner";
import { StickyReserveButton } from "../components/StickyReserveButton";
import { routing } from "@/i18n/routing";
import { localeAlternates } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.home" });
  return {
    title: {
      default: t("title"),
      template: "%s",
    },
    description: t("description"),
    alternates: localeAlternates(locale, "/"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as typeof routing.locales[number])) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${cormorant.variable} ${montserrat.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <StickyReserveButton />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
