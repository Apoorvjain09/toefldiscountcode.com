
type Props = {
  perk: {
    title: string;
    info: string;
    borderColor: string;
  };
};

const PerkCard = ({ perk }: Props) => {
  const { info, title, borderColor } = perk;

  return (
    <div
      className={`flex flex-col gap-5 border-t-4 ${borderColor} p-5 shadow-lg rounded-b-sm bg-white z-[90] items-start`}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="font-semibold text-gray">{info}</p>
    </div>
  );
};

export default PerkCard;
