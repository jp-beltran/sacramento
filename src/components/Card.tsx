import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext"; // importe isso

type CardProps = {
  imageSrc: string;
  title?: string | { pt: string; en: string };
  width?: string;
  height?: string;
};

function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  return { ref, isVisible };
}

const Card = ({
  imageSrc,
  title,
  width = "w-full",
  height = "h-[440px]",
}: CardProps) => {
  const { ref, isVisible } = useInView();
  const { language } = useLanguage();

  // Suporte a string ou objeto de tradução
  const translatedTitle =
    typeof title === "string" ? title : title?.[language] ?? "";

  return (
    <div
      ref={ref}
      className={`relative rounded-2xl lg:rounded-4xl overflow-hidden bg-cover transition-all duration-700 ${
        isVisible ? "animate-fade-in-up" : "opacity-0"
      } ${width} ${height}`}
    >
      <img
        src={imageSrc}
        alt="Imagem do Card"
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />

      {translatedTitle && (
        <div
          className="
            absolute 
            top-1 left-2 
            lg:top-auto lg:bottom-4 lg:left-4 lg:text-5xl
            py-2 
            text-white text-sm 
            rounded
          "
        >
          <h1 className="font-caudex text-2xl lg:text-5xl lg:whitespace-nowrap lg:w-[calc(100vw-8rem)] p-10">
            {translatedTitle}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Card;
