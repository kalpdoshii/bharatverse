import React from 'react';
import { ArrowDown, ArrowUpRight, Instagram, Wind, Waves, Shield, Compass, Sparkles } from 'lucide-react';
import Header from './components/Header.jsx';
import Logo from './components/Logo.jsx';
import CharacterCard from './components/CharacterCard.jsx';
import { characters } from './data/characters.js';

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><i />{children}</div>;
}

export default function App() {
  return <>
    <Header />
    <main>
      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow--gold" /><div className="hero-glow hero-glow--blue" />
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-line" /> A NEW UNIVERSE IS AWAKENING <span className="eyebrow-line" /></div>
          <div className="hero-emblem" aria-hidden="true"><span>✦</span><i /></div>
          <h1>BHARAT<span>VERSE</span></h1>
          <p className="hero-tagline">Some lands hold more than history.<br /><em>They hold forces.</em></p>
          <p className="hero-description">An original Indian superhero universe where ancient elemental powers, hidden truths, and extraordinary destinies collide.</p>
          <div className="hero-actions"><a className="button button--gold" href="#characters">Discover the heroes <ArrowUpRight size={17} /></a><a className="button button--ghost" href="#universe">Explore the universe</a></div>
          <div className="hero-footnote"><span>INDIA · EARTH · UNKNOWN</span><span>UNIVERSE FILE / 001</span></div>
        </div>
        <a className="scroll-cue" href="#universe"><ArrowDown size={16} /> SCROLL TO ENTER</a>
        <div className="hero-side-note">THE ELEMENTS ARE NOT WHAT THEY SEEM</div>
      </section>

      <section className="intro section-wrap" id="universe">
        <SectionLabel number="01">THE UNIVERSE</SectionLabel>
        <div className="intro-grid"><h2>A world beneath<br />the world <span>we know.</span></h2><div className="intro-copy"><p>Across India's crowded cities, ancient places, and restless coastlines, forces older than recorded history are beginning to stir.</p><p>Some will protect the world. Some will reshape it. Others have no intention of saving anyone but themselves.</p><span className="gold-rule" /><p className="muted-copy">This is the beginning of Bharatverse.</p></div></div>
        <div className="stat-strip"><div><strong>05</strong><span>ELEMENTAL FORCES</span></div><div><strong>02</strong><span>KNOWN AWAKENED</span></div><div><strong>∞</strong><span>SECRETS REMAIN</span></div></div>
      </section>

      <section className="characters-section section-wrap" id="characters">
        <div className="section-heading"><div><SectionLabel number="02">THE AWAKENED</SectionLabel><h2>Meet the <span>characters.</span></h2></div><p>Two lives changed by elemental forces.<br />One universe that will never be the same.</p></div>
        <div className="character-grid">{characters.map(character => <CharacterCard key={character.id} character={character} />)}</div>
      </section>

      <section className="mythology-section" id="mythology">
        <div className="mythology-backdrop" />
        <div className="section-wrap mythology-content"><SectionLabel number="03">THE ELEMENTAL MYSTERY</SectionLabel><div className="mythology-heading"><h2>Five forces.<br /><span>One ancient truth.</span></h2><p>Something has been dormant beneath the land for ages. Now, the first signs of its return are impossible to ignore.</p></div>
          <div className="elements-grid">
            <div className="element-tile element-tile--wind"><Wind /><strong>VAYU</strong><span>AIR · AWAKENED</span></div>
            <div className="element-tile element-tile--water"><Waves /><strong>JAL</strong><span>WATER · AWAKENED</span></div>
            <div className="element-tile"><Sparkles /><strong>AGNI</strong><span>FIRE · UNKNOWN</span></div>
            <div className="element-tile"><Shield /><strong>PRITHVI</strong><span>EARTH · UNKNOWN</span></div>
            <div className="element-tile"><Compass /><strong>AKASH</strong><span>ETHER · UNKNOWN</span></div>
          </div>
          <p className="mythology-note">The remaining forces are yet to reveal themselves.</p>
        </div>
      </section>

      <section className="gallery-section section-wrap" id="gallery">
        <div className="section-heading"><div><SectionLabel number="04">THE ARCHIVE</SectionLabel><h2>First looks.<br /><span>Untold stories.</span></h2></div><p>Every symbol has a meaning.<br />Every image hides a clue.</p></div>
        <div className="gallery-grid">
          <a href="#characters" className="gallery-tile gallery-tile--one"><span className="gallery-number">ARCHIVE 001</span><span className="gallery-title">THE WIND<br />REMEMBERS</span><span className="gallery-bottom">VAYU / CHARACTER FILE <ArrowUpRight /></span></a>
          <a href="#characters" className="gallery-tile gallery-tile--two"><span className="gallery-number">ARCHIVE 002</span><span className="gallery-title">THE OCEAN<br />KEEPS SECRETS</span><span className="gallery-bottom">JAL / CHARACTER FILE <ArrowUpRight /></span></a>
          <a href="#mythology" className="gallery-tile gallery-tile--three"><span className="gallery-number">ARCHIVE 003</span><span className="gallery-title">FIVE FORCES.<br />ONE DESTINY.</span><span className="gallery-bottom">ELEMENTAL FILE <ArrowUpRight /></span></a>
        </div>
      </section>

      <section className="follow-section"><div className="follow-sigil">✦</div><SectionLabel number="05">THE STORY IS JUST BEGINNING</SectionLabel><h2>Stay close.<br /><span>The universe is unfolding.</span></h2><p>Follow the journey as new characters, stories, and secrets emerge from Bharatverse.</p><a className="button button--gold" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><Instagram size={17} /> Follow on Instagram <ArrowUpRight size={16} /></a><small>Replace the Instagram link in the source with your account URL.</small></section>
    </main>
    <footer className="site-footer"><Logo compact /><p>An original superhero universe. Made with imagination in India.</p><div className="footer-bottom"><span>© {new Date().getFullYear()} BHARATVERSE. ORIGINAL CREATIVE PROJECT.</span><a href="#home">BACK TO TOP ↑</a></div></footer>
  </>;
}
