import { motion } from "framer-motion";
import TechBadge from "./semantic/TechBadge";

export default function TechStack() {
  const stack = [
    "Vite",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "OpenAI API",
    "React Hook Form",
    "Zod",
    "Shadcn UI",
  ];

  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.08 },
        },
      }}
      className="flex flex-wrap justify-center gap-4 max-w-2xl"
    >
      {stack.map((item) => (
        <motion.li
          key={item}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <TechBadge>{item}</TechBadge>
        </motion.li>
      ))}
    </motion.ul>
  );
}
