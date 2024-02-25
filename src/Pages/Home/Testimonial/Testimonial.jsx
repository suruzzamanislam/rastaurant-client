import { useEffect, useState } from 'react';
import { FaArtstation } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('reviews.json')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-3 md:py-10  space-y-6 md:space-y-14">
      <SectionTitle
        title="TESTIMONIALS"
        subTitle="What Our Clients Say"
      ></SectionTitle>
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={true}
      >
        {reviews.map(review => (
          <SwiperSlide key={review._id}>
            <div className="text-center md:px-32">
              <div className="flex justify-center">
                <FaArtstation
                  className={`text-center text-8xl ${
                    review.rating === 5 && 'text-green-600'
                  } ${review.rating === 4 && 'text-yellow-600'}`}
                ></FaArtstation>
              </div>
              <div className="flex justify-center py-4">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
              </div>
              <p className="md:text-xl">{review.details}</p>
              <h1 className="text-2xl text-[#CD9003] mt-3 font-medium uppercase">
                {review.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
