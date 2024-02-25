import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-100}
      className="-z-50"
    >
      <div className="hero">
        <div className="hero-overlay bg-opacity-60  md:py-80"></div>
        <div className="hero-content text-center z-10 bg-black opacity-70 text-white">
          <div className=" md:px-28 py-14 md:py-2">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 max-w-[700px]">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
Cover.propTypes = {
  img: PropTypes.img,
  title: PropTypes.string,
};
