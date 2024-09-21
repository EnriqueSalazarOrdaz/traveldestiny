import React from "react";


const VideoSection: React.FC = () => {
    return (
        <div className="video-section">
            <section className="hero">
                <span>‌‌Próximo lanzamiento</span>
            </section>
            <video
                autoPlay
                loop
                muted
                playsInline
                poster="https://img1.wsimg.com/isteam/videos/uA41GmyyG8IMaxXdb"
            >
                <source
                    src="https://websites.godaddy.com/categories/v4/videos/raw/video/uA41GmyyG8IMaxXdb"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoSection;
