import { motion } from "framer-motion";
import TechStack from "./components/TechStack";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 text-white flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 w-150 h-150 -translate-x-1/2 bg-cyan-100/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-100 h-100 bg-red-300/10 blur-[100px] rounded-full" />
      </div>

      <div className="flex flex-col items-center gap-10">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold bg-linear-to-r from-cyan-100 to-red-300 bg-clip-text text-transparent"
        >
          Frontend Tech Stack
        </motion.h1>

        <TechStack />
      </div>
    </div>
  );
}
