import { useRef, useEffect, useState } from 'react';

const ScrollReveal = ({ children, width = '100%' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Trigger when 10% of the element is visible
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Optional: Unobserve after triggering to run only once
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            style={{ width }}
            className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
