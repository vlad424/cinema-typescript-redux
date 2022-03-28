import React from 'react';

const Movies = () => {
    const movie = {
        'popular': [
            {content: ".../", img: "null", id: 21},
            {content: ".../", img: "null", id: 19},
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
                {movie.popular.map(mov => {
                return (
                    <div className="movie">
                        {mov.id}
                    </div>
                );})}                    
            </div>

        </div>
    );
};

export default Movies;