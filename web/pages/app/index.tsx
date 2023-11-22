import DashboardWrapper from "@/components/layout/DashboardWrapper";
import Guage from "@/components/utility/Guage";
import Head from "@/components/utility/Head";
import {
  FaChevronDown,
  FaCreditCard,
  FaExclamationTriangle,
  FaLock,
  FaMailBulk,
  FaUserAlt,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function App() {
  return (
    <div>
      <Head title="Purevault" />
      <DashboardWrapper>
        <div className="grid grid-cols-2 gap-10 p-2">
          <div className="">
            <div className="grid grid-cols-4 gap-2 ">
              {[
                {
                  name: "Passwords",
                  count: 10,
                  icon: <FaLock />,
                  color: "#4299E1",
                },
                {
                  name: "Cards",
                  count: 2,
                  icon: <FaCreditCard />,
                  color: "#48BB78",
                },
                {
                  name: "Identities",
                  count: 1,
                  icon: <FaUserAlt />,
                  color: "#ECC94B",
                },
                {
                  name: "At Risk!",
                  count: 1,
                  icon: <FaExclamationTriangle />,
                  color: "#F56565",
                },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-background-secondary cursor-pointer p-5 rounded-2xl grid grid-cols-2 gap-10 gap-y-5 shadow-lg hover:scale-[1.02] duration-200"
                >
                  <div
                    style={{ backgroundColor: stat.color }}
                    className="p-3 rounded-full h-10 w-10"
                  >
                    {stat.icon}
                  </div>
                  <div className="center">
                    <p className="font-black text-3xl">{stat.count}</p>
                  </div>
                  <div className="col-span-2 opacity-50 text-sm">
                    {stat.name}
                  </div>
                </div>
              ))}
            </div>
            <div className=" w-full mt-5">
              <p className="px-10">Recently Used</p>
              <div className="gap-1">
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((item, i) => (
                    <div className="bg-background-secondary p-3 shadow-xl rounded-2xl hover:scale-[1.02] duration-300 w-full flex justify-between cursor-pointer">
                      <div className="flex gap-3">
                        <div className="shadow-lg shadow-background-primary rounded-full">
                          <img
                            className="w-12 rounded-full"
                            src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${"https://discord.com"}&size=128`}
                          />
                        </div>
                        <div>
                          <p>Discord</p>
                          <div className="flex items-center gap-1 opacity-50">
                            <IoIosMail />
                            <p className="text-sm">discord@thyke.dev</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-end">
                        <div className="opacity-50">2h ago</div>
                        <div className="text-xl">
                          <FaChevronDown />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-background-secondary shadow-xl p-3 rounded-xl w-full h-full">
              <div>
                <p>Your Web Stats</p>
              </div>
              <div className=" overflow-hidden">
                <div className="scale-150  p-10">
                  <Guage progress={50} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            Frequent Sites
            <div className="grid-cols-6 grid gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((favorite, i) => (
                <div key={i} className="bg-background-secondary rounded-xl">
                  <div
                    style={{
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundImage: `url(https://api.apiflash.com/v1/urltoimage?access_key=6c73da62ff0f43aa8911af5558e97484&wait_until=page_loaded&url=https://discord.com)`,
                    }}
                    className="w-full flex items-center justify-center relative rounded-t-xl"
                  >
                    <div className="w-full h-full bg-black/90 absolute z-0 rounded-t-xl" />

                    <div className="p-7 z-10">
                      <img
                        className="w-14 rounded-full"
                        src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${"https://discord.com"}&size=128`}
                      />
                    </div>
                  </div>
                  <div className="p-3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DashboardWrapper>
    </div>
  );
}
