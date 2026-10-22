import FormularioContacto from '../components/FormularioContacto';

export default function Contacto() {
  return (
    <div className="page-container contacto-page">
      <header className="page-header">
        <span className="badge-pill">Canales de Comunicación</span>
        <h1 className="page-title">Contacto y Ubicación</h1>
        <p className="page-lead">
          Ponte en contacto con nuestro equipo a través del formulario con validación en tiempo real
          y consulta la ubicación de nuestras instalaciones en el mapa interactivo.
        </p>
      </header>

      {/* Layout de dos columnas: Mapa y Datos a la izquierda, Formulario a la derecha */}
      <div className="contacto-layout">
        {/* Columna Izquierda: Información de sede y MAPA INTERACTIVO */}
        <aside className="contacto-info-panel">
          {/* Tarjeta del Mapa Embebido */}
          <div className="info-card mapa-card highlight-card">
            <div className="card-badge">Ubicación Geográfica</div>
            <h3 className="mapa-card-title">Sede Central · Campus Castañares</h3>
            <p className="info-meta">Universidad Católica de Salta · Salta, Argentina</p>

            {/* Contenedor del Mapa Embebido */}
            <div className="mapa-iframe-wrapper">
              <iframe
                title="Mapa de Ubicación de UCASAL Campus Castañares"
                src="https://maps.google.com/maps?q=Universidad+Catolica+de+Salta+Campus+Castanares&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Ficha descriptiva de la sede y accesos */}
            <div className="mapa-info-detalles">
              <div className="mapa-detalle-item">
                <span className="mapa-icon">📍</span>
                <div>
                  <strong>Dirección:</strong>
                  <span>Av. Dr. Jaime Durán s/n, Campus Castañares, Salta (CP A4400)</span>
                </div>
              </div>

              <div className="mapa-detalle-item">
                <span className="mapa-icon">⏰</span>
                <div>
                  <strong>Horario de Atención:</strong>
                  <span>Lunes a Viernes de 08:00 a 20:00 hs</span>
                </div>
              </div>
            </div>

            <div className="mapa-acciones">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Universidad+Catolica+de+Salta+Campus+Castanares"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-sm btn-block"
              >
                Abrir en Google Maps Completo ↗
              </a>
            </div>
          </div>

          {/* Ficha Institucional y de Contacto */}
          <div className="info-card">
            <div className="card-badge">Información Institucional</div>
            <h4>Canales de Atención</h4>
            <ul className="info-list">
              <li>
                <span className="info-icon">🏢</span>
                <div>
                  <strong>Institución:</strong>
                  <span>Universidad Católica de Salta</span>
                </div>
              </li>
              <li>
                <span className="info-icon">✉️</span>
                <div>
                  <strong>Correo Electrónico:</strong>
                  <span>contacto@ucasal.edu.ar</span>
                </div>
              </li>
              <li>
                <span className="info-icon">👨‍💻</span>
                <div>
                  <strong>Responsable Técnico:</strong>
                  <span>Ignacio Kotting</span>
                </div>
              </li>
              <li>
                <span className="info-icon">📞</span>
                <div>
                  <strong>Teléfono:</strong>
                  <span>+54 (387) 426-8800</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Recomendación sobre el formulario */}
          <div className="info-card tip-card">
            <span className="tip-icon">💡</span>
            <div>
              <strong>Requisitos del formulario:</strong>
              <p>
                Todos los campos son obligatorios. El mensaje cuenta con un límite máximo de 300
                caracteres supervisado dinámicamente y se validan formatos de correo y nombres antes del envío.
              </p>
            </div>
          </div>
        </aside>

        {/* Columna Derecha: Componente de Formulario de Contacto */}
        <main className="contacto-form-col">
          <FormularioContacto />
        </main>
      </div>
    </div>
  );
}