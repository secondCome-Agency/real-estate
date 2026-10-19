import { useState } from 'react';
import Reveal from './components/Reveal.jsx';

const properties = [
  {
    id: '01', name: 'The Sol House', place: 'Palm Cove, California', price: '$2,450,000', type: 'FOR SALE', beds: '4 beds', baths: '3 baths', area: '2,840 sq ft',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90',
    detail: 'A quiet modern residence shaped around light, natural materials, and the landscape beyond its walls.'
  },
  {
    id: '02', name: 'Casa Verde', place: 'Ojai, California', price: '$1,890,000', type: 'FOR SALE', beds: '3 beds', baths: '2 baths', area: '2,120 sq ft',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=90',
    detail: 'A warm, understated retreat with open living spaces, considered finishes, and a private garden.'
  },
  {
    id: '03', name: 'Northline Residence', place: 'Boulder, Colorado', price: '$3,120,000', type: 'NEW LISTING', beds: '5 beds', baths: '4 baths', area: '3,460 sq ft',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=90',
    detail: 'A sculptural mountain home where generous glazing frames changing skies and distant peaks.'
  }
];

const projects = [
  { number: '01', name: 'PA9 / Courtyard House', category: 'RESIDENTIAL', location: 'Los Angeles, CA', year: '2025' },
  { number: '02', name: 'K Residence', category: 'ARCHITECTURE', location: 'Joshua Tree, CA', year: '2025' },
  { number: '03', name: '512 / Garden Apartments', category: 'MULTI-FAMILY', location: 'Austin, TX', year: '2024' },
  { number: '04', name: 'Vivo House', category: 'RESIDENTIAL', location: 'Portland, OR', year: '2024' },
];

function Arrow({ diagonal = false }) {
  return <span className="arrow-mark" aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#top" aria-label="RainBasera home"><span className="brand-symbol">r.</span><span className="brand-word">RAINBASERA<span className="brand-dot">.</span><small>PROPERTY STUDIO</small></span></a>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header" id="top">
      <Brand light />
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span /><span /></button>
      <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
        <a href="#homes" onClick={() => setMenuOpen(false)}>Homes</a>
        <a href="#studio" onClick={() => setMenuOpen(false)}>Our approach</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" className="nav-contact" onClick={() => setMenuOpen(false)}>Let's talk <Arrow diagonal /></a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-image" />
      <div className="hero-shade" />
      <div className="hero-topline"><span>INDEPENDENT PROPERTY STUDIO</span><span>CALIFORNIA · EVERYWHERE</span></div>
      <div className="hero-copy">
        <Reveal><p className="eyebrow eyebrow-light">FIND YOUR KIND OF PLACE</p></Reveal>
        <Reveal delay={100}><h1>Space to<br /><em>be yourself.</em></h1></Reveal>
        <Reveal delay={200}><p className="hero-description">Thoughtful homes. Distinctive places.<br />A better way to find where you belong.</p></Reveal>
        <Reveal delay={300}><a className="pill-button pill-light" href="#homes">Explore homes <Arrow /></a></Reveal>
      </div>
      <div className="hero-bottom"><span>01 / 03</span><span className="hero-scroll">SCROLL TO DISCOVER <i /></span><span>DESIGNED FOR LIVING</span></div>
      <div className="hero-image-caption"><span>THE SOL HOUSE</span><span>34°02' N / 118°28' W</span></div>
    </section>
  );
}

function Intro() {
  return (
    <section className="intro-section" id="studio">
      <div className="intro-aside"><span className="eyebrow">A MORE HUMAN APPROACH</span><span className="vertical-note">PROPERTY, WITH PERSPECTIVE — EST. 2018</span></div>
      <div className="intro-main">
        <Reveal><h2>Homes.<br /><span>People.</span><br />Possibility.</h2></Reveal>
        <div className="intro-right">
          <Reveal delay={100}><p className="intro-lead">A good home is more than an address. It’s the feeling of arriving somewhere that just makes sense.</p></Reveal>
          <Reveal delay={180}><p className="body-copy">We bring together local insight, considered design, and a refreshingly personal approach to property. From first viewings to the final key, we make room for the next chapter.</p></Reveal>
          <Reveal delay={260}><a href="#contact" className="text-link">Get to know RainBasera <Arrow diagonal /></a></Reveal>
        </div>
      </div>
      <div className="intro-note"><span>GOOD SPACES.</span><span>BETTER STORIES.</span><span>ROOM TO GROW.</span></div>
    </section>
  );
}

