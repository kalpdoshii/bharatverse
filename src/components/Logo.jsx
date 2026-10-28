import React from 'react';

export default function Logo({ compact = false }) {
  return <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#home" aria-label="Bharatverse home">
    <span className="brand-mark" aria-hidden="true"><span>✦</span></span>
    <span className="brand-word">BHARAT<span>VERSE</span><small>AN ORIGINAL SUPERHERO UNIVERSE</small></span>
  </a>;
}
