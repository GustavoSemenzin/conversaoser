import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
function BusinessPartner() {
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
    {
      link: "https://media.istockphoto.com/id/1885088156/pt/foto/happy-dog-looking-up-at-camera-with-smile.jpg?s=2048x2048&w=is&k=20&c=kTq0r8GziguWWqQvI7bnRZ3_T3Z4sPsXpXv3HUduYNw=",
    },
    {
      link: "https://media.istockphoto.com/id/1480747819/pt/foto/dachsund-and-cat-best-friends.jpg?s=2048x2048&w=is&k=20&c=JsUw6T_BPGqctiruWXefXxdcZ2aB8sPkUzUR4v1_Hho=",
    },
    {
      link: "https://media.istockphoto.com/id/533229488/pt/foto/engra%C3%A7ado-c%C3%A3o.jpg?s=2048x2048&w=is&k=20&c=nshVWDi1QQcYc_LAwZX4IDZcsPCVhh2f4QgJR_p8-_E=",
    },
    {
      link: "https://media.istockphoto.com/id/1885088156/pt/foto/happy-dog-looking-up-at-camera-with-smile.jpg?s=2048x2048&w=is&k=20&c=kTq0r8GziguWWqQvI7bnRZ3_T3Z4sPsXpXv3HUduYNw=",
    },
    {
      link: "https://media.istockphoto.com/id/1480747819/pt/foto/dachsund-and-cat-best-friends.jpg?s=2048x2048&w=is&k=20&c=JsUw6T_BPGqctiruWXefXxdcZ2aB8sPkUzUR4v1_Hho=",
    },
    {
      link: "https://media.istockphoto.com/id/533229488/pt/foto/engra%C3%A7ado-c%C3%A3o.jpg?s=2048x2048&w=is&k=20&c=nshVWDi1QQcYc_LAwZX4IDZcsPCVhh2f4QgJR_p8-_E=",
    },
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
    <div id="BusinessPartner">
      <p className=" text-2xl lg:text-4xl text-blue-950 font-bold text-center mt-15 ">
        PARCEIROS
      </p>
      <hr className="border-t-3 border-emerald-500 w-1/3 mx-auto my-4 rounded-4xl" />
      <div className=" h-[300px] lg:h-[500px]  bg-gray-100 mx-1 lg:mx-10 rounded-3xl">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          //   centeredSlides={true}
          autoplay={{
            delay: 1111111111,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            1024: { slidesPerView: 4 },
            0: { slidesPerView: 1 },
          }}
          className=" h-full w-full "
        >
          {itens.map((item, index) => (
            <SwiperSlide
              className="flex items-center justify-center "
              key={index}
            >
              <img
                src={item.link}
                alt=""
                className="object-contain h-full w-auto mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default BusinessPartner;
