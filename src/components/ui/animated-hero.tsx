import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useModal } from "../../context/ModalContext";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const { openContactModal } = useModal();
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
      
      <div className="container mx-auto relative z-10 text-white px-4 sm:px-6 lg:px-8 flex items-center justify-center h-full">
        <div className="flex gap-5 sm:gap-6 md:gap-8 items-center justify-center flex-col max-w-4xl w-full">
          <div className="flex gap-3 md:gap-4 flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-7xl max-w-3xl tracking-tighter text-center font-bold">
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
              <span className="text-white block mt-2 md:mt-0">construction supplies</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed tracking-tight text-neutral-200 max-w-2xl text-center mx-auto mt-3 md:mt-4">
              From foundation to finish, we provide everything you need for your construction projects. 
              Sand, gravel, cement, hollow blocks and more — delivered on time, every time.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6 w-full sm:w-auto justify-center">
            <Button 
              size="lg" 
              className="gap-4 bg-amber-700 hover:bg-amber-800 text-white text-base sm:text-lg"
              onClick={openContactModal}
            >
              Get a Free Quote <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Hero };