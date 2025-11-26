// 라이브러리 불러오기
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 이미지, 비디오 불러오기
import MainSlatePoster from "../assets/images/main_slate.jpg";
import MainIcon1 from "../assets/images/main_plai.png";
import MainIcon2 from "../assets/images/main_oneteam.png";
import MainSlateVideo from "../assets/videos/main_slate.mp4";

gsap.registerPlugin(ScrollTrigger);

    const MainPage = () => {
        
        /* ---------------------- 첫 번째 섹션(MainSlate) ---------------------- */
        const slateRef = useRef(null);

        useEffect(() => {
            const slateSection = slateRef.current;

            const slateTimeline = gsap.timeline({
                
                scrollTrigger: {
                    trigger: slateSection,
                    start: "top top",
                    end: "+=600%",
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1
                }
            });

            const upSpan = slateSection.querySelector(".slate-up span");
            const downSpan = slateSection.querySelector(".slate-down span");
            const upBox = slateSection.querySelector(".slate-up");
            const downBox = slateSection.querySelector(".slate-down");
            const vod = slateSection.querySelector(".slate-vod");

            slateTimeline
                .to(upSpan, { y: "-50px", ease: "power1.in", duration: 0.1 }, 0)
                .to(downSpan, { y: "50px", ease: "power1.in", duration: 0.1 }, 0)
                .to(upBox, { y: "-100%", ease: "power1.in", duration: 0.1 }, 0.1)
                .to(downBox, { y: "100%", ease: "power1.in", duration: 0.1 }, 0.1)
                .to(
                    vod,
                    {
                    clipPath:
                        "inset(calc(50% - 300px) calc(50% - 640px) round 30px)",
                    duration: 0.1
                    }
                );

            return () => {
                if (slateTimeline.scrollTrigger) slateTimeline.scrollTrigger.kill();
                slateTimeline.kill();
                };
            }, []);

        /* ---------------------- 두 번째 섹션(MainZoom) ---------------------- */
        const zoomRef = useRef(null);

            useEffect(() => {
                const zoomTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: zoomRef.current,
                        start: "top top",
                        end: "+=150%",
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1
                    }
                });

                zoomTimeline
                    .to(".zoom-group", { clipPath: "inset(-10% round 20px)" })
                    .to(".zoom-txt > strong", { color: "#2D3EBD" }, 0.5)
                    .fromTo(
                        ".zoom-obj",
                        { width: "0", margin: "0" },
                        {
                        width: "auto",
                        margin: "0 5px 0 10px",
                        duration: 0.2
                        },
                        0.5
                    )
                    .to(".main-zoom", { backgroundColor: "transparent" });

                return () => {
                    if (zoomTimeline.scrollTrigger) zoomTimeline.scrollTrigger.kill();
                    zoomTimeline.kill();
                    };
            }, []);

        /* ---------------------- 리턴 (두 섹션 통합) ---------------------- */
        return (
            
            <div className="slate-wrapper">
                
                {/* ---------- MainSlate 섹션 ---------- */}
                <section
                    className="main-slate overflow-hidden relative w-full txt-c"
                    ref={slateRef}
                >
                    <div className="slate-txt slate-up flex justify-center w-full font-800 text-64 leading-89 bg-white">
                        <span>
                            이커머스가<br />연결되고 변화해서
                        </span>
                    </div>

                    <div className="slate-txt slate-down flex justify-center w-full font-800 text-64 leading-89 bg-white">
                        <span>
                            큰 파도를 <br />만들어 냅니다.
                        </span>
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

                {/* ---------- MainZoom 섹션 ---------- */}
                <section
                    className="main-zoom overflow-hidden relative w-full txt-c"
                    ref={zoomRef}
                >
                    <div className="zoom-group flex justify-center items-center bg-white">
                        <div className="zoom-txt font-800 text-44 leading-89">
                            그 동안 고객과 셀러의  연결성을 강화하기 위해<br />
                            독립적이고 자율적인 연합군처럼 움직여 왔지만,<br />
                            <strong>생성형 Ai 플레이</strong>
                            {/* 이미지 */}
                            <img src={MainIcon1} alt="" className="zoom-obj" />
                            를 기반으로 한 <strong>One Team</strong>
                            <img src={MainIcon2} alt="" className="zoom-obj"/>
                            으로서<br />
                            시너지 극대화에 최선을 다하고 있습니다.
                        </div>
                    </div>
                </section>
            </div>
        );
    };

export default MainPage;
