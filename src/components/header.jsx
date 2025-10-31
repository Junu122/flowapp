import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
const slides = [
    {
        img: '/images/main-banner1.jpg',
        title: 'Modern Designs',
    },
    {
        img: '/images/main-banner2.jpg',
        title: 'Clean & Minimal',
    },
    {
        img: '/images/main-banner3.jpg',
        title: 'Personalize and Customize',
    },
];

const Header = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [animateTitle, setAnimateTitle] = useState(true);

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });
    }, []);

    const nextSlide = () => {
        setAnimateTitle(false);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setAnimateTitle(true);
        }, 50);
    };

    const prevSlide = () => {
        setAnimateTitle(false);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setAnimateTitle(true);
        }, 50);
    };

    return (
        <>
            <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-up {
          animation: fadeUp 1s ease-out forwards;
        }
  
      `}</style>

            <div className="main-logo">
                <a href="index.html">A.</a>
            </div>
            <div className="side-nav-bar">
                <input id="menu-toggle" type="checkbox" />
                <label className="menu-btn" htmlFor="menu-toggle">
                    <span></span>
                </label>
            </div>

            <section id="intro" className="scrollspy-section">
                <div className="main-slider">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`slider-item jarallax  ${index === currentSlide ? 'active' : 'inactive'}`}
                            data-speed="0.2"
                            style={{ display: index === currentSlide ? 'block' : 'none' }}
                        >


                            <img src={slide.img} alt="" className='jarallax-img'/>



                            <div className="banner-content">
                                <h2 className={`banner-title txt-fx ${animateTitle ? 'animate-fade-up' : ''}`}>
                                    {slide.title}
                                </h2>
                                <div className="btn-wrap">
                                    <a href="#" className="btn-with-line">View Project</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="button-container">
                    <button className="prev slick-arrow" onClick={prevSlide}>
                        <i className="icon icon-chevron-thin-left"></i>
                    </button>
                    <button className="next slick-arrow" onClick={nextSlide}>
                        <i className="icon icon-chevron-thin-right"></i>
                    </button>
                </div>
            </section>

        </>
    );
};

export default Header;