function Homes({ onSelect }) {
  return (
    <section className="homes-section" id="homes">
      <div className="section-heading">
        <div><p className="eyebrow">A FEW PLACES TO BEGIN</p><h2>Homes worth<br /><em>coming home to.</em></h2></div>
        <div className="heading-right"><p>Distinctive places, thoughtfully found.<br />Take a look around.</p><a className="text-link" href="#contact">View all homes <Arrow diagonal /></a></div>
      </div>
      <div className="homes-grid">
        {properties.map((property, index) => (
          <Reveal className={`property-card property-card-${index + 1}`} delay={index * 100} key={property.id}>
            <button className="property-image-button" onClick={() => onSelect(property)} aria-label={`View ${property.name}`}>
              <img src={property.image} alt={`${property.name} exterior`} loading="lazy" />
              <span className="property-tag">{property.type}</span><span className="property-open"><Arrow diagonal /></span>
            </button>
            <div className="property-meta"><span>{property.place}</span><span>{property.id} / 03</span></div>
            <div className="property-title-row"><h3>{property.name}</h3><span>{property.price}</span></div>
            <div className="property-features"><span>{property.beds}</span><i /><span>{property.baths}</span><i /><span>{property.area}</span></div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section className="statement-section">
      <div className="statement-image" />
      <div className="statement-overlay" />
      <Reveal className="statement-content"><p className="eyebrow eyebrow-light">NOT JUST FOUR WALLS</p><h2>Make room<br />for <em>what matters.</em></h2><p>From the first sketch to the first night in, the right space changes how life feels.</p><a href="#projects" className="pill-button pill-light">See what we do <Arrow /></a></Reveal>
      <div className="statement-index">FORM FOLLOWS FEELING <span>— 02</span></div>
    </section>
  );
}

function Projects() {
  const [active, setActive] = useState(null);
  return (
    <section className="projects-section" id="projects">
      <div className="projects-top"><div><p className="eyebrow eyebrow-light">SELECTED WORK / 2024—25</p><h2>Made for<br /><em>real life.</em></h2></div><p className="projects-intro">A small collection of homes and places shaped by their surroundings, their people, and the everyday moments that happen inside them.</p></div>
      <div className="project-list">
        {projects.map((project) => (
          <button key={project.number} className={`project-row ${active === project.number ? 'project-active' : ''}`} onMouseEnter={() => setActive(project.number)} onFocus={() => setActive(project.number)} onClick={() => setActive(active === project.number ? null : project.number)}>
            <span className="project-number">{project.number}</span><span className="project-name">{project.name}</span><span className="project-category">{project.category}</span><span className="project-location">{project.location}</span><span className="project-year">{project.year}</span><span className="project-arrow"><Arrow diagonal /></span>
          </button>
        ))}
      </div>
      <div className="projects-bottom"><span>LESS, BUT BETTER.</span><span>PLACES WITH PURPOSE.</span><a href="#contact">Have a project in mind? <Arrow diagonal /></a></div>
    </section>
  );
}

function FeatureCards() {
  const cards = [
    { title: 'Find a home', text: 'A place that feels like you.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85', label: '01 / FIND' },
    { title: 'Make it yours', text: 'Ideas for living beautifully.', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85', label: '02 / IMAGINE' },
    { title: 'Move forward', text: 'Good guidance, all the way.', image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=85', label: '03 / BEGIN' },
  ];
  return <section className="feature-section"><div className="feature-heading"><p className="eyebrow">MORE THAN A LISTING</p><h2>Homes. Spaces.<br /><em>Living.</em></h2><p>Whatever your next chapter looks like, let’s find the place for it.</p></div><div className="feature-stack">{cards.map((card, i) => <Reveal key={card.title} delay={i * 110} className={`feature-card feature-card-${i + 1}`}><img src={card.image} alt="Modern architectural interior" loading="lazy" /><div className="feature-card-shade" /><span className="feature-label">{card.label}</span><div className="feature-card-copy"><h3>{card.title}</h3><p>{card.text}</p></div><span className="feature-card-arrow"><Arrow diagonal /></span></Reveal>)}</div></section>;
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', interest: 'Finding a home', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please complete your name, email, and message.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
  };
  return (
    <section className="contact-section" id="contact">
      <div className="contact-image" /><div className="contact-shade" />
      <div className="contact-copy"><p className="eyebrow eyebrow-light">YOUR NEXT CHAPTER STARTS HERE</p><h2>Let's find<br />your <em>somewhere.</em></h2><p>Tell us what you’re looking for. We’ll take it from there.</p><div className="contact-small-note"><span>PERSONAL ADVICE.</span><span>NO PRESSURE.</span><span>JUST GOOD PEOPLE.</span></div></div>
      <div className="contact-form-wrap">
        {submitted ? <div className="form-success"><span className="success-mark">✓</span><p className="eyebrow">MESSAGE READY</p><h3>Thanks, {form.name.split(' ')[0]}.</h3><p>Your form is validated. Connect this form to your email service or backend to deliver enquiries.</p><button className="form-reset" onClick={() => setSubmitted(false)}>Send another message</button></div> : <form className="contact-form" onSubmit={submit}>
          <div className="form-top"><span>LET'S TALK</span><span>01 — 04</span></div><label>Your name<input name="name" value={form.name} onChange={update} placeholder="e.g. Alex Morgan" autoComplete="name" /></label><label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="alex@example.com" autoComplete="email" /></label><label>I'm interested in<select name="interest" value={form.interest} onChange={update}><option>Finding a home</option><option>Selling a property</option><option>Architecture & design</option><option>Something else</option></select></label><label>Tell us a little more<textarea name="message" value={form.message} onChange={update} placeholder="A little about what you have in mind..." rows="3" /></label>{error && <p className="form-error" role="alert">{error}</p>}<button className="form-submit" type="submit">Send an enquiry <Arrow /></button><p className="form-privacy">Your details stay private. We’ll only use them to get back to you.</p>
        </form>}
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="site-footer"><div className="footer-main"><div className="footer-brand-block"><Brand light /><p>Good spaces make room<br />for good things.</p></div><div className="footer-column"><span className="footer-label">EXPLORE</span><a href="#homes">Available homes</a><a href="#studio">Our approach</a><a href="#projects">Selected work</a></div><div className="footer-column"><span className="footer-label">SAY HELLO</span><a href="#contact">Start a conversation</a><a href="mailto:hello@rainbasera.example">hello@rainbasera.example</a><span>Los Angeles · California</span></div><div className="footer-stamp">R<span>.</span><small>FIND YOUR<br />RAINBASERA</small></div></div><div className="footer-bottom"><span>© 2026 RAINBASERA PROPERTY STUDIO</span><span>BUILT AROUND PEOPLE.</span><div><a href="#contact">PRIVACY</a><a href="#contact">TERMS</a><a href="#top">BACK TO TOP ↑</a></div></div></footer>;
}

function PropertyModal({ property, onClose }) {
  if (!property) return null;
  return <div className="modal-backdrop" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}><section className="property-modal" role="dialog" aria-modal="true" aria-label={`${property.name} details`}><button className="modal-close" onClick={onClose} aria-label="Close details">×</button><img src={property.image} alt={property.name} /><div className="modal-details"><p className="eyebrow">{property.type} · {property.place}</p><h2>{property.name}</h2><p>{property.detail}</p><div className="modal-facts"><span>{property.beds}</span><span>{property.baths}</span><span>{property.area}</span></div><strong>{property.price}</strong><a className="pill-button pill-dark" href="#contact" onClick={onClose}>Ask about this home <Arrow /></a></div></section></div>;
}

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  return <><Header /><main><Hero /><Intro /><Homes onSelect={setSelectedProperty} /><Statement /><Projects /><FeatureCards /><Contact /></main><Footer /><PropertyModal property={selectedProperty} onClose={() => setSelectedProperty(null)} /></>;
}
