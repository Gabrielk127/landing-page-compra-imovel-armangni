import Profile from "./Profile";

const SectionThree: React.FC = () => {
  return (
    <section
      className=" flex flex-col justify-center items-center w-full max-w-[1280px] mx-auto
      px-6 pb-12 pt-12
      sm:px-12
      md:px-16 md:py-10
      xl:px-36 xl:py-16
  "
    >
      <h2
        className="text-lg text-center font-bold pt-8 text-white
              sm:text-xl sm:mt-0
              md:text-2xl md:pt-0
              lg:text-2xl
              xl:text-3xl xl:leading-normal
              "
      >
        Nesta consultoria você terá{" "}
        <span className="text-custom-text-title">
          30 minutos do meu melhor consultor
        </span>{" "}
        para lhe atender.
      </h2>
      <p
        className="text-base text-center mt-4 font-normal text-white
              lg:text-lg lg:pt-10
              xl:text-xl xl:pt-6 xl:pb-24
            "
      >
        Mas antes, permita-me que eu me apresente:
      </p>
      <Profile />
    </section>
  );
};

export default SectionThree;
