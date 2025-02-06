import { HeroHighlightDemo } from "@/components/HeroSection";
import Footer from "@/components/footer"
export default function Home() {
  return (
    <main className="min-h-screen bg-blue/[0.96] antialiased bg-grid-white/[0.02]">
    <HeroHighlightDemo/>
    <Footer/>
    </main>
  );
}
