import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Banner({ itens }) {
  return (
    <div className=" h-[300px] lg:h-[500px]  bg-gray-100 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=" h-full w-full"
      >
        {itens.map((item, index) => (
          <SwiperSlide
            className="flex items-center justify-center "
            key={index}
          >
            <img
              src={item.link}
              alt=""
              className="object-contain h-full w-full mx-auto"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export default Banner;
