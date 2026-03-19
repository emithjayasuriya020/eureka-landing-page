import { useState, useEffect } from 'react';

const useScrollSpy = (ids, options = {}) => {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, {
      threshold: options.threshold || 0.5,
      rootMargin: options.rootMargin || '0px',
    });

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [ids, options.threshold, options.rootMargin]);

  return activeId;
};

export default useScrollSpy;
