import { motion } from "framer-motion";
import TechStack from "./components/TechStack";
export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl font-bold"
        >
          Frontend Tech Stack
        </motion.h1>

        <TechStack />
      </div>
    </div>
  );
}
