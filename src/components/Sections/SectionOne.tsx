import { DollarSign, House, TrendingUp, User } from "lucide-react";
import React, { useState } from "react";
import TextCard from "../TextCard";
import Button from "../Button";
import Modal from "../Modal";

const SectionOne: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className=" w-full max-w-[1280px] mx-auto
      px-6 pb-16 pt-6
      sm:px-12
      md:px-16
      xl:px-36 xl:pb-16
  "
    >
      {/* MOBILE */}
      <div className="sm:px-10 md:px-0 md:hidden">
        <Button
          label="Quero agendar uma consultoria de crédito para meu negócio"
          onClick={openModal}
        />
      </div>

      <div className=" text-white flex items-center justify-center">
        <div>
          <div className="mx-auto">
            <h2
              className="text-lg text-center font-bold pb-4 pt-8 flex flex-col items-center justify-center
                  sm:text-xl sm:mt-0 sm:flex-row
                  md:text-2xl md:pt-10
                  lg:text-3xl lg:pt-16 lg:pb-8
                  xl:text-4xl xl:leading-normal
                  "
            >
              <House className="w-8 h-8 md:w-12 md:h-12 mr-2 text-custom-icons" />
              Adquira o Seu Imóvel
            </h2>
            <div className="grid md:grid-cols-2 gap-6 justify-center md:justify-between">
              <div className="bg-custom-background-card p-6 rounded-lg shadow-lg">
                <h3
                  className="text-sm font-bold text-white text-center mb-4 flex flex-row  items-center
              sm:text-lg
              lg:text-xl
            "
                >
                  <DollarSign className="w-6 h-6 mr-2 text-custom-icons" />É
                  para você que deseja adquirir:
                </h3>
                <ul className="space-y-2">
                  <li
                    className="text-xs
                md:text-base
              "
                  >
                    ✔️ Imóvel para moradia
                  </li>
                  <li
                    className="text-xs
                                  md:text-base
                                  text-
                                "
                  >
                    ✔️ Imóvel para investimento
                  </li>
                  <li
                    className="text-xs
                                  md:text-base
                                  text-
                                "
                  >
                    ✔️ Diversos outros objetivos
                  </li>
                </ul>
              </div>
              <div className="bg-custom-background-card p-6 rounded-lg shadow-lg">
                <h3
                  className="text-sm font-bold text-white text-center mb-4 flex flex-row  items-center
              sm:text-lg
              lg:text-xl
            "
                >
                  <TrendingUp className="w-6 h-6 mr-2 text-custom-icons" />
                  Captar recursos a partir de:
                </h3>
                <div className="space-y-2">
                  <div
                    className="flex flex-row gap-2 items-center py-2 justify-center
      lg:py-8
    "
                  >
                    <TextCard label="R$200.000,00" />
                  </div>
                </div>
              </div>
            </div>
            <p
              className="text-base text-center font-bold pt-8 flex flex-col items-center justify-center
              sm:text-lg sm:mt-0
              md:text-xl md:pt-8
              lg:text-2xl
              xl:text-xl xl:leading-normal
              "
            >
              <User className="w-8 h-8 md:w-12 md:h-12 mr-2 text-custom-icons" />
              Você poderá escalar e melhorar seus resultados de maneira eficaz,
              e quero explicar como fazer isso.
            </p>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
};

export default SectionOne;
