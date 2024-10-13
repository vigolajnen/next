import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  title: 'Тестовый проект',
  description: 'Описание тестового проекта'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      
      <body>
        {children}
      </body>
    </html>
  );
}
