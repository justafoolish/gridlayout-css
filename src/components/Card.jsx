import React from 'react';

import cover from '../assets/image/cover.png'

export const Card = ({ card, handleChoice, flipped, disabled }) => {
    const handleClick = () => handleChoice && !disabled && handleChoice(card)

    return (
        <div className="md:w-[9rem] md:h-[9rem]  relative shadow-lg shadow-gray-500/20 rounded hover:scale-105 hover:shadow-violet-600/40 transition-all cursor-pointer hover:z-10 [perspective:1000px] group bg-transparent">
            <div className={`relative w-full h-full [transform-style:preserve-3d] transition-all ${flipped && '[transform:rotateY(180deg)]'} duration-[0.5s]`}>
                <img src={card.image} alt="card front" className="object-scale-down object-center absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]" />
                {!card.matched && (
                    <img src={cover} alt="card back" onClick={handleClick} className="absolute w-full h-full [backface-visibility:hidden]"/>
                )}
            </div>
        </div>
    );
};
