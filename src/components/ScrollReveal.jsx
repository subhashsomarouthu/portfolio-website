import { useScrollReveal } from '../hooks/useScrollReveal';

const ScrollReveal = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
