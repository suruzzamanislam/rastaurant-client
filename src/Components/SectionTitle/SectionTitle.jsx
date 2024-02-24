import PropTypes from 'prop-types';

const SectionTitle = ({ subTitle, title }) => {
  return (
    <div className="max-w-96 text-center mx-auto">
      <p className="text-2xl text-[#D99904] mb-2">---{subTitle}---</p>
      <h1 className="text-4xl font-medium border-y-4 py-3 text-[#151515]">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;

SectionTitle.propTypes = {
  subTitle: PropTypes.string,
  title: PropTypes.string,
};
