import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Banner() {
  const itens = [
    {
      link: "https://media.istockphoto.com/id/1885088156/pt/foto/happy-dog-looking-up-at-camera-with-smile.jpg?s=2048x2048&w=is&k=20&c=kTq0r8GziguWWqQvI7bnRZ3_T3Z4sPsXpXv3HUduYNw=",
    },
    {
      link: "https://media.istockphoto.com/id/1480747819/pt/foto/dachsund-and-cat-best-friends.jpg?s=2048x2048&w=is&k=20&c=JsUw6T_BPGqctiruWXefXxdcZ2aB8sPkUzUR4v1_Hho=",
    },
    {
      link: "https://media.istockphoto.com/id/533229488/pt/foto/engra%C3%A7ado-c%C3%A3o.jpg?s=2048x2048&w=is&k=20&c=nshVWDi1QQcYc_LAwZX4IDZcsPCVhh2f4QgJR_p8-_E=",
    },
  ];
  return (
    <div className=" h-[300px] lg:h-[500px]  bg-gray-100 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
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
