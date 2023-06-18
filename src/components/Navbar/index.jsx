import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { useRef, useState } from "react";
import {
  DesktopContainer,
  DesktopNavbarContent,
  MenuButton,
  MobileContainer,
  NavbarContainer,
  NavbarContent,
  NavbarSearch,
  SidebarAside,
  SidebarItems,
} from "./styles";

import DesktopLogo from "../../assets/logos/desktop_navbar_logo.svg";
import DesktopLogoAdmin from "../../assets/logos/desktop_navbar_logo_admin.svg";
import MobileLogo from "../../assets/logos/mobile_navbar_logo.svg";
import MobileLogoAdmin from "../../assets/logos/mobile_navbar_logo_admin.svg";

import Close from "../../assets/icons/Close.svg";
import Menu from "../../assets/icons/Menu.svg";
import Receipt from "../../assets/icons/Receipt.svg";
import SignOut from "../../assets/icons/SignOut.svg";
import theme from "../../styles/theme";
import { Button } from "../Button";
import { api } from "../../services/api";

export function Navbar() {
  const { logOut, user } = useAuth();
  const navigate = useNavigate();
  const SidebarRef = useRef(null);

  const [searchDishValue, setSearchDishValue] = useState("");

  function showSidebar(e) {
    e.preventDefault();

    SidebarRef.current.style.visibility = "visible";
  }

  function hideSidebar(e) {
    e.preventDefault();

    SidebarRef.current.style.visibility = "hidden";
  }

  function searchDish(e) {
    e.preventDefault();

    api
      .get(`/dishes?search=${searchDishValue.replace(" ", "+")}`)
      .then((res) => {
        if (res.status !== 200 || res.data.length === 0) {
          return alert("Nenhum prato encontrado.");
        }

        console.log(res.data);
      });
  }

  return (
    <NavbarContainer>
      <SidebarAside ref={SidebarRef}>
        <NavbarContainer>
          <NavbarContent>
            <MenuButton onClick={hideSidebar}>
              <img src={Close} /> Menu
            </MenuButton>
          </NavbarContent>
        </NavbarContainer>
        <SidebarItems>
          <form onSubmit={searchDish}>
            <NavbarSearch
              id="search"
              value={searchDishValue}
              onChange={(e) => setSearchDishValue(e.target.value)}
              placeholder="Busque por pratos ou ingredientes"
            />
          </form>

          {user && user.admin ? <a href="/new">Novo prato</a> : null}

          <a onClick={() => logOut()}>Sair</a>
        </SidebarItems>
      </SidebarAside>

      <MobileContainer>
        <NavbarContent>
          <MenuButton onClick={showSidebar}>
            <img src={Menu} alt="" />
          </MenuButton>
          {user && user.admin ? (
            <img src={MobileLogoAdmin} alt="" />
          ) : (
            <img src={MobileLogo} alt="" />
          )}
          <img src={Receipt} alt="" />
        </NavbarContent>
      </MobileContainer>

      <DesktopContainer>
        <DesktopNavbarContent>
          <NavbarContent>
            {user && user.admin ? (
              <img src={DesktopLogoAdmin} alt="" />
            ) : (
              <img src={DesktopLogo} alt="" />
            )}

            <form onSubmit={searchDish}>
              <NavbarSearch
                id="search"
                value={searchDishValue}
                onChange={(e) => setSearchDishValue(e.target.value)}
                placeholder="Busque por pratos ou ingredientes"
              />
            </form>
          </NavbarContent>

          <NavbarContent>
            {user && user.admin ? (
              <Button
                background={theme.COLORS.TOMATO_100}
                onClick={() => navigate("/new")}>
                Novo prato
              </Button>
            ) : (
              <Button background={theme.COLORS.TOMATO_100}>
                (0) Meus Pedidos
              </Button>
            )}
            <Button onClick={() => logOut()}>
              <img src={SignOut} alt="" />
            </Button>
          </NavbarContent>
        </DesktopNavbarContent>
      </DesktopContainer>
    </NavbarContainer>
  );
}
