import { Locale, NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import { Metadata } from "next";
import Footer from "@/components/Footer";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: Locale }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(
  props: Omit<Props, "children">
): Promise<Metadata> {
  const { locale } = await props.params;
  const t = await getTranslations({ locale });
  return {
    title: t("HomePage.title"),
    icons: {
      icon: "/image.png",
      shortcut: "/image.png",
      apple: "/image.png",
    },
  };
}

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`${poppins.variable} antialiased`}>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
