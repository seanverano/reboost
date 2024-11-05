const WavesBackground = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-full z-0 scale-y-[5]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#1CABE3", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#80D261", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient1)"
            d="M0,256L60,234.7C120,213,240,171,360,165.3C480,160,600,192,720,176C840,160,960,96,1080,80C1200,64,1320,96,1380,112L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>

          <path
            fill="none"
            stroke="#F8F2F0"
            strokeWidth="3"
            d="M0,246L60,224.7C120,203,240,161,360,155.3C480,150,600,182,720,166C840,150,960,86,1080,70C1200,54,1320,86,1380,102L1440,118"
          />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-full z-0 scale-y-[4]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#1CABE3", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#80D261", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#gradient1)"
            d="M0,256L80,256C160,256,320,256,480,218.7C640,181,800,107,960,80C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />

          <path
            fill="none"
            stroke="#F8F2F0"
            strokeWidth="3"
            d="M0,266L80,266C160,266,320,266,480,228.7C640,191,800,117,960,90C1120,63,1280,85,1360,95.3L1440,106"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default WavesBackground;
