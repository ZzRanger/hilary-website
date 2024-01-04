import { FunctionComponent, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const NavbarWrapper = ({
  setDark,
  component: Component,
  color,
}: {
  setDark: (isDark: boolean) => void;
  component: FunctionComponent<any>;
  color: string;
}) => {
  const { ref, inView, entry } = useInView({
    rootMargin: "-60px",
  });

  useEffect(() => {
    if (entry?.boundingClientRect.y! > 0 && color === "black") {
      setDark(inView ? true : false);
    } else if (entry?.boundingClientRect.y! > 0 && color === "white") {
      setDark(inView ? false : true);
    }
  }, [inView]);
  return <Component ref={ref} />;
};

export default NavbarWrapper;
