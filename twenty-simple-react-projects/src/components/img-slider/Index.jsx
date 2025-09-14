import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

function ImgSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages() {
    try {
      setLoading(true);
      const response = await fetch(`${url}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) setImages(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log("Fail To Fetch Images");
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages();
  }, [url]);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide == 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide == images.length - 1 ? 0 : currentSlide + 1);
  };

  if (loading) return <div>Loading data! Please wait</div>;
  if (errorMsg !== null) return <div>Error occured!{errorMsg}</div>;

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => {
            return (
              <img
                src={imageItem.download_url}
                alt={imageItem.download_url}
                key={imageItem.id}
                className={
                  index === currentSlide
                    ? "current-image"
                    : "current-image hide-current-image"
                }
              />
            );
          })
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((imageItem, index) => (
              <button
                onClick={() => {
                  setCurrentSlide(index);
                }}
                key={index}
                className={
                  index === currentSlide
                    ? "current-indicator"
                    : "current-indicator inactive-current-indicator"
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default ImgSlider;
