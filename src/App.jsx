import React, { useMemo, useState } from 'react';
import { ArrowDown, ArrowUpRight, Instagram, Wind, Waves, Shield, Compass, Sparkles, Flame, Mountain, Orbit, X, BookOpen, ScrollText, Image as ImageIcon, ChevronLeft, ChevronRight, Clock3 } from 'lucide-react';
import Header from './components/Header.jsx';
import Logo from './components/Logo.jsx';
import CharacterCard from './components/CharacterCard.jsx';
import { characters } from './data/characters.js';
import { acharyaStory } from './data/acharyaStory.js';
import { comicSeries } from './data/comics.js';

function SectionLabel({ number, children }) { return <div className="section-label"><span>{number}</span><i />{children}</div>; }
const forceIcons = { VAYU: Wind, JAL: Waves, AGNI: Flame, PRITHVI: Mountain, AKASH: Orbit };

function CharacterModal({ character, onClose }) {
  if (!character) return null;
  const Icon = forceIcons[character.name] || ScrollText;
  return <div className="modal-backdrop" role="presentation" onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <section className={`profile-modal profile-modal--${character.theme}`} role="dialog" aria-modal="true" aria-labelledby="profile-title">
      <button className="modal-close" onClick={onClose} aria-label="Close profile"><X /></button>
      <div className="profile-modal__visual">{character.image ? <img src={character.image} alt={`${character.name} poster`} /> : <div className="profile-modal__placeholder"><Icon size={92} /><span>{character.element}</span><small>OFFICIAL ARTWORK PENDING</small></div>}<div className="profile-modal__caption"><span>FILE {character.number} · {character.status}</span><h2 id="profile-title">{character.name}</h2><p>{character.realName}</p></div></div>
      <div className="profile-modal__body"><span className="profile-kicker">{character.role} · {character.city}</span><p>{character.description}</p><h3>ABILITIES</h3><div className="power-list">{character.powers.map(p => <span key={p}>{p}</span>)}</div><h3>LIMITATIONS</h3><p>{character.weakness}</p><div className="profile-story"><BookOpen size={17} /><span>ORIGIN FILE</span><strong>{character.story}</strong></div></div>
    </section>
  </div>;
}

function AcharyaReader() {
  const [active, setActive] = useState(0);
  const chapter = acharyaStory.chapters[active];
  return <div className="story-reader">
    <aside className="story-index"><div className="story-index__heading"><span>THE ARCHIVE</span><strong>08 CHAPTERS</strong></div>{acharyaStory.chapters.map((item, i) => <button key={item.number} className={i === active ? 'story-index__item is-active' : 'story-index__item'} onClick={() => setActive(i)}><span>{item.number}</span>{item.title}<ArrowUpRight size={14} /></button>)}</aside>
    <article className="story-page"><div className="story-page__meta"><span>ACHARYA · ORIGIN RECORD</span><span>{chapter.year}</span></div><div className="story-page__number">{chapter.number}</div><h3>{chapter.title}</h3><div className="story-page__rule" /><p>{chapter.summary}</p><div className="story-page__footer"><span>THE MAN WHO LISTENED</span><div><button disabled={active === 0} onClick={() => setActive(v => v - 1)} aria-label="Previous chapter"><ChevronLeft /></button><span>{String(active + 1).padStart(2, '0')} / 08</span><button disabled={active === 7} onClick={() => setActive(v => v + 1)} aria-label="Next chapter"><ChevronRight /></button></div></div></article>
  </div>;
}

