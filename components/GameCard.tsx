import React from 'react';
import { GameInfo } from '../types';
import { BRUTAL_CLASSES } from '../constants';

interface GameCardProps {
    game: GameInfo;
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
    return (
        <a
            href={game.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
        group
        relative
        flex flex-col
        h-full
        ${game.color}
        ${game.hoverColor}
        ${BRUTAL_CLASSES.border}
        ${BRUTAL_CLASSES.shadow}
        ${BRUTAL_CLASSES.shadowHover}
        ${BRUTAL_CLASSES.transition}
        p-8
        cursor-pointer
        block
      `}
        >
            {/* Category Tag */}
            <div className="absolute top-0 right-0 bg-black text-white px-3 py-1 text-xs font-black uppercase tracking-widest translate-x-1 -translate-y-1">
                {game.category}
            </div>

            <div className="flex-1 flex flex-col justify-between">
                <h2 className={`
          text-4xl md:text-5xl font-black uppercase leading-[0.9] mb-4
          ${game.titleStyle === 'outline' ? 'text-transparent [-webkit-text-stroke:2px_black]' : 'text-black'}
          ${game.textColor || 'text-black'}
          whitespace-pre-line
        `}>
                    {game.title}
                </h2>

                <p className={`
          text-sm font-bold leading-tight mb-8
          ${game.textColor || 'text-black'}
          opacity-80
        `}>
                    {game.description}
                </p>

                <div className={`
          inline-flex items-center gap-2
          font-black uppercase italic text-xl
          ${game.textColor || 'text-black'}
        `}>
                    Play Now
                    <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
            </div>

            {/* Decorative dots in corners */}
            <div className="absolute bottom-2 right-2 flex gap-1">
                <div className="w-1.5 h-1.5 bg-black rounded-full opacity-20"></div>
                <div className="w-1.5 h-1.5 bg-black rounded-full opacity-20"></div>
            </div>
        </a>
    );
};

export default GameCard;
