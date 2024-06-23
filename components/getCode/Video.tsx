const Video = () => {
  return (
    <div className=" lg:w-1/2 flex justify-center xl:justify-end ">
      <iframe
        className="border-4 border-prime rounded-xl border-opacity-10 shadow-2xl"
        width="600"
        height="340"
        src="https://www.youtube.com/embed/RtjTzuJ8LGU?si=zdDcsiSyd7AjmF3u"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
