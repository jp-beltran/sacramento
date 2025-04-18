import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, ComponentType } from "react";
import { ClipLoader } from "react-spinners";

// Simula delay para efeito de carregamento
const withDelay = (
  importFunc: () => Promise<{ default: ComponentType<any> }>,
  delay = 1000
): Promise<{ default: ComponentType<any> }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      importFunc().then(resolve);
    }, delay);
  });
};

// Lazy-loaded components
const Home = lazy(() => withDelay(() => import("./pages/OndeAHistoria")));
const Restaurante = lazy(() =>
  withDelay(() => import("./pages/RestauranteMaisGiro"))
);
const Cocktails = lazy(() =>
  withDelay(() => import("./pages/CocktailsExclusivos"))
);
const Eventos = lazy(() => withDelay(() => import("./pages/EventosJantares")));
const SaboreieNoite = lazy(() =>
  withDelay(() => import("./pages/SaboreieNoite"))
);
const MelhorAlternativa = lazy(() =>
  withDelay(() => import("./pages/MelhorAlternativa"))
);
const Ambiente = lazy(() =>
  withDelay(() => import("./pages/AmbienteInesquecivel"))
);

function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center h-screen text-black">
          <ClipLoader color="#ffffff" size={50} />
          <p className="mt-6 text-xl font-catamaran animate-pulse">
            Carregando conteúdo...
          </p>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurante" element={<Restaurante />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/saboreie-noite" element={<SaboreieNoite />} />
        <Route path="/melhor-alternativa" element={<MelhorAlternativa />} />
        <Route path="/ambiente" element={<Ambiente />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
