import { useNavigate } from 'react-router-dom'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export type Slide = {
  imgSrc: string
  name?: string
  destination?: string
}

type SliderProps = {
  slides: Slide[]
}

export function Caroussel({ slides }: SliderProps) {
  const navigate = useNavigate()
  function handleNavigation(destination: string) {
    navigate(destination)
  }
  return (
    <div className="w-full relative">
      <Swiper
        className="w-full h-full cursor-pointer"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
        loop
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.imgSrc}>
            <div
              className="w-full h-full cursor-pointer rounded-xl overflow-hidden"
              onClick={() => slide.destination && handleNavigation(slide.destination)}
            >
              <img src={slide.imgSrc} alt={slide.name} className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
