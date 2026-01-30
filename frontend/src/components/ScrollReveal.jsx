import { useRef, useEffect, useState } from 'react';

const ScrollReveal = ({ children, width = '100%', delay = 0 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
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
            style={{ width, transitionDelay: `${delay}ms` }}
            className={`transition-all duration-1000 ease-out transform ${isVisible
                ? 'opacity-100 translate-y-0 blur-0'
                : 'opacity-0 translate-y-20 blur-sm'
                }`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
