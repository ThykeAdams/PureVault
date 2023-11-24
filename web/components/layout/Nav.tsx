import { AnimatePresence, motion, spring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaMoon } from "react-icons/fa";

type NavBarProps = {};

export default function NavBar({}: NavBarProps) {
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: any) => {
    if (accountRef.current && !accountRef.current.contains(event.target)) {
      setAccountOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="absolute top-0 right-0 p-3 flex gap-2 z-50">
      <div className="p-0.5 bg-background-secondary rounded-md shadow-md">
        <div className="flex items-center gap-2 hover:bg-background-third rounded-md px-3 h-full cursor-pointer">
          <FaMoon />
        </div>
      </div>
      <div className="relative" ref={accountRef}>
        <div className="p-0.5 bg-background-secondary rounded-md cursor-pointer shadow-md">
          <div
            onClick={() => setAccountOpen(!accountOpen)}
            className="flex gap-2 hover:bg-background-third duration-300 rounded-md px-3"
          >
            <img
              className="h-12 w-12 rounded-full border-4 border-background-third"
              src="https://avatars.githubusercontent.com/u/45541936?v=4"
            />
            <div>
              <p>Thykie</p>
              <p className="text-xs opacity-50">thyke@thyke.dev</p>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {accountOpen && (
            <motion.div
              initial={{ scale: 0.8, x: 20, y: -20 }}
              animate={{ scale: 1, x: 0, y: 0 }}
              exit={{ scale: 0.0, x: 50, y: -50, transition: { type: "just" } }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 10,
                duration: 0.5,
              }}
              className="bg-background-secondary p-3 rounded-md absolute right-0 top-[4rem] w-full shadow-lg"
            >
              <div>
                <img
                  className="rounded-full border-4 border-background-third"
                  src="https://avatars.githubusercontent.com/u/45541936?v=4"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
