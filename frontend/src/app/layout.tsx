import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { Providers } from "@/components/Provider";
import { Toaster } from "@/components/ui/toaster";
import { AppProvider } from "./context/AppContext";
import { AuthProvider } from "./context/AuthContext";
import { HistoryProvider } from "./context/HistoryContext";
import { UserProvider } from "./context/UserContext";
import { SelectedContactProvider } from "./context/SelectContext";



const bowlby = localFont({
  src: '../../public/fonts/BowlbyOneSC-Regular.ttf',
  variable: '--font-bowlby'
})

const dmMono = localFont({
  src: '../../public/fonts/DMMono-Regular.ttf',
  variable: '--font-dmMono'
})

const playWright = localFont({
  src: '../../public/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf',
  variable: '--font-playWright'
})

export const metadata: Metadata = {
  title: "JustPay",
  description: "Payment made with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bowlby.variable} ${dmMono.variable} ${playWright.variable} antialiased bg-wineTexture`}
      >
        <Providers>

          <SelectedContactProvider>
          <UserProvider>
          <HistoryProvider>
         <AuthProvider>
          <AppProvider>
            {children}
            </AppProvider>
         </AuthProvider>
          <Toaster/>
          </HistoryProvider>
          </UserProvider>
          </SelectedContactProvider>
          
        </Providers>
      </body>
    </html>
  );
}
