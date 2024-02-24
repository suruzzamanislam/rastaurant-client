import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg';

const OrderOnline = () => {
  return (
    <div className="my-7 md:my-14 space-y-14">
      <SectionTitle
        subTitle="11:00am to 10:00pm"
        title="ORDER ONLINE"
      ></SectionTitle>

      <div className="max-w-7xl mx-auto px-10 md:px-0">
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            429: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide className="relative">
            <img src={img1} alt="" />
            <p className="text-3xl  text-[#FFFFFF] text-center font-semibold uppercase absolute bottom-5 left-12 md:left-20">
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={img2} alt="" />
            <p className="text-3xl text-[#FFFFFF] text-center font-semibold uppercase absolute bottom-5 left-12 md:left-20">
              Soups
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={img3} alt="" />
            <p className="text-3xl text-[#FFFFFF] text-center font-semibold uppercase absolute bottom-5 left-20">
              pizzas
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={img4} alt="" />
            <p className="text-3xl text-[#FFFFFF] text-center font-semibold uppercase absolute bottom-5 left-20">
              desserts
            </p>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <img src={img5} alt="" />
            <p className="text-3xl text-[#FFFFFF] text-center font-semibold uppercase absolute bottom-5 left-20">
              Salads
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default OrderOnline;
