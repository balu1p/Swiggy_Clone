import { SHIMMER_RES_CARDS_COUNT } from "/config";
const CardShimmer = () => {
    return (
      <div className="basis-[250px] mob:basis-[150px] pb-3 mt-32 shadow animate-pulse bg-gray-300">
        <div className="h-[144px] w-[230px] bg-bio mob:w-[130px] mob:h-[81px]"></div>
        <div className="w-3/5 mt-2.5 h-[15px]  bg-bio "></div>
        <div className="w-4/5 mt-1 h-[15px]  bg-bio"></div>
        <div className="w-full mt-[18px] h-[15px] bg-bio"></div>
      </div>
    );
  }
  

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-between ">
      {Array.from({ length: SHIMMER_RES_CARDS_COUNT }).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};

export default Shimmer;
