import { useModal } from "connectkit";
import { useContext, useEffect } from "react";
import { useWizard } from "react-use-wizard";
import { useAccount } from "wagmi";
import { WizardContext } from "../../contexts/WizardContext";

import Image from "next/image";

import manoPeron from "/public/mano-peron.png";

const WalletConnect = () => {
  const { nextStep } = useWizard();
  const { address } = useAccount();
  const { handleConnection, isConnected } = useContext(WizardContext);

  const { open, setOpen } = useModal();

  const connectWalletHandler = () => {
    setOpen(true);
    handleConnection;

    setTimeout(() => {
      nextStep();
    }, 5000);
  };

  return (
    <div className="flex 2xl:flex-col xl:flex-row xl:gap-10 justify-center items-center px-10 py-3 relative h-full">
        <div>
            <h1 className="font-Abril text-3xl mb-5">
            ¡Ya tenés instalado Metamask!
            </h1>
            <p className="text-Roboto text-xl ">
                Ahora vamos a conectar el monedero para poder empezar a hacer
                transacciones.
            </p> 
        </div>
      <button
        onClick={connectWalletHandler}
        className="rounded-lg mt-auto mb-24 bg-[#FDCC9F] py-3 px-5 shadow-modal-button text-[#0B4D76] font-bold font-Roboto text-xl text-center hover:shadow-modal-button-hover transition-all delay-150 w-2/3"
      >
        Conectar monedero
      </button>
      <Image
        src={manoPeron}
        width={60}
        height={60}
        alt="Mano de Perón"
        className="absolute -bottom-10 z-0 laptop:right-32 2xl:left-14"
      />
    </div>
  );
};

export default WalletConnect;
