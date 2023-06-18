import {
  FooterContaier,
  FooterLogo,
  FooterRights,
  FooterStyles,
  MobileFooterLogo,
} from "./styles";

import logo from "../../assets/logos/logo_footer.svg";
import mobileLogo from "../../assets/logos/mobile_footer_logo.svg";

export function Footer() {
  return (
    <FooterStyles>
      <FooterContaier>
        <FooterLogo src={logo} />
        <MobileFooterLogo src={mobileLogo} />

        <FooterRights>© 2023 - Todos os direitos reservados.</FooterRights>
      </FooterContaier>
    </FooterStyles>
  );
}
