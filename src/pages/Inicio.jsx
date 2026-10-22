import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_FALLBACK_ARTICULOS } from '../data/apiFallbackData';

export default function Inicio() {
  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [tagActivo, setTagActivo] = useState('react');
  const [recargaCount, setRecargaCount] = useState(0);

  const tagsDisponibles = ['react', 'webdev', 'javascript', 'python', 'devops'];

  useEffect(() => {
    let activo = true;

    fetch(`https://dev.to/api/articles?tag=${tagActivo}&per_page=6`, {
      headers: {
        Accept: 'application/json'
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status} al consultar la API pública.`);
        }
        return res.json();
      })
      .then((data) => {
        if (!activo) return;
        if (Array.isArray(data) && data.length > 0) {
          setArticulos(data);
        } else {
          setArticulos(API_FALLBACK_ARTICULOS);
        }
        setCargando(false);
      })
      .catch((err) => {
        if (!activo) return;
        console.warn('Conexión con DEV.to API no disponible, activando datos de respaldo:', err.message);
        setArticulos(API_FALLBACK_ARTICULOS);
        setCargando(false);
      });

    return () => {
      activo = false;
    };
  }, [tagActivo, recargaCount]);

  const cambiarTag = (nuevoTag) => {
    if (nuevoTag !== tagActivo) {
      setCargando(true);
      setTagActivo(nuevoTag);
    }
  };

  const recargarFeed = () => {
    setCargando(true);
    setRecargaCount((c) => c + 1);
  };

  return (
    <div className="page-container inicio-page">
      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-content">
          <div className="hero-badge">Ingeniería de Software & Desarrollo Web</div>
          <h1 className="hero-title">
            Soluciones Digitales & <br />
            <span className="gradient-text">Desarrollo Web Moderno</span>
          </h1>
          <p className="hero-description">
            Plataforma integral enfocada en el desarrollo de aplicaciones frontend reactivas,
            consumo de APIs en tiempo real, arquitecturas modulares escalables y experiencias
            digitales centradas en el usuario.
          </p>
          <div className="hero-actions">
            <Link to="/servicios" className="btn btn-primary btn-lg">
              Explorar Servicios <span>→</span>
            </Link>
            <Link to="/contacto" className="btn btn-outline btn-lg">
              Contacto y Ubicación
            </Link>
          </div>
        </div>

        <div className="hero-card-preview">
          <div className="code-card">
            <div className="code-card-header">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
              <span className="code-title">Terminal · Configuración del Sistema</span>
            </div>
            <div className="code-card-body">
              <div className="code-line">
                <span className="code-key">empresa:</span> <span className="code-str">"InnoTech Digital"</span>
              </div>
              <div className="code-line">
                <span className="code-key">enfoque:</span> <span className="code-str">"Ingeniería de Software"</span>
              </div>
              <div className="code-line">
                <span className="code-key">stack:</span> <span className="code-str">"React 19 + Vite SPA"</span>
              </div>
              <div className="code-line">
                <span className="code-key">feed_en_vivo:</span> <span className="code-str">"DEV.to Community API"</span>
              </div>
              <div className="code-line">
                <span className="code-key">desarrollador:</span> <span className="code-str">"Ignacio Kotting"</span>
              </div>
              <div className="code-line">
                <span className="code-key">ubicación:</span> <span className="code-str">"Campus Castañares, Salta"</span>
              </div>
              <div className="code-line">
                <span className="code-key">estado:</span> <span className="code-status">"Operativo & Desplegado"</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE ARTÍCULOS Y NOVEDADES (API EN VIVO) */}
      <section className="api-section">
        <div className="section-header">
          <span className="badge-pill">Comunidad & Tendencias</span>
          <h2 className="section-title">Artículos y Novedades Tecnológicas</h2>
          <p className="section-subtitle">
            Descubre las últimas publicaciones, guías de arquitectura y mejores prácticas
            del ecosistema de desarrollo de software sincronizadas en tiempo real.
          </p>
        </div>

        {/* Selector de Etiquetas para consultar la API dinámicamente */}
        <div className="api-controls">
          <span className="api-controls-label">Filtrar por temática:</span>
          <div className="filtros-botones">
            {tagsDisponibles.map((tag) => (
              <button
                key={tag}
                type="button"
                className={`btn-filtro ${tagActivo === tag ? 'activo' : ''}`}
                onClick={() => cambiarTag(tag)}
                disabled={cargando}
              >
                #{tag}
              </button>
            ))}
            <button
              type="button"
              className="btn-filtro btn-recargar"
              onClick={recargarFeed}
              title="Recargar feed de novedades"
            >
              🔄 Actualizar Feed
            </button>
          </div>
        </div>

        {/* Grid de Artículos de la API Pública */}
        {cargando ? (
          <div className="api-loading-state">
            <div className="spinner"></div>
            <p>Cargando artículos sobre <strong>#{tagActivo}</strong>...</p>
          </div>
        ) : (
          <div className="api-articles-grid">
            {articulos.map((art) => {
              const imagenArticulo =
                art.cover_image ||
                art.social_image ||
                art.user?.profile_image ||
                'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80';

              return (
                <article key={art.id} className="api-card">
                  <div className="api-card-img-container">
                    <img
                      src={imagenArticulo}
                      alt={art.title}
                      className="api-card-img"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                    <span className="api-reading-time">
                      ⏱ {art.reading_time_minutes || 5} min de lectura
                    </span>
                  </div>

                  <div className="api-card-body">
                    <h3 className="api-card-title">{art.title}</h3>

                    <p className="api-card-desc">
                      {art.description ||
                        'Artículo técnico sobre prácticas modernas de ingeniería y desarrollo de software.'}
                    </p>

                    <div className="api-card-author-meta">
                      {art.user?.profile_image && (
                        <img
                          src={art.user.profile_image}
                          alt={art.user.name || 'Autor'}
                          className="api-author-avatar"
                        />
                      )}
                      <div className="api-author-info">
                        <span className="api-author-name">{art.user?.name || 'Comunidad Dev'}</span>
                        <span className="api-card-date">
                          📅 {art.readable_publish_date || 'Reciente'}
                        </span>
                      </div>
                    </div>

                    <div className="api-card-tags">
                      {(art.tag_list || []).slice(0, 4).map((t, idx) => (
                        <span key={idx} className="tag-pill tag-pill-sm">
                          #{t}
                        </span>
                      ))}
                    </div>

                    <div className="api-card-footer">
                      <a
                        href={art.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm api-read-btn"
                      >
                        Leer en DEV.to ↗
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Características del Ecosistema */}
      <section className="features-section">
        <div className="section-header">
          <span className="badge-pill">Nuestras Capacidades</span>
          <h2 className="section-title">Soluciones Tecnológicas Integrales</h2>
          <p className="section-subtitle">
            Pilares fundamentales sobre los que construimos aplicaciones web modernas, rápidas y seguras.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💻</div>
            <h3>Desarrollo Frontend Reactivo</h3>
            <p>
              Arquitecturas modulares con React 19 y Vite, componentes desacoplados,
              gestión de estado eficiente y diseño responsive adaptado a cualquier dispositivo.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌐</div>
            <h3>Integración de APIs en Tiempo Real</h3>
            <p>
              Consumo optimizado de servicios RESTful y endpoints externos con control
              de estados de carga, manejo de excepciones y sincronización continua.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Formularios & Validación Segura</h3>
            <p>
              Validación bidireccional en tiempo real con expresiones regulares,
              sanitización estricta de entradas y envío directo a casillas de correo electrónico.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="cta-banner">
        <h2>¿Tienes una consulta o propuesta en mente?</h2>
        <p>Escríbenos a través de nuestro formulario interactivo o visítanos en nuestra sede.</p>
        <Link to="/contacto" className="btn btn-primary btn-lg">
          Ir a Contacto y Ubicación
        </Link>
      </section>
    </div>
  );
}