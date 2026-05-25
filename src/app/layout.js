import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cloud Solar | Own Solar. Without the Installation.",
  description:
    "Democratizing clean energy. Purchase solar panels virtually in commercial grids and receive solar credits directly on your monthly electricity bills. No roof space required.",
  keywords: [
    "virtual solar",
    "cloud solar",
    "solar hosting",
    "shared solar",
    "renewable energy credits",
    "solar panels",
    "green savings",
  ],
  authors: [{ name: "Cloud Solar Team" }],
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <div className="app-wrapper">
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
