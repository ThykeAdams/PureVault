import Head from "@/components/utility/Head";
import {
  FaClock,
  FaCommentDots,
  FaDoorOpen,
  FaFolder,
  FaLockOpen,
  FaPencilAlt,
  FaTrash,
  FaUser,
} from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { getFaviconUrl } from "@/util/functions";
import SideBarWrapper from "@/components/layout/SideBar";
import DashboardWrapper from "@/components/layout/DashboardWrapper";

export default function Home() {
  return (
    <div>
      <Head title="Your Vault" />
      <DashboardWrapper>
        <div className="flex gap-6 flex-col">
          <div className="w-full">
            <p>Folders</p>
            <div className="grid grid-cols-2 w-full md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item, i) => (
                <Folder key={i} />
              ))}
            </div>
          </div>
          <div className="w-full">
            <div className="my-3">
              <p className="text-white">Items</p>
              <div className="w-ful h-2 bg-background-secondary/50 rounded-md"/>
            </div>
            <div className="grid grid-cols-2 w-full md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item, i) => (
                <File key={i} />
              ))}
            </div>
          </div>
        </div>
      </DashboardWrapper>
    </div>
  );
}

function File() {
  return (
    <div className="relative">
      <div className="bg-background-secondary p-3 rounded-md  shadow-md hover:bg-opacity-75 cursor-pointer">
        <div className="flex gap-3 items-center">
          <div
            style={{
              background: `url(https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${"https://discord.com"}&size=64)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="p-3 bg-background-primary/50 rounded-full shadow-md bg-contain"
          ></div>
          <div className="text-xs w-4/6">
            <p className="text-white/50">Discord</p>
            <p className="text-white/75">discord@thyke.dev</p>
          </div>
          <button>
            <div className="hover:bg-white/10 p-3 rounded-full">
              <HiOutlineDotsVertical className="text-white/50" />
            </div>
          </button>
        </div>
        <div className="grid grid-cols-4 gap-3 mt-3">
          <div className="bg-background-primary/50 hover:bg-background-primary/20 p-3 rounded-md flex items-center justify-center text-white">
            <FaDoorOpen />
          </div>
          <div className="bg-background-primary/50 hover:bg-background-primary/20 p-3 rounded-md flex items-center justify-center text-white">
            <FaUser />
          </div>
          <div className="bg-background-primary/50 hover:bg-background-primary/20 p-3 rounded-md flex items-center justify-center text-white">
            <FaLockOpen />
          </div>
          <div className="bg-background-primary/50 hover:bg-background-primary/20 p-3 rounded-md flex items-center justify-center text-white">
            <FaClock />
          </div>
        </div>
      </div>
    </div>
  );
}

function Folder() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Add click event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Remove the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, isMenuOpen]);

  return (
    <div className="relative">
      <div className="bg-background-secondary p-3 rounded-md flex gap-3 items-center shadow-md hover:bg-opacity-75 cursor-pointer">
        <div className="p-3 bg-background-primary/50 rounded-full shadow-md">
          <FaFolder className="text-white/50" />
        </div>
        <div className="text-xs w-4/6">
          <p className="text-white/50">Folder Name</p>
          <p className="text-white">10 items</p>
        </div>
        <button onClick={() => setIsMenuOpen(true)}>
          <div className="hover:bg-white/10 p-3 rounded-full">
            <HiOutlineDotsVertical className="text-white/50" />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ x: 50, y: -50, scale: 0.5, type: "spring" }}
            animate={{
              x: 0,
              y: 0,
              scale: 1,
              type: "spring",
              transition: { type: "spring", stiffness: 400 },
            }}
            exit={{ x: 50, y: -50, scale: 0.5, opacity: 0 }}
            transition={{
              duration: 0.1,
            }}
            className="absolute bottom right-0 z-50 bg-background-secondary rounded-md p-3 flex flex-col m-3 shadow-md"
          >
            <div
              className="flex items-center hover:bg-border-light p-2 rounded-md text-white cursor-pointer"
              onClick={() => console.log("Rename clicked")}
            >
              <FaPencilAlt />
              <p className="ml-3">Rename</p>
            </div>
            <div
              className="flex items-center hover:bg-border-light p-2 rounded-md text-red-400 cursor-pointer"
              onClick={() => console.log("Delete clicked")}
            >
              <FaTrash />
              <p className="ml-3">Delete</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
