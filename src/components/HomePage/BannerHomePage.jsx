import { React } from 'react';
import './BannerHomePage.css';

const BannerHomePage = () => {

    return (<>
        <section id="banner-homepage">
            <div className="banner-overlay">
                <h1>Welcome to <br />VelocityX</h1>
                <hr />
                <div className="playChk-btns">
                    <button id="playMusicBtn"
                        className="play-music-btn"
                        onclick="toggleMusic()"
                    >Practice</button>
                    <br /><br />
                    <button
                        className="check-cars-btn"
                        onclick="scrollToSection()"
                    >Check Courses</button>
                </div>
            </div>
        </section>
    </>
    )
}

export default BannerHomePage