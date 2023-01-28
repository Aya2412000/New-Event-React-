import { Autoplay } from "swiper";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import CreativeSpeakerComponent from "../../../../design-system/components/CreativeSpeakerComponent/CreativeSpeakerComponent";
import { SpeakerTest } from "../../../../design-system/components/CreativeSpeakerComponent/SpeakerTest";
export default function Slider() {
  return (
    <Swiper
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    loop={true}
    modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={4}

    >
      {SpeakerTest.map(item =>{
        return<SwiperSlide key={item.id}>
          <CreativeSpeakerComponent img={item.img} name={item.name} alt={item.alt} job={item.job}/>
        </SwiperSlide>
      })}
      
    </Swiper>
  )
}
