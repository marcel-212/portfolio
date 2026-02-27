import { useState } from "react";
import type { Site } from "../types";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import Card from '../components/Card'

import '../styles/Slider.tsx.scss'

type Props = {
    title: string
    slides: Site[]
    className?: string
    ref: React.RefObject<any>
}

const Slider = ({title, slides, className, ref}:Props) => {
    const [current, setCurrent] = useState<number>(0);

    const prevSlide = ():void => {
        if(current != 0){
            setCurrent(prev => prev - 1)
        }
    }

    const nextSlide = ():void => {
        if(current != slides.length - 1){
            setCurrent(prev => prev + 1)
        }
    }   

    const setSlide = (newIndex: number):void => {
        setCurrent(newIndex)
    }

    return ( 
        <section className="slider-box" ref={ref}>
            <h1>{title}</h1>
            <div className={`slider ${className}`}>
                <div className="slider-main">
                    <button onClick={prevSlide} className="slider-main__btn slider-main__btn_left">
                            <BiSolidLeftArrow/>
                        </button>

                    <div className="slider-main__viewport">
                        
                        <div className="slider-main__track"style={{transform: `translateX(-${current * 100}%)`}}>
                            {slides.map((item) => (
                                <div className="slider-main__track_slide" key={item.id}>
                                    <Card site={item} displayImage={true}/>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <button onClick={nextSlide} className="slider-main__btn slider-main__btn_right">
                        <BiSolidRightArrow/>
                    </button>
                </div>
                <div className="slider-points">
                    {slides.map((item, index) => (
                        <button
                         key={item.id}
                         onClick={() => setSlide(index)}
                         className={current === index ? 'active' : ''}
                        />
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default Slider;