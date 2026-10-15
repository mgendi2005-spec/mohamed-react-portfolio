function HeroIllustration() {
  return (
    <svg
      className="hero-illustration-art"
      viewBox="0 0 520 460"
      role="img"
      aria-labelledby="hero-illustration-title hero-illustration-description"
    >
      <title id="hero-illustration-title">Developer working at a computer</title>
      <desc id="hero-illustration-description">
        A geometric illustration of a developer working at a laptop, accented
        with violet light.
      </desc>

      <ellipse
        cx="266"
        cy="384"
        rx="181"
        ry="30"
        fill="var(--illustration-shadow)"
      />
      <circle
        cx="271"
        cy="206"
        r="151"
        fill="var(--illustration-halo)"
      />
      <circle
        cx="271"
        cy="206"
        r="151"
        fill="none"
        stroke="var(--accent-secondary)"
        strokeOpacity=".25"
        strokeWidth="1"
      />
      <path
        d="M97 215c22-85 95-145 183-145 60 0 113 29 145 74"
        fill="none"
        stroke="var(--accent)"
        strokeOpacity=".36"
        strokeDasharray="3 10"
        strokeWidth="2"
      />
      <circle cx="411" cy="149" r="5" fill="var(--accent)" />
      <circle cx="128" cy="120" r="3" fill="var(--text)" />
      <circle cx="365" cy="82" r="3" fill="var(--accent-secondary)" />
      <path
        d="m129 313 64-36 67 39-64 37z"
        fill="var(--illustration-chair)"
        stroke="var(--accent-secondary)"
        strokeOpacity=".75"
        strokeWidth="2"
      />
      <path
        d="m192 351 4 43m62-78 1 43m-66-8-33 19m99-54 35 20"
        fill="none"
        stroke="var(--illustration-line)"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="M188 249c0-34 25-59 59-59h20c35 0 59 25 59 59v63H188z"
        fill="var(--illustration-shirt)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="m227 215 21 23 22-23 12 9-17 42h-35l-17-42z"
        fill="var(--accent-secondary)"
        fillOpacity=".9"
      />
      <path
        d="M227 183c0-27 17-44 42-44 24 0 39 17 39 43v12c0 26-17 45-41 45-23 0-40-19-40-45z"
        fill="var(--illustration-skin)"
        stroke="var(--illustration-line)"
        strokeWidth="2"
      />
      <path
        d="M226 181c1-31 20-50 48-50 22 0 38 12 43 34-12-6-23-15-29-26-11 17-32 27-62 29z"
        fill="var(--illustration-hair)"
      />
      <path
        d="M252 190h8m25 0h8m-27 22c5 4 11 4 16 0"
        fill="none"
        stroke="var(--illustration-line)"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="m279 264 62 37-17 15-73-35"
        fill="var(--illustration-skin)"
        stroke="var(--illustration-line)"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="m219 266-47 38 18 14 63-36"
        fill="var(--illustration-skin)"
        stroke="var(--illustration-line)"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="m121 325 145-84 143 83-145 84z"
        fill="var(--illustration-desk)"
        stroke="var(--accent-secondary)"
        strokeWidth="2"
      />
      <path
        d="m264 408 1 31m143-115-1 31m-287-30 1 30"
        fill="none"
        stroke="var(--illustration-line)"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="m206 315 60-35 74 43-61 35z"
        fill="var(--illustration-device)"
        stroke="var(--illustration-line)"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="m223 313 43-25 54 31-44 25z"
        fill="var(--background)"
        stroke="var(--accent)"
        strokeOpacity=".6"
        strokeWidth="1.5"
      />
      <path
        d="m238 311 11-6m5 10 19-11m-10 18 9-5"
        fill="none"
        stroke="var(--accent)"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="m266 358 19-11 20 11-19 11z"
        fill="var(--accent-secondary)"
        fillOpacity=".9"
      />
      <path
        d="m364 264 20-12 24 14-20 12z"
        fill="var(--illustration-card)"
        stroke="var(--accent-secondary)"
        strokeWidth="1.5"
      />
      <path
        d="m374 264 8-5m2 9 11-6"
        fill="none"
        stroke="var(--accent)"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default HeroIllustration;
