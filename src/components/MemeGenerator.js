import React from "react";

export default function MemeGenerator(props) {
    function goToreddit() {
        window.open(props.meme.postLink);
    }
    const imgStyle = {
        filter: props.meme.nsfw? "blur(10px)": "none"
    }
    const nsfwStyle = {
        display: props.meme.nsfw? "block": "none"
    }
    const nsfwButtonSTyle ={
        display: props.meme.nsfw? "block": "none"
    }
    return (
        <div className="meme--section">
            <div>
                <button className="generate--button" onClick={props.handleClick}><span>Get Randdit Meme</span></button>

                <div className="meme--details">
                    <h2 className="meme--title">{props.meme.title}
                    <span className="meme--nsfw"
                    style={nsfwStyle}>NSFW</span>
                    </h2>
                    {props.meme.author &&
                        <p className="meme--author">Posted by u/{props.meme.author} on r/{props.meme.subreddit}</p>
                    }
                </div>
            </div>
            <div className="meme--container">
                <img className="meme--image"
                src={props.meme.url} alt="meme" 
                onClick={goToreddit} 
                style={imgStyle} />
                {/* <button className="nsfw--button" >Show Me NSFW</button> */}
            </div>
        </div>
    )
}