const HeroVideo = () => {
  return (
    <div className="hero-video absolute top-0 left-0 w-full h-full mask-center mask-cover mask-no-repeat mask-[url('/images/hero/hero-mask.webp')]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-1"
        poster="/images/hero/hero-background-video-still.webp"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        preload="none"
      >
        <source
          media="(min-width: 1024px)"
          src="/videos/Homepage_All_2.mp4"
          type="video/mp4"
        />
        <source
          media="(max-width: 1023px)"
          src="/videos/Homepage_All_MOBILE.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default HeroVideo;
