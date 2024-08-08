import Kids from "./components/body/guidance_components/Kids";
import { Monitor } from "./components/body/guidance_components/Monitor";
import { Phone } from "./components/body/guidance_components/Phone";
import { TV } from "./components/body/guidance_components/TV";
import { AskSection } from "./components/body/questions/AskSection";
import { Start } from "./components/body/Start";
import Header from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="h-screen w-full">
      {/* Arka Plan ve Overlay */}

      <motion.div className="h-full w-full" variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition:{staggerChildren:0.25}  }}} initial="hidden" animate="show">
        <div className="absolute h-full w-full inset-0 -z-10 overflow-x-hidden">
          <img
            className="w-full h-full object-cover scale-125 absolute bottom-48"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/88b6b959-4086-4bd6-80f2-e8c48634649d/TR-tr-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_1293bc84-dc0d-4926-ad85-bbec70c1f97a_small.jpg"
            alt="Background"
          />
          <div className="absolute inset-0 bg-primary_1 bg-opacity-50" />
        </div>
        <Header />
        <Start />

        <TV />
        <Phone />
        <Monitor />
        <Kids />

        <AskSection />

        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
