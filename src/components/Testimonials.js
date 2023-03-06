import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper";
import TestimonialCard from './TestimonialCard';


// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <div className='mx-auto pt-24 sm:pt-32' id='testimonials'>
        <h1 className='text-white text-3xl sm:text-5xl'>WHAT THE MEMBERS ARE SAYING</h1>
        <div className='lg:hidden'>
            <Swiper
            className='mx-auto w-full'
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
                type: 'bullets',
            }}
            modules={[Pagination]}
            >
            <SwiperSlide>
                <TestimonialCard 
                    url={"https://www.youtube.com/embed/FE_nBvIPEVA"}
                    quote="Untapped athlete has that unique experience from a perspective of
                    just like being jacked and ripped, being fast and athletic while doing
                    movements that aren't gonna cause you to get hurt later in the future so that's legit there's
                    nobody else doing all of that."
                    name="Kobe Gatsby"
                />
            </SwiperSlide>
            <SwiperSlide>
                <TestimonialCard 
                    url={"https://www.youtube.com/embed/oqkl1oSa3sI"}
                    quote="Even though logan's mentioning younger people i think that
                    this is also a really good program for older people, i'm gaining strength it's
                    easier on my joints and a number of weak areas that other
                    programs even with good trainers kind of glossed over or didn't really address effectively
                    and this program definitely does so i just feel very good about it."
                    name="John"
                />
            </SwiperSlide>
            <SwiperSlide>
                <TestimonialCard 
                    url={"https://www.youtube.com/embed/8eXYVv57BrE"}
                    quote="I have measurable tests that i took here at the academy that shows that i got better from what i called them to now 
                    and my progress pictures have been outstanding, everything i asked for i got."
                    name="Anthony"
                />
            </SwiperSlide>
            <SwiperSlide>
                <TestimonialCard 
                    url={"https://www.youtube.com/embed/oac4CA_EOYE"}
                    quote="I definitely had a lot of back pain and I used to snowboard a lot so my legs were really uneven and so now I feel like I'm super even and
                    my back is way better than it was. I feel like even just squatting like a simple squat going all the way down i couldn't really do that so I feel like mobility wise I'm super up there
                    I feel like I don't really have the aches and pains i used to."
                    name="Kevin A."
                />
            </SwiperSlide>

            <SwiperSlide>
                <TestimonialCard 
                    url={"https://www.youtube.com/embed/Apd9sMUzv-c"}
                    quote="I'm just very pleased with how far I've come and working with these guys it's a really good model 
                    with like how they have their programs customized"
                    name="Michael Guffey"
                />
            </SwiperSlide>

            <SwiperSlide>
                <TestimonialCard 
                    url={"https://www.youtube.com/embed/_0iSQ4E8kB8"}
                    quote="i've been working with them for about five and a half months
                    and i've seen more progress with them than i definitely would have on
                    my own. Any injuries i had, any like nagging things like elbow pain from baseball in high school, stuff like that it's gone away now."
                    name="Nate W."
                />
            </SwiperSlide>
            </Swiper>
        </div>

        <div className='hidden lg:block'>
            <Swiper
            className='mx-auto w-full'
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
                type: 'bullets',
            }}
            onSlideChange={(swiper) =>{
                const prevSwiper = swiper?.slidesEl?.children?.[swiper.activeIndex - 1]?.children?.[0]?.children?.[0]?.children?.[0]?.children?.[0]?.children?.[0]?.children[0]?.children?.[0];
                const nextSwiper = swiper?.slidesEl?.children?.[swiper.activeIndex + 1]?.children?.[0]?.children?.[0]?.children?.[0]?.children?.[0]?.children?.[0]?.children[0]?.children?.[0];
                prevSwiper?.contentWindow?.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
                nextSwiper?.contentWindow?.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');

            } }
            navigation={true}
            modules={[Navigation, Pagination]}
            >
            <SwiperSlide>
                <TestimonialCard 
                    url={"https://www.youtube.com/embed/FE_nBvIPEVA?enablejsapi=1&version=3&playerapiid=ytplayer"}
                    quote="Untapped athlete has that unique experience from a perspective of
                    just like being jacked and ripped, being fast and athletic while doing
                    movements that aren't gonna cause you to get hurt later in the future so that's legit there's
                    nobody else doing all of that."
                    name="Kobe Gatsby"
                />
            </SwiperSlide>
            <SwiperSlide>
                <TestimonialCard 
                    url={"https://www.youtube.com/embed/oqkl1oSa3sI?enablejsapi=1&version=3&playerapiid=ytplayer"}
                    quote="Even though logan's mentioning younger people i think that
                    this is also a really good program for older people, i'm gaining strength it's
                    easier on my joints and a number of weak areas that other
                    programs even with good trainers kind of glossed over or didn't really address effectively
                    and this program definitely does so i just feel very good about it."
                    name="John"
                />
            </SwiperSlide>
            <SwiperSlide>
                <TestimonialCard 
                    url={"https://www.youtube.com/embed/8eXYVv57BrE?enablejsapi=1&version=3&playerapiid=ytplayer"}
                    quote="I have measurable tests that i took here at the academy that shows that i got better from what i called them to now 
                    and my progress pictures have been outstanding, everything i asked for i got."
                    name="Anthony"
                />
            </SwiperSlide>
            <SwiperSlide>
                <TestimonialCard 
                    url={"https://www.youtube.com/embed/oac4CA_EOYE?enablejsapi=1&version=3&playerapiid=ytplayer"}
                    quote="I definitely had a lot of back pain and I used to snowboard a lot so my legs were really uneven and so now I feel like I'm super even and
                    my back is way better than it was. I feel like even just squatting like a simple squat going all the way down i couldn't really do that so I feel like mobility wise I'm super up there
                    I feel like I don't really have the aches and pains i used to."
                    name="Kevin A."
                />
            </SwiperSlide>

            <SwiperSlide>
                <TestimonialCard 
                    url={"https://www.youtube.com/embed/Apd9sMUzv-c?enablejsapi=1&version=3&playerapiid=ytplayer"}
                    quote="I'm just very pleased with how far I've come and working with these guys it's a really good model 
                    with like how they have their programs customized"
                    name="Michael Guffey"
                />
            </SwiperSlide>

            <SwiperSlide>
                <TestimonialCard 
                    url={"https://www.youtube.com/embed/_0iSQ4E8kB8?enablejsapi=1&version=3&playerapiid=ytplayer"}
                    quote="i've been working with them for about five and a half months
                    and i've seen more progress with them than i definitely would have on
                    my own. Any injuries i had, any like nagging things like elbow pain from baseball in high school, stuff like that it's gone away now."
                    name="Nate W."
                />
            </SwiperSlide>
            </Swiper>
        </div>
    </div>
  );
};