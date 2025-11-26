// 라이브러리 불러오기
import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Page1 = () => {

    useEffect(() => {
        
        const ctx = gsap.context(() => {
            
            const smoother = ScrollSmoother.create({
                wrapper: ".smooth-wrapper", // 스크롤 전체를 감싸는 부모 레이어(고정되는 레이어)
                content: ".smooth-content", // 실제 스크롤되는 콘텐츠 영역
                smooth: 1, // 스크롤 부드러움 정도(숫자 높을수록 더 부드럽지만 느려짐)
                effects: true, // ScrollTrigger와 ScrollSmoother를 연동하여 parallax 등 효과 가능
                smoothTouch: 0.1, // 모바일 터치 스크롤 부드러움
            });

            gsap.set("span", { transform: "scale3d(1, 1, 1)" }); // 페이지 내 모든 <span> 요소들의 기본 scale 값을 1,1,1로 설정 즉, 요소가 처음 보일 때 크기가 원래 크기임

            // 모든 span 요소에 스크롤 애니메이션 적용
            gsap.utils.toArray("span").forEach((el) => {
                gsap.to(el, {
                    scrollTrigger: {
                    trigger: el, // 현재 span 요소가 기준
                    start: "top 40%", // span의 맨 위가 화면의 40% 지점에 왔을 때 애니메이션 시작
                    end: "bottom top", // span의 바닥(bottom)이 화면 맨 위(top)에 닿으면 끝
                    scrub: true,
                    },
                    transform: "scale3d(0, 1, 1)",
                    duration: 3,
                    ease: "expo.out",
                });
            });
        });

        return () => ctx.revert(); 
        }, []);

        return (
            
            <div className="smooth-wrapper">
                <div className="smooth-content">
                    <div className="text-animation">
                        A dozen, a gross, and a score
                        <span></span>
                    </div>
                    <div className="text-animation">
                        Plus three times the square root of four
                        <span></span>
                    </div>
                    <div className="text-animation">
                        Divided by seven
                        <span></span>
                    </div>
                    <div className="text-animation">
                        Plus five times eleven
                        <span></span>
                    </div>
                    <div className="text-animation">
                        Is nine squared and not a bit more.
                        <span></span>
                    </div>
                    <div className="text-animation">
                        A dozen, a gross, and a score
                        <span></span>
                    </div>
                    <div className="text-animation">
                        Plus three times the square root of four
                        <span></span>
                    </div>
                    <div className="text-animation">
                        Divided by seven
                        <span></span>
                    </div>
                    <div className="text-animation">
                        Plus five times eleven
                        <span></span>
                    </div>
                    <div className="text-animation">
                        Is nine squared and not a bit more.
                        <span></span>
                    </div>
                    <div className="text-animation">
                        A dozen, a gross, and a score
                        <span></span>
                    </div>
                    <div className="text-animation">
                        Plus three times the square root of four
                        <span></span>
                    </div>
                    <div className="text-animation">
                        Divided by seven
                        <span></span>
                    </div>
                    <div className="text-animation">
                        Plus five times eleven
                        <span></span>
                    </div>
                    <div className="text-animation">
                        Is nine squared and not a bit more.
                        <span></span>
                    </div>
                </div>
            </div>
        );
};

export default Page1;
