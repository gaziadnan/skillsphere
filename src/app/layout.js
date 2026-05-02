import "./globals.css";
import { Toaster } from "react-hot-toast";
// import Navbar from "@/components/shared/Navbar";
// import Footer from "@/components/shared/Footer";

import Footer from "../components/shared/Footer"; 
import Navbar from "../components/shared/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> 

        
          {children}
       

        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}

// https://meet.google.com/ftu-jvcq-uhh