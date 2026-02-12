import { motion } from "framer-motion";

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
  ];

  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="flex flex-wrap gap-3"
      variants={{
        show: {
          transition: { staggerChildren: 0.08 },
        },
      }}
    >
      {stack.map((item) => (
        <motion.li
          key={item}
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.06 }}
          transition={{ type: "spring", damping: 18 }}
          className="
            rounded-full
            border border-white/10
            bg-white/5
            px-4 py-1.5
            text-sm text-zinc-200
            cursor-default
          "
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
