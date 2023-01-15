import React from "react";

export default function Main() {
    return(
        <div className="Main">
            <h1 className="Main-title" >Yejee Paik</h1>

            <h2 className="Main-jobtitle">Graduate Research Assitant</h2>

            <h3 className="Main-website">yejeepaik.website</h3>

            <button className="Main-email">            <img src="./Email Icon.png" className="Main-email-icon"/>Email
            </button>

            <button className="Main-linkedin">             <img src="./LinkedIn Icon.png" className="Main-linkedin-icon"/> LinkedIn
            </button>  

            <h3 className="Main-about" >About</h3>

            <p className="Main-about-description">I am a research assistant at Georgia Tech. I am the prettiest girl in the world and my boyfriend appreciates it a lot.</p>

            <h3 className="Main-interests">Interests</h3>

            <p className="Main-interests-description">Tennis master. Music jockey. Snack Monster.</p>

        </div>
    )
}