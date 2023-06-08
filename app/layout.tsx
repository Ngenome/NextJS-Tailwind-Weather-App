import { AppProvider } from "@/redux/provider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather App",
  description: "A simple weather app built with Next.js and TailwindCSS",
  url: "https://weather-app-ten.vercel.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js Weather Forecast App | Home</title>
        <meta
          name="description"
          content="Get accurate weather forecasts for your location and a five-day forecast. Stay informed with our Next.js Weather Forecast App."
        />
        <meta
          name="keywords"
          content="Next.js, Weather Forecast, Five-day Forecast, Weather App"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Next.js Weather Forecast App" />
        <meta
          property="og:description"
          content="Get accurate weather forecasts for your location and a five-day forecast. Stay informed with our Next.js Weather Forecast App."
        />
        <meta property="og:image" content="/sunny_rain.png" />
        <meta property="og:url" content={metadata.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Next.js Weather Forecast App" />
        <meta
          name="twitter:description"
          content="Get accurate weather forecasts for your location and a five-day forecast. Stay informed with our Next.js Weather Forecast App."
        />
        <meta
          name="twitter:image"
          content={`${metadata.url}/sunny_rain.png}`}
        />
        <meta name="twitter:creator" content="@cginterstellar" />
        <meta name="twitter:site" content="@cginterstellar" />

        <meta name="author" content="Kelvin Ng'eno" />
        <link rel="icon" href="/sunny_rain.png" />
      </head>
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
