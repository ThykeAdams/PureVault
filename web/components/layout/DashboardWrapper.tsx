import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import {
  FaCreditCard,
  FaFolder,
  FaHome,
  FaIdBadge,
  FaLock,
  FaMoon,
  FaStar,
  FaTrash,
} from "react-icons/fa";

type DashboardWrapperProps = {
  children: ReactNode;
};

const SideBarItems = [
  {
    name: "",
    items: [
      {
        name: "Home",
        link: "/app",
        icon: <FaHome className="text-[#4299E1] group-hover:text-white" />,
      },
      {
        name: "All Items",
        subValue: "18",
        link: "/app",
        icon: <FaLock className="text-[#42e1b9] group-hover:text-white" />,
      },
      {
        name: "Favorites",
        subValue: "9",
        link: "/app",
        icon: <FaStar className="text-[#ECC94B] group-hover:text-white" />,
      },
      {
        name: "Trash",
        link: "/app",
        subValue: "3",
        icon: <FaTrash className="text-[#F56565] group-hover:text-white" />,
      },
    ],
  },
  {
    name: "Types",
    items: [
      {
        name: "Login",
        link: "/app",
        icon: <FaHome className="group-hover:text-white" />,
      },
      {
        name: "Card",
        link: "/app",
        icon: <FaCreditCard className="group-hover:text-white" />,
      },
      {
        name: "Identity",
        link: "/app",
        icon: <FaIdBadge className=" group-hover:text-white" />,
      },
      {
        name: "Fileshare",
        link: "/app",
        icon: <FaFolder className=" group-hover:text-white" />,
      },
    ],
  },
];

export default function DashboardWrapper({ children }: DashboardWrapperProps) {
  return (
    <div className="w-screen h-screen">
      {/* <div className="h-10 bg-background-secondary"></div> */}
      <div className="absolute top-0 right-0 p-3 flex gap-2 z-50">
        <div className="p-0.5 bg-background-secondary rounded-md shadow-md">
          <div className="flex items-center gap-2 hover:bg-background-third rounded-md px-3 h-full cursor-pointer">
            <FaMoon />
          </div>
        </div>
        <div className="p-0.5 bg-background-secondary rounded-md cursor-pointer shadow-md">
          <div className="flex gap-2 hover:bg-background-third rounded-md px-3">
            <img
              className="h-12 rounded-full border-4 border-background-third"
              src="https://avatars.githubusercontent.com/u/45541936?v=4"
            />
            <div>
              <p>Thykie</p>
              <p className="text-xs opacity-50">thyke@thyke.dev</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-screen">
        <div className="w-64 bg-background-secondary p-3 flex flex-col gap-3">
          {SideBarItems.map((group, i) => (
            <div key={i} className="mb-10">
              <p className="text-sm opacity-50">{group.name}</p>
              {group.items.map((item, index) => (
                <div
                  key={index}
                  className="mx-2 hover:bg-blue-400 rounded-md p-1 flex items-center justify-between text- cursor-pointer gap-2 group"
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <p>{item.name}</p>
                  </div>
                  <p className="text-xs opacity-50">{item.subValue || ""}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="dashboard-bg overflow-x-hidden overflow-y-auto relative p-10 pt-20">
          <PathParser />
          {children}
        </div>
      </div>
    </div>
  );
}

function PathParser() {
  const router = useRouter();

  let split = router.pathname.split("/").slice(2);
  console.log(split);

  return (
    <div className="flex absolute top-0 left-0">
      <div className="bg-background-secondary p-1 flex font-black  rounded-br-md">
        <Link href={"/app"}>
          <div className="flex gap-1">
            <img
              src="https://placehold.co/400x400"
              alt="Cricket Logo"
              className="h-4 rounded-full"
            />
            <p className="opacity-50 hover:opacity-100 text-xs">PureVault</p>
          </div>
        </Link>
        <div className="flex gap-1 px-1 text-xs">/</div>
        {split.map((s, i) => (
          <>
            <div key={i} className="flex gap-1">
              <p className="opacity-50 hover:opacity-100 text-xs">
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </p>
            </div>
            {i !== split.length - 1 && (
              <p className="flex gap-1 px-3 text-xs">/</p>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
