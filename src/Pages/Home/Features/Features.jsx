import './featured.css';
import img from '../../../assets/home/featured.jpg';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Features = () => {
  return (
    <div className="box relative  z-10 mb-10">
      <div className="max-w-7xl mx-auto py-7 md:py-16 px-6  md:px-28">
        <SectionTitle
          subTitle="Check it out"
          title="FROM OUR FEATURES"
        ></SectionTitle>
        <div className="mt-10 flex flex-col lg:flex-row space-y-5 md:space-y-0 gap-x-9 items-center">
          <div className="lg:w-2/3">
            <img className="w-full" src={img} alt="" />
          </div>
          <div className="text-white max-w-[604px] space-y-1">
            <p className="text-xl font-semibold">March 20, 2023</p>
            <p className="font-medium">WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn border-0 border-b-4 bg-transparent hover:text-black text-xl font-medium text-white">
              READ MORE
            </button>
          </div>
        </div>
      </div>
      <div className="w-full -z-10 h-full absolute bg-black top-0 left-0 opacity-40"></div>
    </div>
  );
};

export default Features;
