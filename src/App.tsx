import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Scale, Award, Shield, Users } from 'lucide-react';
import LoadingScreen from './components/LoadingScreen';
import LinkTree from './components/LinkTree';
import Reviews from './components/Reviews';
import Map from './components/Map';
import { WhatsAppIcon } from './components/WhatsAppIcon';
import logoImg from './public/logo.png';
import perfilImg from './public/perfil.png';
import bioImg from './public/bio.png';
import logoub from './public/logo-ub.png';

function ContatoPage() {
  return (
    <div className="bg-black min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center border border-blue-600/20 overflow-hidden">
                <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="font-serif text-lg font-bold text-slate-100 leading-tight">
                  Dr. Luiz Henrique Mamprin
                </h1>
                <p className="text-[10px] text-blue-500 uppercase tracking-widest">
                  OAB/SP 486.984
                </p>
              </div>
            </div>
            <a href="#" className="px-5 py-2.5 bg-blue-800 hover:bg-blue-900 text-white text-sm font-medium rounded-full transition-all shadow-lg shadow-blue-900/20">
              Voltar ao Início
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h3 className="font-serif text-3xl font-bold text-white mb-4">Contato</h3>
            <p className="text-slate-400">Acesse rapidamente nossos principais canais de atendimento</p>
          </div>
          <LinkTree />
        </div>
      </section>
    </div>
  );
}

