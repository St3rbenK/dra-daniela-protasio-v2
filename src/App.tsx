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
  X
} from 'lucide-react'

// Import de imagens locais
import logoImg from './assets/images/logo.png'
import draHero from './assets/images/dra-hero.png'
import draAbout from './assets/images/dra-about.jpg'

const WhatsAppIcon = ({ size = 24, color = "currentColor" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 16 16" 
    fill={color} 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
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
            <li className="mobile-only" style={{ marginTop: '2rem' }}>
              <a href={whatsappUrl} className="btn btn-primary">Agendar Consulta</a>
            </li>
          </ul>
        </nav>

        <a href={whatsappUrl} className="btn btn-primary desktop-only" style={{padding: '0.6rem 1.5rem', fontSize: '0.75rem'}}>
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
              Iniciar Tratamento <ArrowRight size={18} />
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
            Agendar Consulta agora <MessageCircle size={20} />
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
