import styled from "styled-components";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { useEffect, useState, useRef, useReducer } from "react";
import { modifiedSliderItems } from "../data";
import "./Slider.css";

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  background: #00181d;

  /* Parent should be positioned relative when its children/grandchildren are to be positioned absolute */
  position: relative;
  font-family: "Poppins", sans-serif;

  overflow: hidden;

  /* & .arrow:hover .progress {
    opacity: 1;
  } */

  &:hover .progress {
    opacity: 1;
  }
`;

// Slider Progress Indicator
const Progress = styled.div`
  width: 100px;
  height: 5px;
  position: fixed;
  margin-top: 20px;
  right: 50px;
  z-index: 10;

  display: flex;
  gap: 0.25rem;

  transition: opacity 20ms ease-in;
  opacity: 0;
`;

// Arrow Icon Container 👇
const Arrow = styled.a`
  width: 50px;
  height: 50px;
  background: #efe3e3;
  border-radius: 50%;
  opacity: 0.5;

  display: flex;
  align-items: center;
  justify-content: center;

  /* Center the Arrows (i.e. the container of the arrow icons) */
  position: absolute;
  top: 0;
  bottom: 0;

  left: ${(props) => props.direction === "left" && "1em"};
  right: ${(props) => props.direction === "right" && "1em"};

  margin: auto;
  z-index: 2;
  cursor: pointer;

  & .left-arrow-icon,
  & .right-arrow-icon {
    transition: transform 150ms ease-in;
  }

  &:hover .left-arrow-icon,
  &:hover .right-arrow-icon {
    transform: scale(1.5);
  }

  &:hover ~ .progress {
    opacity: 1;
  }
`;

// Container for the images (on clicking the arrows, this container "Wrapper" will move)
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  --items-per-screen: 1;
`;

// Container for the Slide ( Image & Text(Title, description & button) )
const Slide = styled.div`
  width: 100vw;
  /* width: 100%; */
  /* flex-grow: 1; */
  height: 100%;
  display: flex;
  align-items: center;
  background: ${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 11;
  display: flex;
  align-items: center;
  /* background: lightgreen; */
  justify-content: center;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 9;
  /* background: #033c35; */
  padding: 3.125em;
  color: white;
  /* position: relative; */
`;

const Title = styled.h1`
  font-size: 4.375em;
`;

const Desc = styled.p`
  margin: 3.125em 0em;
  font-size: 1.25em;
  font-weight: 500;
  letter-spacing: 0.1ch;
`;

const Button = styled.button`
  padding: 0.625em;
  font-size: 1.25em;
  background: transparent;
  border-radius: 0.5em;
  color: white;
  outline: none;
  border-color: white;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  let isMoving = false;

  const [disabled, setDisabled] = useState(false);

  const wrapperRef = useRef();
  const progressBarRef = useRef();
  const sliderLen = modifiedSliderItems.length;

  const calculateProgressBar = (progressBarRef) => {
    // Setting the text content of the Progress element to an empty string (which will clear everything out)
    progressBarRef.current.innerText = "";

    // Calculate and store the number of actual items in the Overall Slider
    const itemCount = modifiedSliderItems.length - 2;

    // Get the value of  -items-per-screen  variable  that we defined earlier in the CSS

    // Get the <Wrapper>
    const slider = wrapperRef.current;

    const itemsPerScreen = parseInt(
      getComputedStyle(slider).getPropertyValue("--items-per-screen")
    );

    // Store how many Progress Bars to show in a variable
    const progressBarItemCount = Math.ceil(itemCount / itemsPerScreen);

    for (let i = 0; i < progressBarItemCount; i++) {
      const barItem = document.createElement("div");
      barItem.classList.add("progress-item");

      // slideIndex  is the index of the slider ( "-1" since we have initialized slideIndex to be 1 at first)
      if (
        i === slideIndex - 1 ||
        i === slideIndex + (sliderLen - 3) ||
        i === slideIndex - (sliderLen - 1)
      ) {
        barItem.classList.add("active");
      }

      progressBarRef.current.append(barItem);
    }
  };

  const moveSlides = () => {
    // console.log(
    //   `Value of slideIndex inside this "moveSlides" function is : ${slideIndex}`
    // );

    wrapperRef.current.style.transform = `translateX(-${slideIndex * 100}vw)`;
  };

  useEffect(() => {
    moveSlides();
    calculateProgressBar(progressBarRef);
  }, [slideIndex]);

  const handleClick = (direction) => {
    if (!disabled) {
      // disable the link
      setDisabled(true);

      // wait for 500ms
      setTimeout(() => {
        // enable the link
        setDisabled(false);
      }, 700);
      // console.log(`handleClick function RAN`);
      if (isMoving) {
        return;
      }
      isMoving = true;
      wrapperRef.current.style.transition = `transform 650ms ease-in-out`;
      if (direction === "left") {
        setSlideIndex(slideIndex - 1);
        // console.log(
        //   `Value of slideIndex is changed inside this if statement of direction === "left" to ${slideIndex}`
        // );
      }
      if (direction === "right") {
        setSlideIndex(slideIndex + 1);
        // console.log(
        //   `Value of slideIndex is changed inside this if statement of direction === "right" to ${slideIndex}`
        // );
      }
      moveSlides();
      // console.log(`Slide Index becomes ${slideIndex}`);
    }
  };

  const handleTransitionEnd = () => {
    isMoving = false;
    if (slideIndex === 0) {
      wrapperRef.current.style.transition = "none";
      setSlideIndex(modifiedSliderItems.length - 2);
      moveSlides();
    }

    if (slideIndex === modifiedSliderItems.length - 1) {
      wrapperRef.current.style.transition = "none";
      setSlideIndex(1);
      moveSlides();
    }
  };

  return (
    <Container>
      <Progress className="progress" ref={progressBarRef}></Progress>
      <Arrow
        disabled={disabled}
        className="arrow left-arrow"
        direction="left"
        onClick={() => handleClick("left")}
      >
        <AiFillCaretLeft className="left-arrow-icon" />
      </Arrow>
      {/* <Progress className="progress" ref={progressBarRef}></Progress> */}
      <Wrapper
        onTransitionEnd={handleTransitionEnd}
        ref={wrapperRef}
        id="wrapper"
      >
        {modifiedSliderItems.map((item, index) => (
          <Slide key={index} bg={item.bg}>
            <ImgContainer>
              <Image src={item.img}></Image>
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Explore Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        disabled={disabled}
        className="arrow right-arrow"
        direction="right"
        onClick={(e) => handleClick("right")}
      >
        <AiFillCaretRight className="right-arrow-icon" />
      </Arrow>
    </Container>
  );
};

export default Slider;
