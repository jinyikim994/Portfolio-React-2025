import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 이미지 불러오기
import MainVisual from "../../assets/images/main.webp";
import MainBg from "../../assets/images/main_bg.avif";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  useEffect(() => {
    // 메인 이미지 확대 애니메이션
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        // markers: true, // 개발 시 시각적 확인용
      },
    });

    tl.to(".image-container img", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut",
    })

      .to(
        ".section.hero",
        {
          scale: 1.1,
          transformOrigin: "center center",
          ease: "power1.inOut",
        },
        "<"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      tl.kill();
    };
  }, []);

  return (
    <main className="main">
      <div className="wrapper">

        {/* 배경 섹션 */}
        <div
          className="section hero"
          style={{
            backgroundImage: `url(${MainBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100vh",
          }}
        ></div>

        {/* 이미지 영역 */}
        <div className="image-container">
          <img src={MainVisual} alt="메인 비주얼 이미지" />
        </div>
      </div>
    </main>
  );
};

export default Main;
