import "./globals.css";

export const metadata = {
  title: " Hospital",
  description: "Trusted Healthcare Services for Your Family",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      cz-shortcut-listen="true"
      className="container"
      >

        {children}
      </body>
    </html>
  );
}