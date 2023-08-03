import React from "react";

export default function MemeGenerator(props) {
    function goToreddit() {
        window.open(props.meme.postLink);
    }
    return (
        <div className="meme--section">
            <div>
                <button className="generate-button" onClick={props.handleClick}><span>Get Randdit Meme</span></button>

                <div className="meme--details">
                    <h2 className="meme--title">{props.meme.title}</h2>
                    {props.meme.author &&
                        <p className="meme--author">Posted by u/{props.meme.author} on r/{props.meme.subreddit}</p>
                    }
                </div>
            </div>
            <div>
                <img className="meme--image" src={props.meme.url} alt="meme" onClick={goToreddit} />
            </div>
        </div>
    )
}