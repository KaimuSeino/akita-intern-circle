"use client";

import { useEffect } from "react";
import Image from "next/image";

const LogoMarquee = () => {
  useEffect(() => {
    const slides = document.getElementsByClassName("slides");

    for (let i = 0; i < slides.length; ++i) {
      const target = slides[i] as HTMLElement;
      const duration = parseInt(target.dataset.duration || "10") * 1000 || 10000;
      const isAlternate = target.classList.contains("alternate");
      const childNum = target.firstElementChild?.children.length || 0;
      const logoWidth = ((100 / childNum) * 100) / 100;
      target.style.setProperty("--logo-width", `${logoWidth}%`);

      let startTime = 0;
      let elapsed = 0;
      let progress = 0;

      const loop = (currentTime: number) => {
        if (!startTime) {
          startTime = currentTime;
        }

        elapsed = currentTime - startTime;
        progress = Math.min(1, elapsed / duration);

        if (progress >= 1) {
          startTime = 0;
          elapsed = 0;
          progress = 0;
        }

        if (isAlternate) {
          target.style.transform = `translate3d(${ -50 + progress * 50 }%, 0, 0)`;
        } else {
          target.style.transform = `translate3d(-${progress * 50}%, 0, 0)`;
        }

        window.requestAnimationFrame(loop);
      };

      window.requestAnimationFrame(loop);
    }
  }, []);

  return (
    <div className="slider-container overflow-hidden">
      <div className="slides flex w-[200%]" data-duration="10">
        <div className="slide flex-basis-[50%] flex items-center relative h-full">
          <Image
            src="/companies-logo.png"
            alt="company-logos"
            width={1000}
            height={10}
            className="logo flex-basis-[var(--logo-width,12.5%)] transition-transform duration-300"
          />
        </div>
        <div className="slide flex-basis-[50%] flex items-center relative h-full">
          <Image
            src="/companies-logo.png"
            alt="company-logos"
            width={1000}
            height={10}
            className="logo flex-basis-[var(--logo-width,12.5%)] transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
