import { ThemeProvider } from 'next-themes';

import './styles.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider themes={['adults', 'kids']} enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
