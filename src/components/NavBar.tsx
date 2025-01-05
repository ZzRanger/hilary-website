import BigNavbar from "@/components/navigation/home/BigNavbar";
import SmallNavbar from "@/components/navigation/home/SmallNavbar";

export const NavBar = () => {
  return (
    <>
      <BigNavbar className="hidden lg:block" />
      <SmallNavbar className="block lg:hidden" />
    </>
  );
};
