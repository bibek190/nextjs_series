export const metadata = {
  title: {
    template: "%s | My App",
    default: "My App",
  },
  description: "Hello World",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "teal" }}>Header</header>
        {children}
        <footer style={{ background: "teal" }}>Footer</footer>
      </body>
    </html>
  );
}
