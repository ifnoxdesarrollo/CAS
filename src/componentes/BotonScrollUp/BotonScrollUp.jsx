import React, { useState, useEffect } from 'react'
import './BotonScrollUp.css'

function BotonScrollUp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <div className={`scroll-to-top-button ${isVisible ? 'visible-boton' : ''}`}>
                <i onClick={scrollToTop} className="bi bi-arrow-up-circle-fill up"></i>
            </div>
        </>
    )
}

export default BotonScrollUp