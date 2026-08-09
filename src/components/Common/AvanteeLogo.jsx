import React from 'react';

export const AvanteeLogo = ({ width = 210, height, showTagline = true, className = '' }) => {
  // SVG aspect ratio 445x120 => height is 26.96% of width if height is not explicitly passed
  const calcHeight = height || Math.round((width * 120) / 445);

  return (
    <svg
      width={width}
      height={calcHeight}
      viewBox="0 0 445 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Green Apex Chevron "A" */}
      <path
        d="M60 12L115 106H88L60 58L32 106H5L60 12Z"
        fill="#22C55E"
      />

      {/* Inner Silver Chevron "A" */}
      <path
        d="M60 38L80 78H68L60 66L52 78H40L60 38Z"
        fill="#A1A1AA"
      />

      {/* Center Sparkle Star in Inner Chevron */}
      <path
        d="M60 54C60 57.5 57.5 60 54 60C57.5 60 60 62.5 60 66C60 62.5 62.5 60 66 60C62.5 60 60 57.5 60 54Z"
        fill="#09100D"
      />

      {/* Text "AVANTEE" */}
      <g fill="#22C55E">
        {/* A 1 */}
        <path d="M135 20H157L173 90H154L151 75H139L136 90H120L135 20ZM145 38L141 58H149L145 38Z" />
        {/* Star Sparkle in A 1 Counter */}
        <path d="M145 42C145 45 143 47 140 47C143 47 145 49 145 52C145 49 147 47 150 47C147 47 145 45 145 42Z" fill="#09100D" />

        {/* V */}
        <path d="M175 20H193L203 70L213 20H231 L212 90H194L175 20Z" />

        {/* A 2 */}
        <path d="M233 20H255L271 90H252L249 75H237L234 90H218L233 20ZM243 38L239 58H247L243 38Z" />
        {/* Star Sparkle in A 2 Counter */}
        <path d="M243 42C243 45 241 47 238 47C241 47 243 49 243 52C243 49 245 47 248 47C245 47 243 45 243 42Z" fill="#09100D" />

        {/* N */}
        <path d="M273 20H290L308 62V20H323V90H306L288 48V90H273V20Z" />

        {/* T */}
        <path d="M325 20H366V34H353V90H338V34H325V20Z" />

        {/* E 1 */}
        <path d="M368 20H398V33H383V47H396V59H383V76H399V90H368V20Z" />

        {/* E 2 */}
        <path d="M401 20H431V33H416V47H429V59H416V76H432V90H401V20Z" />
      </g>

      {/* Tagline "WHERE VARIETY MEETS EXCELLENCE" */}
      {showTagline && (
        <text
          x="135"
          y="108"
          fill="#D4D4D8"
          fontSize="13"
          fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif"
          fontWeight="700"
          letterSpacing="2.1"
        >
          WHERE VARIETY MEETS EXCELLENCE
        </text>
      )}
    </svg>
  );
};

export const AvanteeLogoMark = ({ size = 44, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Green Apex Chevron "A" */}
      <path
        d="M60 10L115 110H85L60 60L35 110H5L60 10Z"
        fill="#22C55E"
      />
      {/* Inner Silver Chevron "A" */}
      <path
        d="M60 40L80 82H68L60 68L52 82H40L60 40Z"
        fill="#E4E4E7"
      />
      {/* Center Sparkle Star */}
      <path
        d="M60 56C60 60 56 63 52 63C56 63 60 66 60 70C60 66 64 63 68 63C64 63 60 60 60 56Z"
        fill="#09100D"
      />
    </svg>
  );
};
