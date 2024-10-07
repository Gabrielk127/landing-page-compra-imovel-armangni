import { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import ProfileInfographic from "./ProfileInfographic";

const SectionFour: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className=" flex flex-col justify-center items-center w-full max-w-[1280px] mx-auto
      px-6 pb-12 pt-12
      sm:px-12
      md:px-16 md:py-10
      xl:px-36 xl:py-16
  "
    >
      <ProfileInfographic />
      <div
        className="pt-8 mx-auto
      md:w-[500px]
      lg:w-[600px] lg:pt-0
      "
      >
        <Button
          label="Quero saber mais sobre essa modalidade de crédito imobiliário
."
          onClick={openModal}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default SectionFour;
