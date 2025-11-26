import React, { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";


gsap.registerPlugin(ScrollTrigger);

const MainWave = () => {

    useEffect(() => {
        const horizontalSections = gsap.utils.toArray(".horizontal");

        const getToValue = (animWrap) =>
        -(animWrap.scrollWidth - window.innerWidth);

        const createGSAPAnimation = (animWrap, sec, pinWrap) => {
        const isToRight = animWrap.classList.contains("to-right");
        const endX = getToValue(animWrap);

        const initialX = isToRight ? 0 : endX;
        const finalX = isToRight ? endX : 0;

        gsap.fromTo(
            animWrap,
            { x: initialX },
            {
            x: finalX,
            ease: "none",
            scrollTrigger: {
                trigger: sec,
                start: "top top",
                end: `+=${animWrap.scrollWidth - window.innerWidth}`,
                pin: pinWrap,
                scrub: true,
                invalidateOnRefresh: true,
                // markers: true,
            },
            }
        );
        };

        horizontalSections.forEach((sec) => {
        const pinWrap = sec.querySelector(".pin-wrap");
        const animWrap = pinWrap?.querySelector(".animation-wrap");

        if (animWrap && pinWrap) {
            createGSAPAnimation(animWrap, sec, pinWrap);
        }
        });

        // Cleanup
        return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <section className="horizontal">
            <div className="pin-wrap">
                <div className="animation-wrap to-right">
                    <div className="item">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </div>
                    <div className="item">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </div>
                    <div className="item">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </div>
                    <div className="item">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </div>
                    <div className="item">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainWave;
