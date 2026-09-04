"use client"; 

import Link from 'next/link';
import { useState } from 'react'; 

export default function Home() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    area: "",
    resumen: ""
  });
  
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const areasLegales = [
    { id: "corporativo", label: "Derecho Corporativo" },
    { id: "penal", label: "Derecho Penal" },
    { id: "familiar", label: "Derecho Familiar" },
    { id: "civil", label: "Litigio Civil" }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.area) {
      alert("Por favor seleccione un área legal.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }

      setEnviado(true);
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        area: "",
        resumen: ""
      });

    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      alert("Hubo un problema al enviar su consulta. Intente nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav className="bg-surface fixed top-0 w-full z-50 border-b border-outline">
        <div className="flex justify-between items-center h-20 px-margin-desktop max-w-container-max mx-auto">
          <Link href="#" className="font-headline-md text-headline-md font-bold tracking-tighter text-primary">
            ESTUDIO JURIDICO
          </Link>
          
          <div className="hidden md:flex gap-gutter items-center">
            <Link href="#practice-areas" className="text-on-surface-variant font-medium font-label-caps text-label-caps hover:text-primary transition-colors duration-200">Practice Areas</Link>
            <Link href="#about" className="text-on-surface-variant font-medium font-label-caps text-label-caps hover:text-primary transition-colors duration-200">About Us</Link>
            <Link href="#contact" className="bg-primary text-on-primary font-label-caps text-label-caps px-6 py-3 uppercase tracking-widest hover:bg-surface-tint transition-colors duration-200 border border-primary">
              Free Consultation
            </Link>
          </div>
          
          <button className="md:hidden text-primary">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </nav>

      <main className="pt-20">
        <section className="relative min-h-[90vh] flex items-center bg-surface-container-lowest border-b border-outline overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <img 
              className="w-full h-full object-cover filter grayscale opacity-90 mix-blend-multiply absolute inset-0"
              alt="Abogado principal"
              src="/screen1.png" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-container-lowest via-surface/80 to-transparent"></div>
          </div>
          <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 lg:col-span-7 pt-20 pb-16">
              <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-6 leading-tight">
                Justicia con Integridad y Experiencia
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl border-l-2 border-primary pl-6">
                Servicios legales personalizados diseñados para proteger su legado. Nuestro equipo combina la tradición del derecho con estrategias de litigio modernas para resultados excepcionales.
              </p>
              <Link href="#contact" className="inline-flex items-center justify-center bg-tertiary-fixed-dim text-primary font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest hover:brightness-95 transition-colors duration-200 brutalist-shadow border border-primary group">
                Consultoría Gratuita
                <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-section-gap bg-background border-b border-outline" id="practice-areas">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
              <div className="max-w-2xl">
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4 block">Especialidades</span>
                <h2 className="font-headline-md text-headline-md text-primary">Nuestras Áreas de Práctica</h2>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-outline">
              <div className="bg-surface-container-lowest p-8 border-b border-r border-outline group hover:bg-surface-container-low transition-colors duration-300">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">domain</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Derecho Corporativo</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Asesoría integral para empresas, fusiones, adquisiciones y cumplimiento normativo complejo.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-8 border-b border-r border-outline group hover:bg-surface-container-low transition-colors duration-300">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">gavel</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Derecho Penal</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Defensa vigorosa y estratégica en tribunales, protegiendo sus derechos constitucionales.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-8 border-b border-r border-outline group hover:bg-surface-container-low transition-colors duration-300">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">family_restroom</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Derecho Familiar</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Resolución compasiva pero firme en divorcios, custodia y planificación patrimonial.
                </p>
              </div>
              <div className="bg-surface-container-lowest p-8 border-b border-r border-outline group hover:bg-surface-container-low transition-colors duration-300">
                <span className="material-symbols-outlined text-4xl text-primary mb-6">balance</span>
                <h3 className="font-headline-sm text-headline-sm text-primary mb-4">Litigio Civil</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Representación contenciosa enfocada en la resolución de disputas comerciales y civiles de alto valor.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-section-gap bg-primary text-on-primary" id="about">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-5 relative">
              <div className="border border-on-primary p-2">
                <img 
                  className="w-full h-auto object-cover filter grayscale aspect-[4/5]" 
                  alt="Historia del estudio"
                  src="/screen.png"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tertiary-fixed-dim z-[-1]"></div>
            </div>
            
            <div className="lg:col-span-6 lg:col-start-7 mt-12 lg:mt-0">
              <span className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-widest mb-6 block">Sobre Nosotros</span>
              <h2 className="font-headline-md text-headline-md mb-8">Nuestra Historia de Excelencia</h2>
              <div className="space-y-6 font-body-lg text-body-lg text-secondary-container">
                <p>
                  Fundada sobre los principios de integridad inquebrantable y preparación exhaustiva, Advocatus representa una nueva era en la práctica jurídica. 
                </p>
                <p>
                  No somos simplemente abogados; somos estrategas legales dedicados a desmantelar complejidades y asegurar el futuro de nuestros clientes. Nuestra firma combina el rigor del análisis legal tradicional con tácticas procesales modernas, asegurando que cada caso sea manejado con precisión quirúrgica.
                </p>
                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-tertiary-fixed-dim inline-block mt-2 mr-4 flex-shrink-0"></span>
                    <span className="font-body-md text-body-md">Más de tres décadas de experiencia combinada en litigios complejos.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-tertiary-fixed-dim inline-block mt-2 mr-4 flex-shrink-0"></span>
                    <span className="font-body-md text-body-md">Representación exclusiva y atención altamente personalizada.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-section-gap bg-surface-container-lowest border-t border-outline" id="contact">
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-gutter">
            
            <div>
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4 block">Contacto</span>
              <h2 className="font-headline-md text-headline-md text-primary mb-6">Agende su Consulta Gratuita</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-md">
                Nuestro equipo de especialistas revisará su caso con absoluta confidencialidad y se pondrá en contacto a la brevedad.
              </p>
              
              <div className="space-y-4 font-body-md text-primary">
                <p className="flex items-center"><span className="material-symbols-outlined mr-3">call</span> +54 11 1234-5678</p>
                <p className="flex items-center"><span className="material-symbols-outlined mr-3">mail</span> consultas@advocatus.com</p>
                <p className="flex items-center"><span className="material-symbols-outlined mr-3">location_on</span> Av. Libertador 1234, Piso 5, CABA</p>
              </div>
            </div>

            <div className="bg-background p-8 border border-outline brutalist-shadow mt-10 lg:mt-0 flex flex-col justify-center">
              {enviado ? (
                <div className="text-center py-10 animation-fade-in">
                  <div className="inline-block border-2 border-primary p-4 rounded-full mb-6 brutalist-shadow bg-surface-container-lowest">
                    <span className="material-symbols-outlined text-6xl text-primary block">check_circle</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-4">¡Consulta Enviada!</h3>
                  <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-sm mx-auto">
                    Hemos recibido su caso con éxito. Nuestro equipo lo revisará y se pondrá en contacto a la brevedad.
                  </p>
                  <button 
                    onClick={() => setEnviado(false)}
                    className="bg-surface-container-lowest text-primary font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest hover:bg-surface-container-low transition-colors duration-200 border border-primary brutalist-shadow inline-block"
                  >
                    Enviar nueva consulta
                  </button>
                </div>
                 ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-label-caps text-label-caps text-primary mb-2">Nombre Completo</label>
                    <input 
                      type="text" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      className="w-full bg-surface-container-lowest border border-outline p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                      placeholder="Ej. Juan Pérez" 
                      required 
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-label-caps text-label-caps text-primary mb-2">Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-surface-container-lowest border border-outline p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                        placeholder="correo@ejemplo.com" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block font-label-caps text-label-caps text-primary mb-2">Teléfono</label>
                      <input 
                        type="tel" 
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        className="w-full bg-surface-container-lowest border border-outline p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" 
                        placeholder="+54 9 11 2345 6789" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block font-label-caps text-label-caps text-primary mb-2">Área Legal</label>
                    <div 
                      onClick={() => setIsSelectOpen(!isSelectOpen)}
                      className="w-full bg-surface-container-lowest border border-outline p-3 flex justify-between items-center cursor-pointer hover:border-primary transition-colors"
                    >
                      <span className={formData.area ? "text-primary" : "text-gray-500"}>
                        {formData.area ? areasLegales.find(a => a.id === formData.area)?.label : "Seleccione un área..."}
                      </span>
                      <span className="material-symbols-outlined transition-transform duration-300" style={{ transform: isSelectOpen ? 'rotate(180deg)' : 'none' }}>
                        expand_more
                      </span>
                    </div>

                    {isSelectOpen && (
                      <ul className="absolute z-50 w-full mt-1 bg-surface-container-lowest border border-outline brutalist-shadow">
                        {areasLegales.map((area) => (
                          <li 
                            key={area.id}
                            onClick={() => {
                              setFormData({ ...formData, area: area.id });
                              setIsSelectOpen(false);
                            }}
                            className="p-3 cursor-pointer hover:bg-primary hover:text-white transition-colors duration-200"
                          >
                            {area.label}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div>
                    <label className="block font-label-caps text-label-caps text-primary mb-2">Resumen del Caso</label>
                    <textarea 
                      name="resumen"
                      value={formData.resumen}
                      onChange={handleChange}
                      rows={4} 
                      className="w-full bg-surface-container-lowest border border-outline p-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" 
                      placeholder="Describa brevemente su situación..." 
                      required
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-primary text-on-primary font-label-caps text-label-caps px-8 py-4 uppercase tracking-widest hover:bg-surface-tint transition-colors duration-200 border border-primary brutalist-shadow disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? "Enviando..." : "Enviar Consulta"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

      </main>
      <footer className="bg-primary border-t border-outline">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-12 px-margin-desktop max-w-container-max mx-auto gap-gutter">
          <div className="font-headline-sm text-headline-sm font-bold text-on-primary mb-6 md:mb-0">
            ESTUDIO JURIDICO
          </div>
          <div className="flex flex-wrap gap-6">
            <Link href="#" className="text-slate-300 font-label-caps text-label-caps hover:text-tertiary-fixed-dim transition-colors duration-300 uppercase tracking-widest">
              Legal Notice
            </Link>
            <Link href="#" className="text-slate-300 font-label-caps text-label-caps hover:text-tertiary-fixed-dim transition-colors duration-300 uppercase tracking-widest">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="py-6 px-margin-desktop max-w-container-max mx-auto text-slate-400 font-body-md text-body-md text-sm">
            © 2026 Advocatus Law Group. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}