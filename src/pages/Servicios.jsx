import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SERVICIOS_DATA, CATEGORIAS_SERVICIOS } from '../data/serviciosData';

export default function Servicios() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  // Filtrado reactivo basado en la categoría seleccionada
  const serviciosFiltrados =
    categoriaSeleccionada === 'Todos'
      ? SERVICIOS_DATA
      : SERVICIOS_DATA.filter((s) => s.categoria === categoriaSeleccionada);

  return (
    <div className="page-container servicios-page">
      <header className="page-header">
        <span className="badge-pill">Nuestras Especialidades</span>
        <h1 className="page-title">Servicios y Stack Tecnológico</h1>
        <p className="page-lead">
          Soluciones profesionales de ingeniería de software, arquitectura cloud y desarrollo web moderno.
          Conoce nuestras competencias técnicas, herramientas y proyectos destacados.
        </p>
      </header>

      {/* Barra de Filtros por Categoría */}
      <section className="filtros-container" aria-label="Filtro de tecnologías por categoría">
        <span className="filtros-label">Filtrar por área:</span>
        <div className="filtros-botones">
          {CATEGORIAS_SERVICIOS.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`btn-filtro ${categoriaSeleccionada === cat ? 'activo' : ''}`}
              onClick={() => setCategoriaSeleccionada(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de Servicios / Habilidades TI (Array de objetos local) */}
      <div className="servicios-grid">
        {serviciosFiltrados.map((s) => (
          <article key={s.id} className="servicio-card tech-card">
            {/* Imagen ilustrativa del servicio */}
            <div className="servicio-img-wrapper">
              <img
                src={s.imagen}
                alt={`Tecnología: ${s.titulo}`}
                className="servicio-img"
                loading="lazy"
                onError={(e) => {
                  // Fallback visual si se pierde conexión con Unsplash
                  e.currentTarget.onerror = null;
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80';
                }}
              />
              <span className="categoria-badge">{s.categoria}</span>
              <span className="nivel-badge">{s.nivel}</span>
            </div>

            <div className="servicio-body">
              <div className="servicio-header">
                <span className="servicio-icono">{s.icono}</span>
                <span className="servicio-id">0{s.id}</span>
              </div>

              <h2 className="servicio-titulo">{s.titulo}</h2>
              <span className="servicio-subtitulo">{s.subtitulo}</span>

              <p className="servicio-descripcion">{s.descripcion}</p>

              <div className="servicio-meta">
                <span className="meta-item">
                  <span className="meta-icon">📁</span> {s.proyectos}
                </span>
              </div>

              <div className="servicio-tags">
                {s.etiquetas.map((tag, idx) => (
                  <span key={idx} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {serviciosFiltrados.length === 0 && (
        <div className="alerta alerta-info" style={{ marginTop: '2rem' }}>
          No se encontraron servicios registrados para la categoría seleccionada.
        </div>
      )}

      {/* Banner de Contacto */}
      <section className="cta-banner" style={{ marginTop: '3.5rem' }}>
        <h2>¿Necesitas asesoramiento o desarrollo sobre estas tecnologías?</h2>
        <p>
          Envía tu consulta técnica a través del formulario de contacto con validaciones en tiempo
          real y mapa interactivo.
        </p>
        <Link to="/contacto" className="btn btn-primary btn-lg">
          Ir a Contacto y Mapa <span>→</span>
        </Link>
      </section>
    </div>
  );
}