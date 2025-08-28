import { Inter } from "next/font/google";//importing google font from api
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs' // clerk authentication
import { Toaster } from "@/components/ui/sonner" //importing toaster from sonner to show errors
import { ThemeProvider } from "@/components/ThemeProvider.tsx" //light/dark mode theme provider
const inter = Inter({ subsets: ["latin"] });// google font language type

export const metadata = {
  title: "MockAI",
  description: "Practice using AI",
};

export default function RootLayout({ children }) {// ROOTLAYOUT - WRAPS ALL COMPONENTS IN A NEXT JS PAGE
  return (
    // Wraps app for authentication
    <ClerkProvider > 
      <html lang="en"> 
        {/* apply font to entire web page */}
        <body className={inter.className}>
          <Toaster />
          {/* theme details of the page */}
          <ThemeProvider
            attribute="class"
            defaultTheme="white"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          </body>
      </html>
    </ClerkProvider>
  );
}

// Global styling with Inter font + globals.css.

// Authentication with Clerk.

// Toasts/notifications with Sonner’s Toaster.

// Theme switching with your custom ThemeProvider.