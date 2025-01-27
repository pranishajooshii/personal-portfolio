import { Poppins,Outfit,NotoSerif, Archivo, Bitter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/Footer';


const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const moto = Bitter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  
});

export const metadata = {
  title: 'Pranisha Joshi',
  description: '',
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${moto.className} antialiased bg-white`}>
        <Navbar />
        {children}
       
       
      </body>
    </html>
  );
}
