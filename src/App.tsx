import React, { useState } from 'react'
import { 
  Heart, 
  Leaf, 
  Wind, 
  ArrowRight, 
  MessageCircle, 
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

// Import de imagens locais
import logoImg from './assets/images/logo.png'
import draHero from './assets/images/dra-hero.png'
import draAbout from './assets/images/dra-about.jpg'

const WhatsAppIcon = ({ size = 24, color = "currentColor" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 448 512" 
    fill={color} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
)

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/5571982324761"; 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="app">
      {/* WhatsApp Flutuante */}
      <a 
        href={whatsappUrl} 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <WhatsAppIcon size={32} color="white" />
      </a>

      {/* Header */}
      <header>
        <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={logoImg} alt="Logo Dra. Daniela Protásio" style={{ height: '50px', width: 'auto' }} />
          <div className="logo-text">
            Dra. Daniela Protásio
            <span>Medicina Integrativa</span>
          </div>
        </a>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={isMenuOpen ? 'open' : ''}>
          <ul>
            <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Início</a></li>
            <li><a href="#especialidades" onClick={() => setIsMenuOpen(false)}>Especialidades</a></li>
            <li><a href="#sobre" onClick={() => setIsMenuOpen(false)}>Sobre</a></li>
            <li><a href="#contato" onClick={() => setIsMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>

        <a href={whatsappUrl} className="btn btn-primary nav-cta" style={{padding: '0.6rem 1.5rem', fontSize: '0.75rem'}}>
          Agendar Consulta
        </a>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <span style={{letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, display: 'block', marginBottom: '1rem'}}>Equilíbrio & Vitalidade</span>
          <h1>Saúde integral para uma vida mais leve.</h1>
          <p>
            Atendimento humanizado focado na causa, unindo a sabedoria da Homeopatia e da Fitoterapia com a precisão da Medicina Moderna.
          </p>
          <div className="hero-btns" style={{display: 'flex', gap: '1.5rem'}}>
            <a href={whatsappUrl} className="btn btn-primary">
              Iniciar Tratamento <WhatsAppIcon size={18} color="white" />
            </a>
            <a href="#especialidades" className="btn btn-outline">
              Ver Especialidades
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src={draHero} 
            alt="Dra. Daniela Protásio" 
            className="hero-img-main"
          />
        </div>
      </section>

      {/* Specialties Section */}
      <section id="especialidades" style={{backgroundColor: '#ffffff'}}>
        <div className="section-title">
          <span>Como posso te ajudar</span>
          <h2>Especialidades & Terapias</h2>
          <p>Abordagens naturais e eficazes para tratar o paciente em todas as suas dimensões.</p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon"><Heart size={32} strokeWidth={1.5} /></div>
            <h3>Homeopatia</h3>
            <p>Tratamento que estimula a cura natural do organismo através de substâncias diluídas, tratando a pessoa como um todo.</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><Leaf size={32} strokeWidth={1.5} /></div>
            <h3>Fitoterapia</h3>
            <p>Utilização do poder das plantas medicinais para prevenção e tratamento de diversas patologias de forma segura.</p>
          </div>
          <div className="service-card">
            <div className="service-icon"><Wind size={32} strokeWidth={1.5} /></div>
            <h3>Medicina Integrativa</h3>
            <p>Foco na relação médico-paciente e no uso de todas as abordagens terapêuticas adequadas para a saúde e cura.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="sobre">
        <div className="hero-image">
           <img 
              src={draAbout} 
              alt="Consultório Dra. Daniela" 
              style={{ width: '100%', maxWidth: '450px', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} 
            />
        </div>
        <div className="about-text">
          <span style={{letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600, display: 'block', marginBottom: '1.5rem'}}>Sobre a Doutora</span>
          <h2>Cuidar com olhar atento e humanizado.</h2>
          <p>
            Sou a Dra. Daniela Protásio, médica apaixonada pela medicina que enxerga além dos sintomas. Com especialização em Homeopatia e Fitoterapia, meu objetivo é ajudar você a reencontrar seu equilíbrio natural.
          </p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem'}}>
             <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
               <Check size={20} color="var(--primary)" /> <span>Consultas Presenciais e Online</span>
             </div>
             <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
               <Check size={20} color="var(--primary)" /> <span>Especialista RQE em Homeopatia</span>
             </div>
             <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
               <Check size={20} color="var(--primary)" /> <span>Foco em Medicina Natural</span>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div style={{marginBottom: '4rem'}}>
          <span style={{letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.8rem', color: 'var(--primary-light)', fontWeight: 600}}>Depoimentos</span>
        </div>
        <div className="testimonial-text">
          "A Dra. Daniela mudou minha percepção sobre saúde. Com o tratamento homeopático, recuperei minha disposição e tratei problemas que persistiam há anos."
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
          <div style={{width: '45px', height: '45px', background: 'var(--primary-light)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Star size={20} fill="white" color="white" />
          </div>
          <div style={{textAlign: 'left'}}>
            <strong style={{display: 'block'}}>Mariana Lopes</strong>
            <span style={{fontSize: '0.8rem', opacity: 0.8}}>Paciente há 2 anos</span>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <section style={{textAlign: 'center', backgroundColor: '#FDFDFB', padding: '6rem 5%'}}>
        <div style={{maxWidth: '700px', margin: '0 auto'}}>
          <h2 style={{fontSize: '2.5rem', marginBottom: '1.5rem'}}>Pronta para transformar sua saúde?</h2>
          <p style={{marginBottom: '3rem', color: 'var(--text-muted)'}}>
            Agende uma consulta para iniciarmos sua jornada rumo ao bem-estar integral.
          </p>
          <a href={whatsappUrl} className="btn btn-primary" style={{padding: '1.2rem 3rem'}}>
            Agendar Consulta agora <WhatsAppIcon size={20} color="white" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato">
        <div className="footer-grid">
          <div className="footer-col">
            <a href="/" className="logo" style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <img src={logoImg} alt="Logo Dra. Daniela" style={{ height: '50px' }} />
              <div className="logo-text">
                Dra. Daniela Protásio
                <span>Medicina Integrativa</span>
              </div>
            </a>
            <p style={{maxWidth: '300px'}}>Promovendo saúde integral e natural através de um atendimento médico humanizado.</p>
            <div style={{display: 'flex', gap: '1rem', marginTop: '2rem'}}>
              <a href="#" style={{color: 'var(--primary)'}} aria-label="Instagram"><Instagram /></a>
              <a href="#" style={{color: 'var(--primary)'}} aria-label="Facebook"><Facebook /></a>
            </div>
          </div>
          
          <div className="footer-col">
            <h4 style={{fontFamily: 'Montserrat'}}>Contatos</h4>
            <p style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
              <Phone size={18} color="var(--primary)" /> (71) 98232-4761
            </p>
            <p style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
              <Mail size={18} color="var(--primary)" /> contato@dradanielaprotasio.com.br
            </p>
          </div>

          <div className="footer-col">
            <h4 style={{fontFamily: 'Montserrat'}}>Localização</h4>
            <p style={{display: 'flex', alignItems: 'flex-start', gap: '0.75rem'}}>
              <MapPin size={22} color="var(--primary)" /> 
              Atendimento Online em todo Brasil<br />
              Consultório Presencial - Rio Grande do Sul
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Dra. Daniela Protásio. CRM-RS 52316 | RQE 41826. Desenvolvido com carinho.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
