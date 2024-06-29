"use client"

import { useEffect } from 'react';
import Image from 'next/image';

const LogoMarquee = () => {
  useEffect(() => {
    const slides = document.getElementsByClassName('slides');
    
    for (let i = 0; i < slides.length; ++i) {
      // 対象ラッパー要素をHTMLDivElementにキャスト
      const target = slides[i] as HTMLElement;
      // データ属性からdurationを取得
      const duration = parseInt(target.dataset.duration || '10') * 1000 || 10000;
      // スライダーの進行方向(右から左 or 左から右)
      const isAlternate = target.classList.contains('alternate');
      // 子要素の数を取得
      const childNum = target.firstElementChild?.children.length || 0;
      // ロゴの幅を計算
      const logoWidth = ((100 / childNum) * 100 / 100).toFixed(2);
      // CSS変数にロゴの幅をセット
      target.style.setProperty('--logo-width', `${logoWidth}%`);

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
          target.style.transform = `translate3d(-${ progress * 50 }%, 0, 0)`;
        }

        window.requestAnimationFrame(loop);
      }

      window.requestAnimationFrame(loop);
    }
  }, []);

  return (
    <div className="slider-container">
      <div className="slides" data-duration="10">
        <div className="slide">
          <Image
            src="/local-power.jpg"
            alt="akita-intern-01"
            width={100}
            height={100}
            className="logo"
          />
          <Image
            src="/shimizugumi.jpg"
            alt="akita-intern-01"
            width={140}
            height={100}
            className="logo"
          />
          <Image
            src="/soshikinokochi.jpg"
            alt="akita-intern-01"
            width={100}
            height={100}
            className="logo"
          />
          <Image
            src="/jegls.jpg"
            alt="akita-intern-01"
            width={100}
            height={100}
            className="logo"
          />
          <Image
            src="/localquest.jpg"
            alt="akita-intern-01"
            width={100}
            height={100}
            className="logo"
          />
          <Image
            src="/rlect.jpg"
            alt="akita-intern-01"
            width={100}
            height={100}
            className="logo"
          />
          <Image
            src="/あるやうむ.webp"
            alt="akita-intern-01"
            width={100}
            height={100}
            className="logo"
          />
          <Image
            src="/141andco.jpg"
            alt="akita-intern-01"
            width={100}
            height={100}
            className="logo"
          />
        </div>
        <div className="slide">
          <Image
            src="/local-power.jpg"
            alt="akita-intern-01"
            width={100}
            height={100}
            className="logo"
          />
          <Image
            src="/shimizugumi.jpg"
            alt="akita-intern-01"
            width={140}
            height={100}
            className="logo"
          />
          <Image
            src="/soshikinokochi.jpg"
            alt="akita-intern-01"
            width={100}
            height={100}
            className="logo"
          />
          <Image
            src="/jegls.jpg"
            alt="akita-intern-01"
            width={100}
            height={100}
            className="logo"
          />
          <Image
            src="/localquest.jpg"
            alt="akita-intern-01"
            width={100}
            height={100}
            className="logo"
          />
          <Image
            src="/rlect.jpg"
            alt="akita-intern-01"
            width={100}
            height={100}
            className="logo"
          />
          <Image
            src="/あるやうむ.webp"
            alt="akita-intern-01"
            width={100}
            height={100}
            className="logo"
          />
          <Image
            src="/141andco.jpg"
            alt="akita-intern-01"
            width={100}
            height={100}
            className="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
