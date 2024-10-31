const WavesBackgroundTwo = () => {
  return (
    <div className="m-0 z-0 p-0 w-full">
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
          d="M0,224L60,224C120,224,240,224,360,192C480,160,600,96,720,58.7C840,21,960,11,1080,26.7C1200,43,1320,85,1380,106.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
        <path
          fill="none"
          stroke="#F8F2F0"
          strokeWidth="10"
          d="M-20,264L60,264C120,264,240,264,360,232C480,200,600,136,720,98.7C840,61,960,51,1080,66.7C1200,83,1320,125,1380,146.7L1460,168L1460,360L1380,360C1320,360,1200,360,1080,360C960,360,840,360,720,360C600,360,480,360,360,360C240,360,120,360,60,360L-20,360Z"
        />
      </svg>
    </div>
  );
};

export default WavesBackgroundTwo;