function ComicsArchive() {
  const [selected, setSelected] = useState("acharya");
  const [activeChapter, setActiveChapter] = useState("");

  const series =
    comicSeries.find((s) => s.id === selected) || comicSeries[0];

  const chapter =
    series?.chapters?.find((c) => c.id === activeChapter) ||
    series?.chapters?.[0];

  const pdfUrl = chapter?.pdf;

  return (
    <div className="comics-shell">
      {/* Series selection */}
      <div className="comics-tabs" role="tablist" aria-label="Comic series">
        {comicSeries.map((s) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={s.id === selected}
            className={
              s.id === selected
                ? "comics-tab is-active"
                : "comics-tab"
            }
            onClick={() => {
              setSelected(s.id);
              setActiveChapter("");
            }}
          >
            {s.title}
          </button>
        ))}
      </div>

      {/* Selected comic information */}
      {series && (
        <>
          <div className="comics-feature">
            <div>
              <span className="archive-kicker">
                BHARATVERSE COMIC ARCHIVE
              </span>

              <h3>{series.title}</h3>
              <p>{series.description}</p>

              <span className="comics-character">
                CHARACTER FILE · {series.character || series.title}
              </span>
            </div>

            {series.cover ? (
              <img
                className="comics-cover"
                src={series.cover}
                alt={`${series.title} comic cover`}
              />
            ) : (
              <div className="comics-feature__seal">
                <BookOpen size={35} />
                <span>
                  ORIGIN
                  <br />
                  ARCHIVE
                </span>
              </div>
            )}
          </div>

          {/* Chapter selection */}
          {series.chapters?.length > 0 ? (
            <>
              <div className="comic-chapter-grid">
                {series.chapters.map((c, index) => (
                  <button
                    key={c.id || c.pdf || index}
                    className={
                      c.id === chapter?.id
                        ? "comic-chapter is-active"
                        : "comic-chapter"
                    }
                    onClick={() => setActiveChapter(c.id || "")}
                  >
                    <span>CHAPTER {c.number || String(index + 1).padStart(2, "0")}</span>
                    <strong>{c.title}</strong>
                    <small>READ COMIC ↗</small>
                  </button>
                ))}
              </div>

              {/* PDF reader */}
              {pdfUrl ? (
                <div className="comic-pdf-section">
                  <div className="comic-pages__heading">
                    <span>BHARATVERSE · DIGITAL COMICS</span>
                    <h4>{chapter.title}</h4>
                  </div>

                  <div className="comic-pdf-toolbar">
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="comic-pdf-button"
                    >
                      <BookOpen size={17} />
                      Open in New Tab
                    </a>

                    <a
                      href={pdfUrl}
                      download
                      className="comic-pdf-button comic-pdf-button--gold"
                    >
                      <ArrowDown size={17} />
                      Download Comic PDF
                    </a>
                  </div>

                  <div className="comic-pdf-viewer">
                    <iframe
                      key={pdfUrl}
                      src={`${pdfUrl}#view=FitH`}
                      title={`${series.title}: ${chapter.title}`}
                      width="100%"
                      height="750"
                    />
                  </div>

                  <p className="comic-pdf-note">
                    For the best reading experience, open the comic in a new
                    tab or use your browser's PDF controls to zoom in.
                  </p>
                </div>
              ) : (
                <div className="comic-empty">
                  <BookOpen size={34} />
                  <strong>Comic PDF coming soon</strong>
                  <p>
                    Add the PDF for this chapter to the public/comics folder
                    and configure its path in src/data/comics.js.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="comic-empty">
              <BookOpen size={34} />
              <strong>No chapters available yet</strong>
              <p>Chapters will appear here when they are added to the archive.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function Timeline() {
  const events = [
    ['1974', 'NINE MINUTES', 'A white-gold ring burns across the Pokhran sand. The Raksha Division is founded.'],
    ['2001', 'THE RANN', 'A seismic calibration strikes the point beneath Kutch. The Bhuj earthquake follows; a child survives Lane Fourteen.'],
    ['2011', 'THE EMPTY BOX', 'Anand Kulkarni stages his death and leaves the Division.'],
    ['2023', 'MERU', 'Meridian secures the Akash point in the Himalayas.'],
    ['THE AHERI INCIDENT', 'THE FIRST AWAKENING', 'The experiment runs at 140%. Arjun becomes Vayu; Priya becomes Akash.'],
    ['DECEMBER 2027', 'THE ALIGNMENT', 'All five points are predicted to surge together. Meridian intends to be ready.'],
  ];
  return <div className="timeline-list">{events.map(([date, title, desc], i) => <article className="timeline-event" key={title}><span className="timeline-dot" /><span className="timeline-date">{date}</span><div><h3>{title}</h3><p>{desc}</p></div><span className="timeline-index">{String(i + 1).padStart(2, '0')}</span></article>)}</div>;
}

export default function App() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const awakened = useMemo(() => characters.filter(c => c.status !== 'UNKNOWN').length, []);
  return <>
    <Header />
    <main>
      <section className="hero" id="home"><div className="hero-grid" /><div className="hero-glow hero-glow--gold" /><div className="hero-glow hero-glow--blue" /><div className="hero-content">
        <div className="eyebrow"><span className="eyebrow-line" /> A NEW UNIVERSE IS AWAKENING <span className="eyebrow-line" /></div><div className="hero-emblem" aria-hidden="true"><span>✦</span><i /></div><h1>BHARAT<span>VERSE</span></h1><p className="hero-tagline">Some lands hold more than history.<br /><em>They hold forces.</em></p><p className="hero-description">An original Indian superhero universe where ancient elemental powers, hidden truths, and extraordinary destinies collide.</p><div className="hero-actions"><a className="button button--gold" href="#characters">Discover the heroes <ArrowUpRight size={17} /></a><a className="button button--ghost" href="#stories">Read the archives</a></div><div className="hero-footnote"><span>INDIA · EARTH · UNKNOWN</span><span>UNIVERSE FILE / 001</span></div></div><a className="scroll-cue" href="#universe"><ArrowDown size={16} /> SCROLL TO ENTER</a><div className="hero-side-note">THE ELEMENTS ARE NOT WHAT THEY SEEM</div></section>

      <section className="intro section-wrap" id="universe"><SectionLabel number="01">THE UNIVERSE</SectionLabel><div className="intro-grid"><h2>A world beneath<br />the world <span>we know.</span></h2><div className="intro-copy"><p>Across India's crowded cities, ancient places, and restless coastlines, forces older than recorded history are beginning to stir.</p><p>Five points. Five vessels. One lattice whose purpose remains unknown.</p><span className="gold-rule" /><p className="muted-copy">This is the beginning of Bharatverse.</p></div></div><div className="stat-strip"><div><strong>05</strong><span>ELEMENTAL FORCES</span></div><div><strong>{String(awakened).padStart(2, '0')}</strong><span>KNOWN ACTIVE FILES</span></div><div><strong>∞</strong><span>SECRETS REMAIN</span></div></div></section>

      <section className="characters-section section-wrap" id="characters"><div className="section-heading"><div><SectionLabel number="02">THE AWAKENED</SectionLabel><h2>Meet the <span>characters.</span></h2></div><p>Six lives. Five elemental forces.<br />One story still unfolding.</p></div><div className="character-grid">{characters.map(character => <CharacterCard key={character.id} character={character} onSelect={setSelectedCharacter} />)}</div></section>

      <section className="mythology-section" id="mythology"><div className="mythology-backdrop" /><div className="section-wrap mythology-content"><SectionLabel number="03">THE ELEMENTAL MYSTERY</SectionLabel><div className="mythology-heading"><h2>Five forces.<br /><span>One ancient truth.</span></h2><p>The lattice connects five points across India. Akash carries the others. The December 2027 Alignment may reveal why they were connected at all.</p></div><div className="elements-grid"><div className="element-tile element-tile--wind"><Wind /><strong>VAYU</strong><span>AIR · AWAKENED</span></div><div className="element-tile element-tile--water"><Waves /><strong>JAL</strong><span>WATER · AWAKENED</span></div><div className="element-tile element-tile--fire"><Flame /><strong>AGNI</strong><span>FIRE · ACTIVE</span></div><div className="element-tile element-tile--earth"><Mountain /><strong>PRITHVI</strong><span>EARTH · AWAKENED</span></div><div className="element-tile element-tile--sky"><Compass /><strong>AKASH</strong><span>CONDUIT · ACTIVE</span></div></div><p className="mythology-note">The forces are not weapons. The question is who gets to decide what they become.</p></div></section>

      <section className="stories-section section-wrap" id="stories"><div className="section-heading"><div><SectionLabel number="04">THE STORY ARCHIVE</SectionLabel><h2>Listen to the <span>beginning.</span></h2></div><p>Eight chapters. One life shaped by<br />warnings, silence and consequence.</p></div><div className="story-intro"><div className="story-intro__stamp"><ScrollText size={36} /><span>ORIGIN<br />RECORD 006</span></div><div><span className="archive-kicker">ANAND KULKARNI · FORMER RAKSHA DIVISION DIRECTOR</span><h3>ACHARYA — {acharyaStory.title}</h3><p>{acharyaStory.intro}</p></div></div><AcharyaReader /></section>

      <section className="comics-section" id="comics"><div className="section-wrap"><div className="section-heading"><div><SectionLabel number="05">THE COMIC ARCHIVE</SectionLabel><h2>Stories in <span>panels.</span></h2></div><p>Explore the illustrated side of<br />the Bharatverse.</p></div><ComicsArchive /></div></section>

      <section className="timeline-section section-wrap" id="timeline"><div className="section-heading"><div><SectionLabel number="06">THE CHRONICLES</SectionLabel><h2>What came <span>before.</span></h2></div><p>Events that connect the five points<br />and the people caught between them.</p></div><Timeline /></section>

      <section className="gallery-section section-wrap" id="gallery"><div className="section-heading"><div><SectionLabel number="07">THE ARCHIVE</SectionLabel><h2>First looks.<br /><span>Untold stories.</span></h2></div><p>Every symbol has a meaning.<br />Every image hides a clue.</p></div><div className="gallery-grid"><a href="#characters" className="gallery-tile gallery-tile--one"><span className="gallery-number">ARCHIVE 001</span><span className="gallery-title">THE WIND<br />REMEMBERS</span><span className="gallery-bottom">VAYU / CHARACTER FILE <ArrowUpRight /></span></a><a href="#characters" className="gallery-tile gallery-tile--two"><span className="gallery-number">ARCHIVE 002</span><span className="gallery-title">THE OCEAN<br />KEEPS SECRETS</span><span className="gallery-bottom">JAL / CHARACTER FILE <ArrowUpRight /></span></a><a href="#comics" className="gallery-tile gallery-tile--three"><span className="gallery-number">ARCHIVE 003</span><span className="gallery-title">THE MAN WHO<br />LISTENED</span><span className="gallery-bottom">ACHARYA / ORIGIN COMICS <ArrowUpRight /></span></a></div></section>

      <section className="follow-section"><div className="follow-sigil">✦</div><SectionLabel number="08">THE STORY IS JUST BEGINNING</SectionLabel><h2>Stay close.<br /><span>The universe is unfolding.</span></h2><p>Follow the journey as new characters, stories, and secrets emerge from Bharatverse.</p><a className="button button--gold" href="https://www.instagram.com/thebharatverse.official" target="_blank" rel="noopener noreferrer"><Instagram size={17} /> Follow The Bharatverse <ArrowUpRight size={16} /></a></section>
    </main>
    <footer className="site-footer"><Logo compact /><p>An original superhero universe. Made with imagination in India.</p><div className="footer-bottom"><span>© {new Date().getFullYear()} BHARATVERSE. ORIGINAL CREATIVE PROJECT.</span><a href="#home">BACK TO TOP ↑</a></div></footer>
    <CharacterModal character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
  </>;
}

