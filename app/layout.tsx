import '@/app/ui/global.css';
import { roboto, bungee } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}> {children} </body>
    </html >
  );
}
