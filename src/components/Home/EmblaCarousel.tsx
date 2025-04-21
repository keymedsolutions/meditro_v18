import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'

// Sample slider data
const SliderData = [
  {
    message: "When it comes to our requirements for revenue cycle management, Key Med Solutions has been a tremendous asset. Their knowledge, care for the little things, and dedication to getting things done have greatly enhanced our financial performance. We heartily endorse their offerings!",
    name: "DR Patel",
    designation: "Doctor",
  },
  {
    message: "When it comes to our requirements for revenue cycle management, Key Med Solutions has been a tremendous asset. Their knowledge, care for the little things, and dedication to getting things done have greatly enhanced our financial performance. We heartily endorse their offerings!",
    name: "DR Shah",
    designation: "Doctor",
  }
]

const EmblaCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true, // Enables looping of slides
    // Optionally add other settings
  })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="embla testimonial-slide">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container testimonial-slide">
          {SliderData.map((item, index) => (
            <div className="embla__slide slider-item" key={index}>
              <div className="testimonial-bx">
                <div className="testimonial-content">
                  <p>{item.message}</p>
                </div>
                <div className="client-info">
                  <h5 className="name">{item.name}</h5>
                  <p>{item.designation}</p>
                </div>
                <div className="quote-icon">
                  <i className="fas fa-quote-left"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
