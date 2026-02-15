import { useEffect } from 'react';

/**
 * Custom hook that uses IntersectionObserver to add a 'visible' class
 * to elements with reveal classes when they scroll into view.
 * Supports: .reveal, .reveal-scale, .reveal-left, .reveal-right
 */
const useScrollReveal = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        // Observe all reveal variants
        const selectors = '.reveal, .reveal-scale, .reveal-left, .reveal-right';
        const elements = document.querySelectorAll(selectors);
        elements.forEach((el) => observer.observe(el));

        // Re-observe on DOM changes (e.g., filter-based re-renders in Clubs)
        const mutationObserver = new MutationObserver(() => {
            const newEls = document.querySelectorAll(selectors);
            newEls.forEach((el) => {
                if (!el.classList.contains('visible')) {
                    observer.observe(el);
                }
            });
        });

        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true,
        });

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
        };
    }, []);
};

export default useScrollReveal;
