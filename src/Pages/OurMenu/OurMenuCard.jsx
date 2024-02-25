import MenuCard from '../../Components/MenuItem/MenuCard';
import PropTypes from 'prop-types';
import Cover from '../../Components/Cover/Cover';

const OurMenuCard = ({ item, bannerImg, title }) => {
  return (
    <>
      {title && <Cover img={bannerImg} title={title}></Cover>}

      <div className="max-w-7xl mx-auto grid grid-cols-1 p-2 md:grid-cols-2  my-9 md:mt-20 gap-x-5 gap-y-5">
        {item.map(menu => (
          <MenuCard key={menu._id} menu={menu}></MenuCard>
        ))}
      </div>
      <div className="text-center mb-4">
        <button className="btn btn-outline border-0 border-b-4 hover:bg-transparent text-xl font-semibold hover:text-red-500">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </div>
    </>
  );
};

export default OurMenuCard;
OurMenuCard.propTypes = {
  item: PropTypes.array,
  bannerImg: PropTypes.img,
  title: PropTypes.string,
};
