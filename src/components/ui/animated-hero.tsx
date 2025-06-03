import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["premium", "reliable", "durable", "quality", "trusted"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="hero-section bg-hero-pattern">
      <div className="absolute inset-0 bg-charcoal-900 bg-opacity-70"></div>
      
      <div className="container mx-auto relative z-10 text-white px-4 sm:px-6 lg:px-8">
        <div className="flex gap-8 py-16 lg:py-0 items-center justify-center flex-col max-w-4xl mx-auto pt-20 md:pt-0">
          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl md:text-7xl max-w-3xl tracking-tighter text-center font-bold">
              <span className="text-white">We deliver</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-amber-400"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-white block">construction supplies</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-neutral-200 max-w-2xl text-center mx-auto mt-4">
              From foundation to finish, we provide everything you need for your construction projects. 
              Sand, gravel, cement, hollow blocks and more — delivered on time, every time.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button asChild size="lg" className="gap-4 bg-transparent border-white text-white hover:bg-white hover:text-charcoal-900">
              <Link to="tel:+639123456789">
                <PhoneCall className="w-4 h-4 mr-2" /> Call Us Now
              </Link>
            </Button>
            <Button asChild size="lg" className="gap-4 bg-amber-700 hover:bg-amber-800 text-white">
              <Link to="/contact">
                Get a Free Quote <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };