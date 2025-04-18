import { useLanguage } from "../context/LanguageContext";
import circularImage from "../assets/imgcircular.png";
import line from "../assets/line.png";

function TradicionalFlavors() {
  const { language } = useLanguage();
  const isPT = language === "pt";

  const t = {
    centerTitle: isPT ? (
      <>
        Sabores
        <br />
        Tradicionais,
        <br />
        Toques
        <br />
        Contemporâneos
      </>
    ) : (
      <>
        Traditional
        <br />
        Flavors,
        <br />
        Contemporary
        <br />
        Twists
      </>
    ),
    circleText: isPT
      ? "UMA RELEITURA DA GASTRONOMIA TRADICIONAL PORTUGUESA"
      : "A NEW TAKE ON TRADITIONAL PORTUGUESE CUISINE",
  };

  return (
    <div className="relative flex items-center justify-center w-full h-[500px] lg:h-[700px] lg:mt-20 overflow-hidden">
      {/* Linha horizontal */}
      <img
        src={line}
        alt=""
        className="absolute top-1/2 left-0 w-full h-6 z-[4] -translate-y-1/2 lg:h-10"
      />

      {/* Texto circular girando */}
      <svg
        viewBox="0 0 650 650"
        className="absolute w-[650px] h-[650px] z-[5] animate-rotate-slow lg:w-[90vw] lg:h-[90vw] max-w-[1200px] max-h-[1200px]"
      >
        <defs>
          <path
            id="circlePath"
            d="M325,325 m -170,0 a 170,170 0 1,1 340,0 a 170,170 0 1,1 -340,0"
          />
        </defs>
        <text fill="#000" fontSize="15" fontFamily="Caudex" letterSpacing="20">
          <textPath xlinkHref="#circlePath" textLength="1065">
            {t.circleText}
          </textPath>
        </text>
      </svg>

      {/* Imagem circular central */}
      <img
        src={circularImage}
        alt=""
        className="rounded-full w-[300px] h-[300px] object-cover z-[2] lg:w-[600px] lg:h-[600px] max-w-[90vw] max-h-[90vw]"
      />

      {/* Texto no centro */}
      <div className="absolute text-white text-center z-[6] text-2xl font-caudex tracking-tight leading-snug uppercase lg:text-4xl">
        <h1>{t.centerTitle}</h1>
      </div>
    </div>
  );
}

export default TradicionalFlavors;
