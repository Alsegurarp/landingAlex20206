// Image imports
import messengerClone from '../assets/proyectos/LoginProcess.webp';
// import image6 from '../assets/imageCardItinerario.webp';
// import image7 from '../assets/imageCardItinerario.webp';
import japonPremium from '../assets/proyectos/viajesPremiumWebsite.webp';
import barrancasPremium from '../assets/proyectos/barrancasPremiumLanding.webp';
import figmaProject from '../assets/proyectos/FigmaProject.webp';
import yourNotesApp from '../assets/proyectos/your_notes_ui_mini.webp';


export interface BestSellerCard {
  title: string;
  subtitulo: string;
  description: string;
  src: string ;
  link: string;
}

export const bestSellersCards: BestSellerCard[] = [
  {
    title: "Japon Premium",
    subtitulo: "Website in NextJS with 42 inside routes",
    description: "From prototyping on Figma, development on React and later on (For client's decisions) migrated to NextJS.",
    src: japonPremium,
    link: "https://japonnextjs.netlify.app/",
  },
  {
    title: "Barrancas Premium",
    subtitulo: "Built with NextJS, TailwindCSS and TypeScript",
    description: "Modern 'look and feel', dark mode, NextJS website with dynamic content and navigation, many subpages with great performance.",
    src: barrancasPremium,
    link: "https://nextjsbarrancas.netlify.app/",
  },
  {
    title: "Your notes app",
    subtitulo: "Mobile development: Built with Flutter",
    description: "Notes creator, but with an extension to it: You can share your notes with friends. Implements SQLite, once the note is saved locally, gets copied in an extern server.",
    src: yourNotesApp,
    link: "https://github.com/Alsegurarp/flutter-login-processes",
  },
  {
    title: "JobNow",
    subtitulo: "Figma project: Prototyping and navigation flow",
    description: "Creation of an app solving a problem from my community using all what i've learned in CEI Madrid",
    src: figmaProject,
    link: "https://www.figma.com/design/3lQqxJBTsDgnJ8YxjKymlG/Proyecto-final-CEI?node-id=0-1&p=f&t=hNDG37ErYquBZ0K7-0",
  },
  {
    title: "Messenger clone",
    subtitulo: "NextJS app, mongoDB and NodeJS",
    description: "Creation of a messenger clone implementing realtime messages (websockets), login process and creation of users process.",
    src: messengerClone,
    link: "https://github.com/Alsegurarp/messenger-clone",
  },
];
