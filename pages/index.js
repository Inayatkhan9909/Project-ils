import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}>
         <section>
         <Image
         src="/assets/digital course.jpg"
         alt="Vercel Logo"
      
         width={1600}
         height={24}
         priority
         />
        
         </section>
    </main>
  );
}
