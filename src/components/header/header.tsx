import { Container } from "../container";
import { HeaderWrapper, Logo } from "./styled";
import logo from "./img/logo.svg";
import { useState, useEffect } from "react";

function Header() {
  const [isNavShown, setIsNavShown] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollY > 200 && scrollY > prevScrollY) {
      setIsNavShown(false);
    } else if (scrollY < 200 || scrollY < prevScrollY) {
      setIsNavShown(true);
    }
    setPrevScrollY(scrollY);
  }, [scrollY]);

  return (
    <HeaderWrapper className={isNavShown ? "" : "hidden"}>
      <Container>
        <Logo href="/">
          <img src={logo} alt="logotype" />
        </Logo>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
