import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/Logo.svg";
import InfoHeader from "./InfoHeader";
import menu from "../assets/MenuIco.svg";
import bgHeader from "../assets/bgHeader.png";
import bg from "../assets/backgroundHeaderFooter.svg";
import MobileNavBar from "./MobileNavbar";

type HeaderProps = {
  titlePt: string;
  titleEn: string;
  imgSrc?: string;
};

function Header({ titlePt, titleEn, imgSrc }: HeaderProps) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const { toggleLanguage, language } = useLanguage();

  const texts = {
    restaurante: language === "pt" ? "Restaurante" : "Restaurant",
    bar: language === "pt" ? "Bar" : "Bar",
    grupos: language === "pt" ? "Grupos" : "Groups",
    jantar: language === "pt" ? "Jantar Tarde" : "Late Dinner",
    esplanada: language === "pt" ? "Esplanada" : "Terrace",
    club: language === "pt" ? "Club" : "Club",
    title: language === "pt" ? titlePt : titleEn,
  };

  return (
    <div className="top-0 w-full bg-repeat overflow-hidden">
      {/* Faixa superior com PT/EN */}
      <motion.div
        className="h-4 bg-center flex flex-row-reverse px-2 lg:h-10"
        style={{ backgroundImage: `url(${bg})` }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <button className="cursor-pointer" onClick={toggleLanguage}>
          <h1 className="text-xs lg:text-base text-white">PT/EN</h1>
        </button>
      </motion.div>

      {/* Navbar desktop */}
      <motion.div
        className="hidden lg:flex items-center justify-between w-full px-20 py-6 relative z-50 lg:h-35"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex gap-4 text-black text-sm lg:text-base">
          <Link to="/restaurante" className="cursor-pointer hover:underline">
            {texts.restaurante}
          </Link>
          <Link to="/cocktails" className="cursor-pointer hover:underline">
            {texts.bar}
          </Link>
          <Link to="/eventos" className="cursor-pointer hover:underline">
            {texts.grupos}
          </Link>
        </div>

        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2"
          initial={{ y: 200, opacity: 0, scale: 1.4 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.6 }}
        >
          <Link to="/">
            <motion.img
              src={logo}
              alt="Logo Sacramento"
              className="h-10 lg:h-15"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            />
          </Link>
        </motion.div>

        <div className="flex gap-4 text-black text-sm lg:text-base">
          <Link to="/saboreie-noite" className="cursor-pointer hover:underline">
            {texts.jantar}
          </Link>
          <Link
            to="/melhor-alternativa"
            className="cursor-pointer hover:underline"
          >
            {texts.esplanada}
          </Link>
          <Link to="/ambiente" className="cursor-pointer hover:underline">
            {texts.club}
          </Link>
        </div>
      </motion.div>

      {/* Navbar mobile */}
      <div className="flex lg:hidden flex-row w-full p-10 justify-between items-center">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <button
          className="cursor-pointer"
          onClick={() => setShowMobileNav(true)}
        >
          <img src={menu} alt="Menu" />
        </button>
      </div>

      {showMobileNav && (
        <MobileNavBar onClose={() => setShowMobileNav(false)} />
      )}

      {/* Banner com título e animação no background */}
      <motion.div
        className="relative w-full h-50 lg:h-100 lg:pl-20 flex items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${
              imgSrc || bgHeader
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ scale: 1.05 }}
          animate={{ scale: [1.05, 1, 1.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.h1
          className="relative z-10 text-3xl lg:text-5xl font-caudex py-10 px-5 text-white text-left lg:max-w-2/5 uppercase"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          {texts.title}
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      >
        <InfoHeader />
      </motion.div>
    </div>
  );
}

export default Header;
