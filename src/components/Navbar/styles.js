import { styled } from "styled-components";

export const NavbarContainer = styled.header`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
`;

export const MobileContainer = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.MEDIUM}) {
    display: none;
  }
`;

export const DesktopContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.MEDIUM}) {
    display: none;
  }
`;

export const DesktopNavbarContent = styled.div`
  display: grid;

  padding: 1rem;

  grid-template-columns: 2fr 1fr;
  grid-column-gap: 1rem;
`;

export const NavbarContent = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;

  form {
    width: 100%;
  }

  @media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.MEDIUM}) {
    padding: 3rem 2rem 2rem 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.MEDIUM}) {
    > button {
      width: 100% !important;
    }
  }
`;

export const NavbarSearch = styled.input`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  color: ${({ theme }) => theme.COLORS.LIGHT_500};
  font-size: 1rem;
  width: 100%;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SidebarMenu = styled.aside`
  position: absolute;

  z-index: 10;
`;

export const SidebarAside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  visibility: hidden;

  z-index: 10;
`;

export const SidebarItems = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > a {
    padding: 0.5rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_500};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: "Poppins", sans-serif;
    font-weight: 300;
  }
`;
