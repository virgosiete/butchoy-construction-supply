import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";

function Hero1() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-charcoal-900 bg-opacity-70"></div>
      
      <div className="container mx-auto relative z-10 text-white px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 py-16 lg:py-0 items-center justify-center flex-col max-w-4xl mx-auto pt-20 md:pt-0">
          <div>
            <Button variant="secondary" size="sm" className="gap-4 bg-amber-600 hover:bg-amber-700 text-white text-sm sm:text-base">
              Premium Construction Materials <MoveRight className="w-4 h-4" />
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl tracking-tighter text-center font-bold">
              Build Stronger, Faster, Better
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed tracking-tight text-neutral-200 max-w-2xl text-center mx-auto">
              Premium construction materials delivered right to your site. From foundation to finish, we supply everything you need to bring your vision to life — no delays, no compromises.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <Button asChild size="lg" className="gap-4 bg-transparent border-white text-white hover:bg-white hover:text-charcoal-900 text-base sm:text-lg">
              <Link to="tel:+639369409945">
                <PhoneCall className="w-4 h-4 mr-2" /> Call Us Now
              </Link>
            </Button>
            <Button asChild size="lg" className="gap-4 bg-amber-700 hover:bg-amber-800 text-white text-base sm:text-lg">
              <Link to="/contact#contact-form">
                Get a Free Quote <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white text-sm mb-2">Scroll Down</span>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

export { Hero1 };