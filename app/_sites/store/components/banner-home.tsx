import React from "react";
import "tiny-slider/dist/tiny-slider.css";
import TinySlider from "tiny-slider-react";

export default function BannerHome() {
  return (
    <TinySlider
      settings={{
        lazyload: true,
        nav: false,
        mouseDrag: true,
      }}
    >
      <div className="item">
        <h4>item</h4>
      </div>
    </TinySlider>
  );
}