function LandingPage({ isLoading, toggleMenu, isMenuOpen }: any) {
  return (
    <div className="bg-black min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Navigation */}
          <nav className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center border border-blue-600/20 overflow-hidden">
                    <img src={logoImg} alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h1 className="font-serif text-lg font-bold text-slate-100 leading-tight">
                      Dr. Luiz Henrique Mamprin
                    </h1>
                    <p className="text-[10px] text-blue-500 uppercase tracking-widest">
                      OAB/SP 486.984
                    </p>
                  </div>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                  <a href="#home" className="text-sm font-medium hover:text-blue-500 transition-colors">Início</a>
                  <a href="#about" className="text-sm font-medium hover:text-blue-500 transition-colors">Sobre</a>
                  <a href="#areas" className="text-sm font-medium hover:text-blue-500 transition-colors">Áreas</a>
                  <a href="#reviews" className="text-sm font-medium hover:text-blue-500 transition-colors">Depoimentos</a>
                  <a href="#contato" className="px-5 py-2.5 bg-blue-800 hover:bg-blue-900 text-white text-sm font-medium rounded-full transition-all shadow-lg shadow-blue-900/20">
                    Fale Conosco
                  </a>
                </div>

                <button
                  onClick={toggleMenu}
                  className="md:hidden p-2 text-slate-300 hover:text-white transition-colors"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden bg-neutral-900 border-b border-white/5 overflow-hidden"
                >
                  <div className="px-4 py-6 space-y-4 flex flex-col items-center">
                    <a onClick={toggleMenu} href="#home" className="text-lg font-medium hover:text-blue-500">Início</a>
                    <a onClick={toggleMenu} href="#about" className="text-lg font-medium hover:text-blue-500">Sobre</a>
                    <a onClick={toggleMenu} href="#areas" className="text-lg font-medium hover:text-blue-500">Áreas</a>
                    <a onClick={toggleMenu} href="#reviews" className="text-lg font-medium hover:text-blue-500">Depoimentos</a>
                    <a onClick={toggleMenu} href="#contato" className="text-lg font-medium text-blue-500">Contato</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>

          {/* Hero Section */}
          <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
              <img
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2000&auto=format&fit=crop"
                alt="Law Office Background"
                className="w-full h-full object-cover opacity-20"
              />
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="lg:w-1/2 text-center lg:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold tracking-wider uppercase mb-6">
                      Excelência Jurídica
                    </span>
                    <h2 className="font-serif text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
                      Defesa Estratégica <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                        Resultados Reais
                      </span>
                    </h2>
                    <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                      Atuação especializada em Direito Penal e Família.
                      Compromisso inegociável com a ética e a defesa dos seus direitos.
                      Associado ao escritório <span className="text-slate-200 font-semibold">HVK Advogados</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <a href="https://api.whatsapp.com/message/VOBV4YPWM7JPK1?autoload=1&app_absent=0&text=Vim%20atraves%20do%20site.%20Pode%20me%20tirar%20uma%20duvida" className="px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2">
                        <WhatsAppIcon className="w-5 h-5" />
                        Agendar Consulta
                      </a>
                      <a href="#areas" className="px-8 py-4 bg-neutral-800 hover:bg-neutral-700 text-white font-semibold rounded-xl transition-all border border-neutral-700 flex items-center justify-center gap-2">
                        Conhecer Áreas
                        <ChevronDown className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                </div>

                <div className="lg:w-1/2 relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="relative z-10"
                  >
                    <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
                      <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-[spin_10s_linear_infinite]" />
                      <div className="absolute inset-4 rounded-full border border-neutral-700" />
                      <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-black shadow-2xl">
                        <img
                          src={perfilImg}
                          alt="Dr. Luiz Henrique Mamprin"
                          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 bg-neutral-900 border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
                <div className="lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-3xl transform -rotate-3 scale-105" />
                    <img
                      src={bioImg}
                      alt="Formação e História"
                      className="relative rounded-3xl shadow-2xl border border-neutral-700 object-cover w-full h-[400px]"
                    />
                  </motion.div>
                </div>
                <div className="lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                      Sólida Formação e <span className="text-blue-500">Atuação Focada</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                      O Dr. Luiz Henrique Mamprin possui formação acadêmica pela <strong>Universidade Brasil (UB)</strong> e dedica-se às áreas de Direito Penal e Direito de Família, garantindo não apenas o conhecimento técnico, mas a sensibilidade necessária para atuar nos momentos mais decisivos.
                    </p>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                      Sendo membro associado ao respeitado <strong>HVK Advogados</strong>, nosso escritório soma forças para oferecer uma estrutura jurídica robusta, ágil e multidisciplinar, sempre pautada na ética e na precisão técnica absoluta.
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                          <Scale className="text-blue-500 w-5 h-5" />
                        </div>
                        <span className="text-slate-200 font-medium text-sm">Registro OAB/SP<br /><span className="text-blue-500">486.984</span></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center overflow-hidden">
                          <img src={logoub} className="w-full h-full object-cover" />
                        </div>
                        <span className="text-slate-200 font-medium text-sm">Formação<br /><span className="text-blue-500">Universidade Brasil</span></span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Areas of Practice */}
          <section id="areas" className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Áreas de Atuação</h2>
                <p className="text-slate-400 text-lg">
                  Especialização técnica e atualização constante para oferecer a melhor defesa em momentos decisivos.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <div className="group p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-blue-500/30 transition-all hover:bg-neutral-800/50">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Scale className="w-7 h-7 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">Direito Penal</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Defesa intransigente da liberdade. Atuação em inquéritos policiais, processos criminais,
                    Tribunal do Júri e recursos em instâncias superiores.
                  </p>
                  <ul className="space-y-3">
                    {['Habeas Corpus', 'Defesa em Flagrante', 'Crimes Patrimoniais', 'Execução Penal'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="group p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-blue-500/30 transition-all hover:bg-neutral-800/50">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Users className="w-7 h-7 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">Direito de Família</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    Soluções jurídicas humanizadas para conflitos familiares. Foco na preservação das relações
                    e na proteção patrimonial.
                  </p>
                  <ul className="space-y-3">
                    {['Divórcios', 'Guarda e Pensão', 'Inventários', 'Planejamento Sucessório'].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section id="reviews" className="py-24 bg-neutral-900/30 border-y border-white/5">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">O que dizem nossos clientes</h2>
                  <p className="text-slate-400">Avaliações verificadas do Google</p>
                </div>
                <div className="flex items-center gap-2 bg-neutral-800 px-4 py-2 rounded-full border border-neutral-700">
                  <span className="text-blue-500 font-bold text-xl">5.0</span>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(i => <Award key={i} className="w-4 h-4 text-blue-500 fill-blue-500" />)}
                  </div>
                  <span className="text-slate-400 text-sm ml-2">Excelência</span>
                </div>
              </div>
              <Reviews />
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-black border-t border-white/5 py-12">
            <div className="container mx-auto px-4 text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <img src={logoImg} className="w-full h-full object-cover" />
                </div>
                <span className="font-serif text-xl font-bold text-white">Dr. Luiz Henrique Mamprin</span>
              </div>
              <p className="text-slate-500 text-sm mb-6">
                Advocacia Criminal e Direito de Família em Fernandópolis e Região.
              </p>
              <div className="flex justify-center gap-6 mb-8">
                <a href="https://instagram.com/drluizmamprin_adv" className="text-slate-400 hover:text-blue-500 transition-colors">
                  Instagram
                </a>
                <a href="https://www.jusbrasil.com.br/processos/nome/618242007/luiz-henrique-mamprin" className="text-slate-400 hover:text-blue-500 transition-colors">
                  Jusbrasil
                </a>
              </div>
              <p className="text-slate-600 text-xs">
                © 2026 Luiz Henrique Mamprin. Todos os direitos reservados.<br />
                OAB/SP 486.984
              </p>
            </div>
          </footer>
        </motion.div>
      )}

      {/* Floating WhatsApp Button */}
      {!isLoading && (
        <a
          href="https://api.whatsapp.com/message/VOBV4YPWM7JPK1?autoload=1&app_absent=0&text=Vim%20atraves%20do%20site.%20Pode%20me%20tirar%20uma%20duvida"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl shadow-green-900/50 transition-all hover:scale-110 flex items-center justify-center"
        >
          <WhatsAppIcon className="w-7 h-7" />
        </a>
      )}
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#');

  useEffect(() => {
    const onHashChange = () => setCurrentPath(window.location.hash || '#');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  if (currentPath === '#contato') {
    return <ContatoPage />;
  }

  return <LandingPage isLoading={isLoading} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />;
}
