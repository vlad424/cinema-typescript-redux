import React from 'react';

import './movies.css'

const Movies = () => {
    const movie = {
        'popular': [
            {content: ".../", img: "null", id: 21},
            {content: ".../", img: "null", id: 19},
            {content: ".../", img: "null", id: 9},
            {content: ".../", img: "null", id: 9},
            {content: ".../", img: "null", id: 9},
            {content: ".../", img: "null", id: 1}
        ],
        'best': [
            {content: ".../", img: "null", id: 42},
            {content: ".../", img: "null", id: 3},
            {content: ".../", img: "null", id: 2},
            {content: ".../", img: "null", id: 2},
            {content: ".../", img: "null", id: 2},
            {content: ".../", img: "null", id: 12}
        ],
        'collected for you': [
            {content: ".../", img: "null", id: 42},
            {content: ".../", img: "null", id: 3},
            {content: ".../", img: "null", id: 2},
            {content: ".../", img: "null", id: 2},
            {content: ".../", img: "null", id: 2},
            {content: ".../", img: "null", id: 12}
        ]
    }
    
    return (
        <div className='main_wrap'>
            <div className='popular'>
                <span className="main_h">
                    <p onClick={() => alert("see all popular films")}>POPULAR</p>
                    <span className="hidden_h">
                        {'#'}
                    </span>
                </span>
                <div className="mov">
                    {movie.popular.map(mov => {
                    return (
                        <div className="movie">
                            <div className="movie_hidden">{mov.content}</div>
                            <div className="movie_content">{mov.id}</div>
                        </div>
                    );})}
                </div>
            </div>
            <div className="best">
                <span className="main_h">
                    <p onClick={() => alert("see all best films")}>APPROVED BY ANALYSTS</p>
                    <span className="hidden_h">
                        {'#'}
                    </span>
                </span>
                <div className="mov">
                    {movie.best.map(mov => {
                    return (
                        <div className="movie">
                            <div className="movie_hidden">{mov.content}</div>
                            <div className="movie_content">{mov.id}</div>
                        </div>
                    );})}
                </div>
            </div>
            <div className="fyou">
                <span className="main_h">
                    <p onClick={() => alert("see all for u films")}>COLLECTED FOR YOU</p> 
                    <span className="hidden_h">
                        {'#'}
                    </span>
                </span>
                <div className="mov">
                    {movie.best.map(mov => {
                    return (
                        <div className="movie">
                            <div className="movie_hidden">{mov.content}</div>
                            <div className="movie_content">{mov.id}</div>
                        </div>
                    );})}
                </div>
            </div>
        </div>
    );
};

export default Movies;