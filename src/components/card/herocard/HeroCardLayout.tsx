import { FaArrowRightLong } from "react-icons/fa6";

interface Content {
    title: string,
    description: string
}

const HeroCardLayout = ({title, description} :Content) => {
  return (
    <>
      <div
        className="bg-[#e8f1e9] rounded-[8px] hover:bg-[#d7ebd9]"
        style={{ padding: "35px 30px 25px 30px" }}
      >
        <div className="flex items-center justify-between gap-5">
          <h2 className="text-[#161616] text-[26px] font-bold leading-[1.26]">
            {title}
          </h2>
          <div className="h-[40px] w-[40px] bg-[#CCC] rounded-full flex items-center justify-center">
          <FaArrowRightLong className="text-base" />
          </div>
        </div>
        <div>
          <p className="text-[#181818] font-semibold text-[17px] leading-[1.26] pt-2">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroCardLayout;
