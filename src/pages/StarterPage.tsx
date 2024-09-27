import { Start } from "../components/starter_page_components/Start";
import { TV } from "../components/starter_page_components/guidance_components/TV";
import { Phone } from "../components/starter_page_components/guidance_components/Phone";
import { Monitor } from "../components/starter_page_components/guidance_components/Monitor";
import Kids from "../components/starter_page_components/guidance_components/Kids";
import { AskSection } from "../components/starter_page_components/questions/AskSection";
import { motion } from "framer-motion";
import HeaderStarter from "../components/starter_page_components/HeaderStarter";

const StarterPage = () => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.25 } },
      }}
      initial="hidden"
      animate="show"
    >
      <div className="flex flex-col gap-10 h-[500px] lg:h-[700px] ">
        {/* Arka Plan ve Overlay */}
        <div
          className="absolute inset-0 w-full h-[500px] lg:h-[700px] -z-10 overflow-hidden bg-cover bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/88b6b959-4086-4bd6-80f2-e8c48634649d/TR-tr-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_1293bc84-dc0d-4926-ad85-bbec70c1f97a_small.jpg)]"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <HeaderStarter />
        <Start />
      </div>
      <TV />
      <Phone />
      <Monitor />
      <Kids />
      <AskSection />
    </motion.div>
  );
};

export default StarterPage;
