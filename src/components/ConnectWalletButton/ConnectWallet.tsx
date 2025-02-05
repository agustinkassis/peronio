import { ConnectKitButton } from "connectkit";
import styled from "@emotion/styled";
import useMediaQuery from "../../hooks/useMediaQuery";
import Image from "next/image";

import logoP from "/public/logoP.svg";

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: auto;
  @media (min-width: 1280px) {
    flex-direction: row;
  }

  @media (max-width: 1279px) {
    flex-direction: column-reverse;
    justify-content: center;
    width: fit-content;
    flex-basis: 10%;
  }
`;

const ConnectWallet = () => {
  return (
    <StyledDiv>
      <div className="flex flex-row justify-center items-center gap-3">
        <Image src={logoP} alt="Logo P" width={30} height={30} />
        <p className="w-full font-Roboto">1 PE = 1.62ARS</p>
      </div>

      <ConnectKitButton
        label="Conectar monedero"
        showBalance={false}
        showAvatar={false}
      />
    </StyledDiv>
  );
};

export default ConnectWallet;
