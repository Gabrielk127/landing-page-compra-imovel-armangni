interface TextCardProps {
  label: string;
}

const TextCard: React.FC<TextCardProps> = ({ label }) => {
  return (
    <div
      className="p-2 bg-custom-background-three w-32 rounded-md
        lg:w-40
        xl:w-64 xl:p-4
    "
    >
      <p
        className="text-black font-normal text-center text-sm
        lg:text-lg
        xl:text-2xl
      "
      >
        {label}
      </p>
    </div>
  );
};

export default TextCard;
