import PropTypes from 'prop-types';

const RecommendCard = ({ menu }) => {
  const { name, recipe, image } = menu;

  return (
    <div className="text-center bg-[#F3F3F3] pb-4">
      <div>
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="px-10 py-2 mt-3">
        <h1 className="text-xl font-medium">{name}</h1>
        <p className="text-[#151515] font-sans">{recipe.slice(0, 56)}...</p>
      </div>
      <button className="btn  border-0 border-b-4 bg-transparent border-red-500 hover:bg-transparent hover:border-2 font-semibold text-[#BB8506] uppercase hover:border-red-500">
        Add To Cart
      </button>
    </div>
  );
};

export default RecommendCard;
RecommendCard.propTypes = {
  menu: PropTypes.object,
};
