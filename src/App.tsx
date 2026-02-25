import React, { useState } from 'react'
import { 
  Heart, 
  Leaf, 
  Wind, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Check,
  Menu,
  X,
  Star
} from 'lucide-react'

// Assets
import logoImg from './assets/images/logo.png'
import draHero from './assets/images/dra-hero.png'
import draAbout from './assets/images/dra-about.jpg'

const WhatsAppIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 448 512" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
)

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = "https://wa.me/5571982324761";

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="app">
      {/* Botão flutuante WhatsApp */}
      <a href={whatsappUrl} className="whatsapp-float" target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp">
        <WhatsAppIcon size={32} color="white" />
      </a>

      {/* Header */}
      <header>
        <a href="#home" className="logo">
          <img src={logoImg} alt="Dra Daniela" style={{height: '55px'}} />
          <div className="logo-text">
            <h1>Dra. Daniela Protásio</h1>
            <span>Medicina Integrativa</span>
          </div>
        </a>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <nav className={isOpen ? 'open' : ''}>
          <ul>
            <li><a href="#home" onClick={closeMenu}>Início</a></li>
            <li><a href="#especialidades" onClick={closeMenu}>Especialidades</a></li>
            <li><a href="#sobre" onClick={closeMenu}>Sobre</a></li>
            <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
          </ul>
        </nav>

        <a href={whatsappUrl} className="btn btn-primary nav-cta-desktop" style={{padding: '0.7rem 1.8rem'}}>
          Agendar Consulta
        </a>
      </header>

      {/* Hero */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-badge">Equilíbrio & Bem-Estar</span>
          <h2>Saúde integral para uma vida mais leve.</h2>
          <p>Tratamentos humanizados focados na causa, unindo Homeopatia e Fitoterapia com a precisão da Medicina Moderna.</p>
          <div className="hero-btns" style={{display: 'flex', gap: '1.5rem'}}>
            <a href={whatsappUrl} className="btn btn-primary">
              Agendar Consulta <WhatsAppIcon size={18} color="white" />
            </a>
            <a href="#especialidades" className="btn btn-outline">
              Ver Terapias
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={draHero} alt="Dra. Daniela Protásio" />
        </div>
      </section>

      {/* Specialties */}
      <section id="especialidades">
        <div className="section-title">
          <span>Como posso te ajudar</span>
          <h2>Especialidades & Terapias</h2>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon"><Heart size={32} /></div>
            <h3>Homeopatia</h3>
            <p>Estimula a autocura através de substâncias naturais diluídas, tratando o paciente em sua totalidade.</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><Leaf size={32} /></div>
            <h3>Fitoterapia</h3>
            <p>Uso medicinal de plantas com comprovação científica para prevenção e tratamento de patologias.</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><Wind size={32} /></div>
            <h3>Integrativa</h3>
            <p>Foco na relação médico-paciente e no uso de todas as abordagens terapêuticas adequadas para a saúde.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="sobre">
        <div className="about-image">
          <img src={draAbout} alt="Consultório Dra Daniela" />
        </div>
        <div className="about-content">
          <span className="hero-badge" style={{marginBottom: '1.5rem'}}>A Doutora</span>
          <h2>Cuidado atento e humanizado.</h2>
          <p style={{marginBottom: '2rem'}}>Sou médica apaixonada por enxergar além dos sintomas. Com especialização em Homeopatia e Fitoterapia, ajudo você a reencontrar seu equilíbrio natural.</p>
          
          <div style={{display: 'grid', gap: '1rem'}}>
            {[
              "Consultas Presenciais e Online",
              "Especialista RQE em Homeopatia",
              "Foco em Medicina Natural",
              "Atendimento Individualizado"
            ].map((text, i) => (
              <div key={i} style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <div style={{color: 'var(--primary)', background: 'var(--primary-soft)', borderRadius: '50%', padding: '4px'}}>
                  <Check size={16} strokeWidth={3} />
                </div>
                <span style={{fontWeight: 500}}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{textAlign: 'center', background: 'var(--bg-alt)'}}>
        <div style={{maxWidth: '900px', margin: '0 auto'}}>
          <div style={{display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '2rem', color: 'var(--accent)'}}>
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
          </div>
          <h3 className="serif" style={{fontSize: '2.5rem', fontStyle: 'italic', marginBottom: '3rem', opacity: 0.9}}>
            "A Dra. Daniela mudou minha percepção sobre saúde. Com o tratamento homeopático, recuperei minha disposição e tratei problemas que persistiam há anos."
          </h3>
          <p style={{fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem'}}>Mariana Lopes • Paciente</p>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{textAlign: 'center'}}>
        <div style={{maxWidth: '700px', margin: '0 auto'}}>
          <h2 style={{fontSize: '3.5rem', marginBottom: '2rem'}}>Transforme sua saúde.</h2>
          <p style={{marginBottom: '3rem', color: 'var(--text-light)', fontSize: '1.1rem'}}>Agende agora sua consulta e inicie sua jornada rumo ao bem-estar integral.</p>
          <a href={whatsappUrl} className="btn btn-primary" style={{padding: '1.3rem 3.5rem'}}>
            Agendar Consulta Agora <WhatsAppIcon size={20} color="white" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="logo-text" style={{marginBottom: '2rem'}}>
              <h1>Dra. Daniela Protásio</h1>
              <span style={{color: 'rgba(255,255,255,0.5)'}}>Medicina Integrativa</span>
            </div>
            <p>Promovendo saúde integral através de um atendimento humanizado e natural.</p>
            <div style={{display: 'flex', gap: '1.5rem', marginTop: '2.5rem'}}>
              <a href="https://www.instagram.com/dra.danielaprotasio/" target="_blank" rel="noreferrer" style={{color: 'white'}}><Instagram size={22} /></a>
              <a href="#" style={{color: 'white'}}><Facebook size={22} /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4>Contatos</h4>
            <div style={{display: 'grid', gap: '1rem'}}>
              <p style={{display: 'flex', alignItems: 'center', gap: '12px'}}><Phone size={18} /> (71) 98232-4761</p>
              <p style={{display: 'flex', alignItems: 'center', gap: '12px'}}><Mail size={18} /> contato@dradanielaprotasio.com.br</p>
            </div>
          </div>

          <div className="footer-col">
            <h4>Localização</h4>
            <p style={{display: 'flex', alignItems: 'flex-start', gap: '12px'}}><MapPin size={20} /> Atendimento Online - Todo Brasil<br/>Consultório Presencial - RS</p>
          </div>
        </div>
        
        <div style={{textAlign: 'center', marginTop: '6rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: '0.75rem'}}>
          &copy; {new Date().getFullYear()} Dra. Daniela Protásio. CRM-RS 52316 | RQE 41826.
        </div>
      </footer>
    </div>
  )
}

export default App
