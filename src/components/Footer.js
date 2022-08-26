import styled from "styled-components";
import { COLOR } from "./theme";

const StyledFooter = styled.div`
  border-top: 2px solid #e3e3e3;
  max-width: 1200px;
  margin: 0 auto 30px;
  color: ${COLOR.FONT_COLOR};
  padding: 0 15px;
  a {
    color: ${COLOR.FONT_COLOR};
  }
`;

export const Footer = () => (
  <StyledFooter>
    <p>Licensed and regulated by the Northern Territory Racing Commission.</p>
    <p>
      Copyright © 2022 Entain Group Pty Ltd trading as Neds AU | ABN 25 151 956
      768 For South Australian residents, our gambling operations are governed
      by the South Australian Gambling Codes of Practice. You know the score.
    </p>
    <p>
      Stay in control. Gamble Responsibly. Is gambling a problem for you? Call
      Gambling Help <a href="tel:1800858858">1800 858 858</a> or visit{" "}
      <a href="www.gamblinghelponline.org.au" targe="_blank">
        www.gamblinghelponline.org.au.
      </a>
    </p>
  </StyledFooter>
);
