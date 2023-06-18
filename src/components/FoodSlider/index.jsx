import { useRef } from "react";
import { FoodCard } from "../FoodCard";
import {
  FoodSliderButtons,
  FoodSliderCategory,
  FoodSliderContainer,
  FoodSlidesContainer,
  NextPageButton,
  PrevPageButton,
} from "./styles";

import CaretLeft from "../../assets/icons/CaretLeft.svg";
import CaretRight from "../../assets/icons/CaretRight.svg";

export function FoodSlider({ data, title }) {
  const carousel = useRef(null);
  const PrevButtonRef = useRef(null);
  const NextButtonRef = useRef(null);

  function handleNextSlide(e) {
    const { scrollLeft, scrollWidth, offsetWidth } = carousel.current;
    carousel.current.scrollLeft += offsetWidth;

    if (scrollLeft >= 0) {
      PrevButtonRef.current.style.visibility = "visible";
    }

    if (scrollLeft + offsetWidth * 2 >= scrollWidth) {
      NextButtonRef.current.style.visibility = "hidden";
    }

    e.preventDefault();
  }

  function handlePrevSlide(e) {
    const { scrollLeft, scrollWidth, offsetWidth } = carousel.current;

    carousel.current.scrollLeft -= offsetWidth;

    if (scrollLeft - offsetWidth <= 0) {
      PrevButtonRef.current.style.visibility = "hidden";
    }

    if (scrollLeft - offsetWidth * 2 <= 0) {
      NextButtonRef.current.style.visibility = "visible";
    }

    e.preventDefault();
  }

  function handleArrowsInitialState() {
    const { scrollLeft, offsetWidth } = carousel.current;

    if (data.length <= 3) return;

    if (scrollLeft - offsetWidth <= 0) {
      PrevButtonRef.current.style.visibility = "hidden";
    }
  }

  return (
    <FoodSliderContainer>
      <FoodSliderCategory>{title}</FoodSliderCategory>

      <FoodSlidesContainer ref={carousel} onLoad={handleArrowsInitialState}>
        {data ? (
          data.map((dish, index) => <FoodCard key={dish.id} dish={dish} />)
        ) : (
          <p>Nenhum prato disponível</p>
        )}
      </FoodSlidesContainer>

      {data && data.length > 3 && (
        <FoodSliderButtons>
          <PrevPageButton ref={PrevButtonRef} onClick={handlePrevSlide}>
            <img src={CaretLeft} alt="" />
          </PrevPageButton>
          <NextPageButton ref={NextButtonRef} onClick={handleNextSlide}>
            <img src={CaretRight} alt="" />
          </NextPageButton>
        </FoodSliderButtons>
      )}
    </FoodSliderContainer>
  );
}
