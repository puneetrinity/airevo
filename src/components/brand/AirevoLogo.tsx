import React from 'react';

type LogoProps = {
  className?: string;
  variant?: 'full' | 'icon' | 'white-text';
};

export const AirevoLogo: React.FC<LogoProps> = ({ className = '', variant = 'full' }) => {
  const c = {
    a: '#009B7B',
    i: '#2970FF',
    r: '#E93A63',
    e: '#6C3DCE',
    v: '#F4A21B',
    o: '#8B5CF6',
  };

  if (variant === 'icon') {
    return (
      <svg
        viewBox="0 0 64 64"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Airevo logo icon"
      >
        <rect x="2" y="2" width="60" height="60" rx="12" fill={c.a} />
        <text
          x="32"
          y="32"
          dy=".35em"
          textAnchor="middle"
          fill="white"
          fontSize="40"
          fontFamily="sans-serif"
          fontWeight="800"
        >
          a
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 400 80"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Airevo Labs logo"
    >
      <g>
        <rect x="0" y="10" width="45" height="60" rx="8" fill={c.a} />
        <text
          x="22.5"
          y="40"
          dy=".35em"
          textAnchor="middle"
          fill="white"
          fontSize="32"
          fontFamily="sans-serif"
          fontWeight="800"
        >
          a
        </text>
        <rect x="53" y="10" width="45" height="60" rx="8" fill={c.i} />
        <text
          x="75.5"
          y="40"
          dy=".35em"
          textAnchor="middle"
          fill="white"
          fontSize="32"
          fontFamily="sans-serif"
          fontWeight="800"
        >
          i
        </text>
        <rect x="106" y="10" width="45" height="60" rx="8" fill={c.r} />
        <text
          x="128.5"
          y="40"
          dy=".35em"
          textAnchor="middle"
          fill="white"
          fontSize="32"
          fontFamily="sans-serif"
          fontWeight="800"
        >
          r
        </text>
        <rect x="159" y="10" width="45" height="60" rx="8" fill={c.e} />
        <text
          x="181.5"
          y="40"
          dy=".35em"
          textAnchor="middle"
          fill="white"
          fontSize="32"
          fontFamily="sans-serif"
          fontWeight="800"
        >
          e
        </text>
        <rect x="212" y="10" width="45" height="60" rx="8" fill={c.v} />
        <text
          x="234.5"
          y="40"
          dy=".35em"
          textAnchor="middle"
          fill="white"
          fontSize="32"
          fontFamily="sans-serif"
          fontWeight="800"
        >
          v
        </text>
        <rect x="265" y="10" width="45" height="60" rx="8" fill={c.o} />
        <text
          x="287.5"
          y="40"
          dy=".35em"
          textAnchor="middle"
          fill="white"
          fontSize="32"
          fontFamily="sans-serif"
          fontWeight="800"
        >
          o
        </text>
      </g>
      <text
        x="325"
        y="40"
        dy=".35em"
        fontSize="20"
        letterSpacing="0.1em"
        fill={variant === 'white-text' ? '#FFFFFF' : '#0F172A'}
        fontFamily="sans-serif"
        fontWeight="700"
      >
        LABS
      </text>
    </svg>
  );
};
