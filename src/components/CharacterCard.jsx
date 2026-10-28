import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CharacterCard({ character }) {
  const isWind = character.theme === 'wind';

  return (
    <article className={`character-card character-card--${character.theme}`}>
      {/* Cinematic character artwork */}
      <div className="character-art">
        <img
          className="character-poster"
          src={character.image}
          alt={`${character.name} — ${character.realName}`}
          loading="lazy"
        />

        {/* Dark gradients for cinematic readability */}
        <div className="character-art-gradient" aria-hidden="true" />

        {/* Character identification */}
        <div className="character-art-heading">
          <span className="character-file">
            BHARATVERSE ORIGINAL
          </span>

          <span className="character-file-number">
            FILE {character.number}
          </span>
        </div>

        {/* Bottom poster title */}
        <div className="character-art-title">
          <span className="character-element">
            {isWind ? 'THE FORCE OF WIND' : 'THE FORCE OF WATER'}
          </span>

          <h3>{character.name}</h3>

          <p>{character.realName}</p>
        </div>

        <span className="art-index">
          {character.number} / BV
        </span>
      </div>

      {/* Character information */}
      <div className="character-info">
        <div className="character-topline">
          <span>{character.role}</span>
          <span>{character.city}</span>
        </div>

        <h4 className="character-name">
          {character.name}
          <span> / {character.realName}</span>
        </h4>

        <p className="character-description">
          {character.description}
        </p>

        <div className="power-list">
          {character.powers.map((power) => (
            <span key={power}>{power}</span>
          ))}
        </div>

        <a className="text-link" href="#universe">
          Explore character
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
}