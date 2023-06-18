import { styled } from "styled-components";

export const FooterStyles = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding: 2rem 1rem;
`;

export const FooterContaier = styled.div`
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLogo = styled.img`
  @media screen and (max-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    display: none;
  }
`;

export const MobileFooterLogo = styled.img`
  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    display: none;
  }
`;

export const FooterRights = styled.p`
  color: ${({ theme }) => theme.COLORS.LIGHT_200};
  font-size: 0.9rem;
`;
