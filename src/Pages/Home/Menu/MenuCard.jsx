import PropTypes from 'prop-types';

const MenuCard = ({ menu }) => {
  const { name, recipe, image, price } = menu;
  return (
    <div
      className="flex flex-col md:flex-row text-center md:text-start justify-center md:justify-start gap-x-5"
      style={{
        borderRadius: '0px 0px 0px 200px',
      }}
    >
      <div
        style={{
          borderRadius: '0px 200px 200px 200px',
        }}
        className="w-44 mx-auto"
      >
        <img
          style={{
            borderRadius: '0px 200px 200px 200px',
          }}
          className="w-full"
          src={image}
          alt=""
        />
      </div>
      <div>
        <p className="text-xl font-medium text-[#151515]">{name}------</p>
        <p className="max-w-[443px] text-[#737373] mx-auto">{recipe}</p>
        <p className="text-[#BB8506] text-xl font-medium">${price}</p>
      </div>
    </div>
  );
};

export default MenuCard;
MenuCard.propTypes = {
  menu: PropTypes.object,
};
