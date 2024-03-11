import { ENG_navLinks } from "@/constants/EnglishPage";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function NavLinks() {
  const [currentlyHovered, setHovered] = useState(0);
  return (
    <>
      {ENG_navLinks.map((props: { _id: number; title: string; href: string }) => (
        <Link
          key={props._id}
          href={props.href}
          className="relative -mx-3 -my-2 rounded-lg py-2 text-base text-slate-600 transition-colors hover:shadow-lg hover:shadow-slate-100"
          onMouseEnter={() => setHovered(props._id)}
          onMouseLeave={() => setHovered(0)}
        >
          <AnimatePresence>
            {currentlyHovered === props._id && (
              <motion.span
                className="absolute inset-0 rounded-lg bg-slate-200"
                layoutId="hoverBackground"
                initial={{opacity:0}}
                animate={{opacity:1, transition: {duration: 0.1}}}
                exit={{opacity:0, transition:{duration:0.1, delay:0.2}}}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10 px-2">{props.title}</span>
        </Link>
      ))}
    </>
  );
}
