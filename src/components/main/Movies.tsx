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
            {content: ".../", img: "null", id: 12}
        ]
    }
    
    return (
        <div className='main_wrap'>
            <div className='popular'>
                <span className="main_h">
                    <p>POPULAR</p>
                    <p className="hidden_h">
                        {'#'}
                    </p>
                </span>
                <div className="mov_popular">
                    {movie.popular.map(mov => {
                    return (
                        <div className="movie">
                            {mov.id}
                        </div>
                    );})}
                </div>
            </div>

        </div>
    );
};

export default Movies;