import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";

type DashboardWrapperProps = {
  children: ReactNode;
};

export default function DashboardWrapper({ children }: DashboardWrapperProps) {
  return (
    <div className="w-screen h-screen">
      <div className="h-10 bg-background-secondary"></div>
      <div className="flex h-[calc(100vh-2.5rem)]">
        <div className="w-64 bg-background-secondary p-3 flex flex-col gap-3"></div>
        <div className="dashboard-bg overflow-x-hidden overflow-y-auto relative p-10">
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
