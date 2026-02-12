import * as React from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";

type TechBadgeProps = React.ComponentProps<typeof Badge>;

export default function TechBadge({
  className,
  children,
  ...props
}: TechBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="inline-block"
    >
      <Badge
        variant="outline"
        className={cn(
          `
          rounded-full
          px-4 py-1.5
          text-xl font-medium tracking-wide
          bg-linear-to-r from-cyan-500/10 to-blue-500/10
          text-cyan-300
          border border-cyan-400/20
          backdrop-blur-md
          transition-all duration-300
          hover:border-cyan-400/40
          hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]
          `,
          className,
        )}
        {...props}
      >
        {children}
      </Badge>
    </motion.span>
  );
}
