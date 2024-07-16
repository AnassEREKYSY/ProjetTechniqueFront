import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider/ReduxProvider";
import { Flowbite } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Canard",
  description: "Express yourself comme un canard",
};

const customTheme = {
  toggleSwitch: {
    primary: "bg-primary-500 text-primary-100",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans dark:bg-stone-900 text-stone-900 dark:text-white overflow-hidden">
      <Flowbite theme={{ theme: customTheme }}>
          <ReduxProvider>{children}</ReduxProvider>
        </Flowbite>
      </body>
    </html>
  );
}
