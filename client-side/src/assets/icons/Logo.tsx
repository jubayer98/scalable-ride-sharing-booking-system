const CityRideLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500"
            width="200"
            height="200"
            {...props}
        >
            {/* City skyline */}
            <g fill="#1E88E5">
                <rect x="70" y="200" width="50" height="150" />
                <rect x="130" y="170" width="60" height="180" />
                <rect x="200" y="120" width="70" height="230" />
                <rect x="280" y="180" width="60" height="170" />
                <rect x="350" y="150" width="80" height="200" />
            </g>

            {/* Bicycle */}
            <g stroke="#000000" strokeWidth="12" fill="none">
                <circle cx="160" cy="400" r="60" />
                <circle cx="340" cy="400" r="60" />
                <line x1="160" y1="400" x2="230" y2="300" />
                <line x1="230" y1="300" x2="340" y2="400" />
                <line x1="230" y1="300" x2="280" y2="300" />
                <line x1="280" y1="300" x2="340" y2="400" />
                <line x1="230" y1="300" x2="160" y2="400" />
                <line x1="230" y1="300" x2="200" y2="400" />
                <line x1="280" y1="300" x2="310" y2="260" />
            </g>

            {/* Ground line */}
            <line x1="80" y1="460" x2="420" y2="460" stroke="#000000" strokeWidth="6" />

            {/* Text */}
            <text
                x="250"
                y="500"
                fontSize="60"
                textAnchor="middle"
                fill="#1E88E5"
                fontFamily="Arial Black, sans-serif"
            >
                CITYRIDE
            </text>
        </svg>
    );
};

export default CityRideLogo;
