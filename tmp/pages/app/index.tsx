import DashboardWrapper from "@/components/layout/DashboardWrapper";
import Guage from "@/components/utility/Guage";
import Head from "@/components/utility/Head";
import {
  FaChevronDown,
  FaClock,
  FaCreditCard,
  FaExclamationCircle,
  FaExclamationTriangle,
  FaList,
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
        <div
          className="grid grid-cols-1
         md:grid-cols-2 p-2 gap-3 md:gap-10"
        >
          <div>
            <Statistics />
            <RecentlyUsed />
          </div>
          <div className="col-end-1 md:col-auto w-full">
            <div className="bg-background-secondary shadow-xl p-3 rounded-xl w-full h-full">
              <div>
                <p>Your Web Stats</p>
              </div>
              <div className="flex flex-col md:flex-row justify-between">
                <div className="overflow-hidden">
                  <div className="scale-[1.2]  p-10">
                    <Guage progress={90} />
                  </div>

                  <p className="text-center font-bold">Password Strength</p>
                </div>
                <div className="overflow-hidden">
                  <div className="scale-150  p-10">
                    <Guage progress={95} />
                  </div>
                  <p className="text-center font-bold">Overall Score</p>
                </div>
                <div className="overflow-hidden">
                  <div className="scale-[1.2]  p-10">
                    <Guage progress={70} />
                  </div>
                  <p className="text-center font-bold">Account Security</p>
                </div>
              </div>
              <div>
                <div className="flex gap-2 mt-3">
                  <span className="flex items-center bg-background-third gap-1 text-xs rounded-md p-1">
                    <FaExclamationCircle /> Pro Tip!
                  </span>
                  Boost Your Security Score for Enhanced Protection
                </div>
                <div className="text-xs opacity-50 mt-2">
                  Your Security Score is your digital shield against cyber
                  threats. Just like a higher score in a game means better
                  performance, a higher Security Score signifies a stronger
                  defense against malicious actors. By regularly updating your
                  passwords, enabling two-factor authentication, and staying
                  vigilant about the links and attachments you open, you
                  actively improve your score. Think of your Security Score as a
                  health meter for your online safety; the stronger it is, the
                  better your protection. Regularly check and enhance your score
                  to stay ahead of cyber threats. Stay safe, stay secure!
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            Favorite Sites
            <div className="grid-cols-2 md:grid-cols-6 grid gap-2">
              {[
                {
                  url: "https://discord.com",
                  name: "Discord",
                },
                {
                  url: "https://google.com",
                  name: "Google",
                },
                {
                  url: "https://x.com",
                  name: "X",
                },
                {
                  url: "https://github.com",
                  name: "Github",
                },
                {
                  url: "https://chat.openai.com",
                  name: "ChatGPT",
                },
                {
                  url: "https://minecraft.net",
                  name: "Minecraft",
                },
                {
                  url: "https://youtube.com",
                  name: "YouTube",
                },
                {
                  url: "https://twitch.tv",
                  name: "Twitch",
                },
              ].map((favorite, i) => (
                <div
                  key={i}
                  className="bg-background-secondary rounded-xl shadow-xl group cursor-pointer hover:scale-[1.02] duration-300"
                >
                  <div
                    style={{
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundImage: `url(https://api.apiflash.com/v1/urltoimage?access_key=6c73da62ff0f43aa8911af5558e97484&wait_until=page_loaded&url=${favorite.url})`,
                    }}
                    className="w-full flex items-center justify-center relative rounded-t-xl"
                  >
                    <div className="w-full h-full bg-black/90 group-hover:bg-black/10 duration-300 scale-[1.002] absolute z-0 rounded-t-xl" />

                    <div className="p-7 z-10">
                      <img
                        className="w-14 rounded-full opacity-100 duration-300 group-hover:opacity-25"
                        src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${favorite.url}&size=128`}
                      />
                    </div>
                  </div>
                  <div className="p-3 flex flex-col gap-2 md:flex-row justify-between">
                    <p>{favorite.name}</p>
                    <div className="flex items-center justify-between gap-2">
                      <div className="bg-background-primary/70 p-2 rounded-md hover:bg-background-third/50 cursor-pointer">
                        <FaUserAlt />
                      </div>
                      <div className="bg-background-primary/70 p-2 rounded-md hover:bg-background-third/50 cursor-pointer">
                        <FaLock />
                      </div>
                      <div className="bg-background-primary/70 p-2 rounded-md hover:bg-background-third/50 cursor-pointer">
                        <FaClock />
                      </div>
                      <div className="bg-background-primary/70 p-2 rounded-md hover:bg-background-third/50 cursor-pointer">
                        <FaList />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DashboardWrapper>
    </div>
  );
}

function Statistics() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
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
          <div className="col-span-2 opacity-50 text-sm">{stat.name}</div>
        </div>
      ))}
    </div>
  );
}

function RecentlyUsed() {
  return (
    <div className=" w-full mt-5">
      <p className="px-10">Recently Used</p>
      <div className="gap-1">
        <div className="grid md:grid-cols-2 gap-2">
          {[
            {
              name: "Discord",
              url: "https://discord.com",
              email: "my@discord.com",
            },
            {
              name: "Google",
              url: "https://google.com",
              email: "my@gmail.com",
            },
            {
              name: "Reddit",
              url: "https://reddit.com",
              email: "my@reddit.com",
            },
            {
              name: "X",
              url: "https://x.com",
              email: "my@x.com",
            },
            {
              name: "Github",
              url: "https://github.com",
              email: "my@github.com",
            },
            {
              name: "ChatGPT",
              url: "https://chat.openai.com",
              email: "my@openai.com",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-background-secondary p-3 shadow-xl rounded-2xl hover:scale-[1.02] duration-300 w-full flex justify-between cursor-pointer"
            >
              <div className="flex gap-3">
                <div className="shadow-lg shadow-background-primary rounded-full">
                  <img
                    className="w-12 rounded-full"
                    src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${item.url}&size=128`}
                  />
                </div>
                <div>
                  <p>{item.name}</p>
                  <div className="flex items-center gap-1 opacity-50">
                    <IoIosMail />
                    <p className="text-sm">{item.email}</p>
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
  );
}
