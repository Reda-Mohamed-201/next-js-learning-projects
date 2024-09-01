import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="min-[100px]:flex min-[100px]:mx-6 min-[100px]:flex-col-reverse min-[100px]:gap-3 md:flex md:flex-row  md:mx-7  md:gap-8 mt-12">
      <SideNavigation />
      <div className="min-h-fit shadow-md md:flex-1 px-5 py-5 ">{children}</div>
    </div>
  );
}
