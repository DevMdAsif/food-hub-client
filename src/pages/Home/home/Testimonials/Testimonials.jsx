import Banner from "../../../../component/banner/Banner";
import testimonials from "../../../../assets/images/HomeImg/Testimonials.jpeg";
import Rating from "@mui/material/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useFetchData from "../../../../hooks/FetchData/useFetchData";
import Loading from "../../../../component/Loading/Loading";

function Testimonials() {
  const { error, loading, data: reviews } = useFetchData("/api/reviews");

  return (
    <div className="bg-[#020617] px-5 h-full pb-10 pt-20 lg:grid lg:grid-cols-2 lg:px-10 xl:px-20 ">
      <div className="px-5">
        <img className="lg:w-[456px]" src={testimonials} alt="" />
      </div>
      <div className=" mt-10">
        <Banner header="Testimonials" title="What They Say About Us." />
        {loading && <Loading />}
        {error && <p>{error}</p>}
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper mt-10"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id}>
                <div className="inline-grid mx-5 lg:mx-20 md:mx-28">
                  <div className="inline-flex">
                    <img
                      className="w-[48px] rounded-full"
                      src={review.image}
                      alt=""
                    />
                    <div className="ml-3">
                      <h2 className="text-white">{review.name}</h2>
                      <Rating name="read-only" value={review.rating} readOnly />
                    </div>
                  </div>
                  <p className="text-[#475569]">{review.review_text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
