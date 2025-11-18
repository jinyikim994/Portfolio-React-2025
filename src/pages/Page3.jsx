import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// 이미지, 비디오 import
import MainSlatePoster from "../assets/images/main_slate.jpg";
import MainSlateVideo from "../assets/videos/main_slate.mp4";

gsap.registerPlugin(ScrollTrigger);

const MainSlate = () => {
    const slateRef = useRef(null); 

        useEffect(() => {
        const slateSection = slateRef.current;

        const slateTimeline = gsap.timeline({
            scrollTrigger: {
            trigger: slateSection,
            start: "top top", // 트리거 요소 상단이 뷰포트 상단에 닿으면 시작
            end: "+=600%", // 시작점부터 뷰포트의 6배 스크롤 길이까지 애니메이션 진행
            scrub: 1,
            pin: true, // 섹션을 스크롤 동안 고정
            anticipatePin: 1,
            },
        });

        // 타임라인에서 사용할 DOM 요소를 변수로 저장
        const upSpan = slateSection.querySelector(".slate-up span"); 
        const downSpan = slateSection.querySelector(".slate-down span");
        const upBox = slateSection.querySelector(".slate-up");
        const downBox = slateSection.querySelector(".slate-down");
        const vod = slateSection.querySelector(".slate-vod");

        slateTimeline
            .to(upSpan, { y: "-50px", ease: "power1.in", duration: 0.1 }, 0) // 상단 텍스트 위로 50px 이동
            .to(downSpan, { y: "50px", ease: "power1.in", duration: 0.1 }, 0) // 하단 텍스트 아래로 50px 이동
            .to(upBox, { y: "-100%", ease: "power1.in", duration: 0.1 }, 0.1) // 상단 박스는 화면 밖으로 위로 이동
            .to(downBox, { y: "100%", ease: "power1.in", duration: 0.1 }, 0.1) // 하단 박스는 화면 밖으로 아래로 이동
            .to(vod, { clipPath: "inset(calc(50% - 300px) calc(50% - 640px) round 30px)", duration: 0.1 }) // clip-path를 사용해 특정 영역만 보이도록 애니메이션

        // Cleanup
        return () => {
            if (slateTimeline.scrollTrigger) slateTimeline.scrollTrigger.kill();
            slateTimeline.kill();
        };
        }, []);

        return (
            <div class="slate-wrapper">
                <section
                className="main-slate overflow-hidden relative w-full txt-c"
                ref={slateRef}
                >
                    {/* 상단 텍스트 */}
                    <div className="slate-txt slate-up flex justify-center w-full font-800 text-64 leading-89 bg-white">
                        <span>이커머스가<br/> 연결되고 변화해서</span>
                    </div>
                    <div className="slate-txt slate-down flex justify-center w-full font-800 text-64 leading-89 bg-white">
                        <span>큰 파도를<br/> 만들어 냅니다.</span>
                    </div>
                    <div className="slate-wrap">
                        <video
                            playsInline
                            autoPlay
                            loop
                            muted
                            preload="auto"
                            poster={MainSlatePoster}
                            className="slate-vod"
                        >
                        <source src={MainSlateVideo} type="video/mp4" />
                        </video>
                    </div>
                </section>
            </div>
        );
    };

export default MainSlate;
