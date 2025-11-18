import React, { useEffect } from "react";

// 라이브러리 불러오기

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Page1 = () => {

    useEffect(() => {
        // ScrollSmoother 생성
        const smoother = ScrollSmoother.create({
            wrapper: ".smooth-wrapper",
            content: ".smooth-content",
            smooth: 1,
            effects: true,
            smoothTouch: 0.1,
        });

        gsap.set("span", { transform: "scale3d(1, 1, 1)" });

        gsap.utils.toArray("span").forEach((el) => {
            gsap.to(el, {
                scrollTrigger: {
                trigger: el,
                start: "top 40%",
                end: "bottom top",
                scrub: true,
                },
                transform: "scale3d(0, 1, 1)",
                duration: 3,
                ease: "expo.out",
            });
        });

        return () => {
            smoother.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
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
