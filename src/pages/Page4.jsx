// 라이브러리 불러오기
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page4 = () => {
    
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const elements = sectionRef.current.children;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=5000",
                    scrub: true,
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    // markers: true
                },
            });

            // 모든 텍스트 숨기기
            gsap.set(elements, { autoAlpha: 0, y: 50 });

            Array.from(elements).forEach((el, i) => {
                tl.to(elements, { autoAlpha: 0, y: 50, duration: 0.5 }, "+=0"); // 이전 텍스트 숨기기
                tl.to(el, { autoAlpha: 1, y: 0, duration: 1 }, "+=0"); // 현재 텍스트 나타내기
            });
        }, sectionRef);

        return () => {
            ScrollTrigger.getAll().forEach((st) => st.kill());
            ctx.revert();
        };
    }, []);


    return (
        <section ref={sectionRef} className="section7">
            <div className="text">코딩이란</div>
            <div className="text">프로그래밍 코드를</div>
            <div className="text">어딘가에</div>
            <div className="text">적는 것을 말한다</div>
            <div className="text">코딩은</div>
            <div className="text">누구나</div>
            <div className="text">할 수 있다.</div>
        </section>
    );
};

export default Page4;
