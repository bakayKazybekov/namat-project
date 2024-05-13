import { poppins } from './lib/fonts'
import '../styles/globals.scss'
import '../styles/normalize.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
