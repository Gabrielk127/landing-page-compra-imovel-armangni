import Button from "../Button";
import Image from "next/image";
import simoneTitle from "@/assets/simoneTitle.svg";
import { useState } from "react";
import Modal from "../Modal";
import { TrendingUp } from "lucide-react";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative max-w-[2000px] mx-auto">
      {/* Imagem posicionada no canto inferior direito */}
      <div className="absolute bottom-0 right-0 w-[800px] lg:w-[1100px] xl:w-[1300px] z-0">
        <Image
          src={simoneTitle}
          alt="Corretora Simone Armangni"
          className="w-full "
        />
      </div>

      <section
        className="flex flex-col gap-12 w-full mx-auto h-screen md:max-h-[600px]  lg:max-h-[800px] justify-start items-center
        px-6 pt-2
        md:justify-center
        xl:px-36 xl:py-0
      "
      >
        <div className="md:flex md:flex-row md:justify-between md:items-center">
          <div
            className=" md:flex md:flex-col md:gap-8
              md:w-[500px]
              lg:w-[700px] lg:gap-10
              xl:w-[800px]
        "
          >
            <div
              className="flex flex-row p-2 gap-2 bg-custom-background-text rounded-md justify-center items-center
                md:w-96
                xl:w-96
            "
            >
              <TrendingUp className="w-6 text-custom-icons" />
              <p
                className="text-base font-extralight text-center text-custom-text-title
                  sm:text-lg
                  lg:text-lg
                "
              >
                COMPRE SEU IMÓVEL!
              </p>
            </div>

            <div>
              <h1
                className="text-2xl text-center font-bold mt-5 text-white
    md:mt-4
    lg:text-3xl md:text-start lg:mt-8
    xl:text-4xl xl:leading-normal 
  "
              >
                Crédito Imobiliário{" "}
                <span className="text-custom-text-title">Inteligente</span>.
                <br /> Oferecemos a Solução{" "}
                <span className="text-custom-text-title">Ideal</span> Para Quem
                Deseja <span className="text-custom-text-title">Adquirir</span>{" "}
                um Imóvel{" "}
              </h1>
              <p
                className="text-sm text-center text-white my-2 
            md:text-start
            "
              >
                Vou mostrar a você que não é necessário passar anos acumulando
                recursos ou recorrer a pesados empréstimos bancários para
                alcançar seu objetivo.
              </p>
            </div>
            <div className="hidden md:flex md:w-[400px] lg:w-[500px] xl:w-full z-20">
              <Button
                label="Quero saber mais sobre essa modalidade de crédito imobiliário."
                onClick={openModal}
              />
            </div>
          </div>
          <div className="w-[250px] lg:w-[400px] hidden md:flex"></div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </section>
    </div>
  );
};

export default Header;
