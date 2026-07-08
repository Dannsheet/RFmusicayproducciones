import { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('[data-cursor="hover"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('[data-cursor="hover"]')) {
        setIsHovering(false);
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsHidden(true);
    };

    const handleMouseEnterWindow = () => {
      setIsHidden(false);
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
    };
  }, []);

  // Hide on mobile
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className={`w-8 h-8 rounded-full border-2 border-[var(--color-accent)] transition-all duration-150 ${
          isHovering ? 'scale-150 bg-[var(--color-accent)]/20' : 'scale-100'
        } ${isHidden ? 'opacity-0' : 'opacity-100'}`}
      />
      <div
        className={`absolute top-1/2 left-1/2 w-2 h-2 bg-[var(--color-accent)] rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 ${
          isHovering ? 'scale-0' : 'scale-100'
        } ${isHidden ? 'opacity-0' : 'opacity-100'}`}
      />
    </div>
  );
};

export default CustomCursor;
