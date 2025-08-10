import { IMenuItem } from "@/interfaces";
import { FaCodeCompare, FaComments, FaImage, FaLanguage, FaPodcast, FaSpellCheck, FaUser, FaWandMagicSparkles, FaWater, FaRocketchat  } from "react-icons/fa6";

export const menuRoutes: IMenuItem[] = [
    {
    to: "/chatbot-gemini",
    title: "Chat Bot",
    description: "Chatea con Gemini",
    icon: <FaRocketchat />
  },
  {
    to: "/orthography",
    title: "Ortografía",
    description: "Corregir ortografía",
    icon: <FaSpellCheck />
  },
  {
    to: "/pros-cons",
    title: "Pros & Cons",
    description: "Comparar pros y contras",
    icon: <FaCodeCompare />
  },
  {
    to: "/pros-cons-stream",
    title: "Como stream",
    description: "Con stream de mensajes",
    icon: <FaWater />
  },
  {
    to: "/translate",
    title: "Traducir",
    description: "Textos a otros idiomas",
    icon: <FaLanguage />
  },
  {
    to: "/text-to-audio",
    title: "Texto a audio",
    description: "Convertir texto a audio",
    icon: <FaPodcast />
  },
  {
    to: "/image-generation",
    title: "Imágenes",
    description: "Generar imágenes",
    icon: <FaImage />
  },
  {
    to: "/image-tunning",
    title: "Editar imagen",
    description: "Generación continua",
    icon: <FaWandMagicSparkles />
  },
  {
    to: "/audio-to-text",
    title: "Audio a texto",
    description: "Convertir audio a texto",
    icon: <FaComments />
  },
  {
    to: "/assistant",
    title: "Asistente",
    description: "Información del asistente",
    icon: <FaUser />
  },
];