# InnoTech · Trabajo Práctico Nº 4

**Universidad Católica de Salta**  
**Facultad de Ingeniería** · Carrera: Ingeniería en Informática  
**Asignatura:** Lenguaje IV · **Docente:** Lic. Carlos Pacheco  
**Alumno:** Ignacio Kotting  

---

## 🌐 Enlaces del Proyecto

- **Repositorio en GitHub:** [https://github.com/Kotting-ign/tp4-lenguajes-4](https://github.com/Kotting-ign/tp4-lenguajes-4)
- **Página Publicada (GitHub Pages):** [https://Kotting-ign.github.io/tp4-lenguajes-4/](https://Kotting-ign.github.io/tp4-lenguajes-4/)

---

## 🚀 Funcionalidades Principales

1. **Catálogo de Servicios y Tecnologías de TI:**
   - Alimentado mediante un array de datos local estructurado.
   - Filtrado dinámico por categorías (Frontend, Backend, Bases de Datos, DevOps, Seguridad).
   - Tarjetas responsivas con imágenes representativas, badges de nivel y tags tecnológicos.

2. **Consumo de API Pública Externa (DEV.to Community API):**
   - Integración asíncrona con `fetch` y `useEffect`.
   - Consulta dinámica por temáticas (`#react`, `#webdev`, `#javascript`, `#python`, `#devops`).
   - Muestra más de 6 campos por registro (Título, Descripción, Autor con avatar, Fecha, Tiempo de lectura, Etiquetas, Enlace fuente) e imagen obligatoria.
   - Incluye spinner de estado de carga y datos de respaldo *offline*.

3. **Mapa Embebido en Sección de Contacto:**
   - Mapa interactivo de Google Maps embebido junto al formulario de contacto, geolocalizando el Campus Castañares de la UCASAL.
   - Formulario de contacto modular con validación de entradas en tiempo real y límite de 300 caracteres.

---

## 🛠️ Tecnologías Utilizadas

- **React 19** + **Vite**
- **React Router 7** (SPA)
- **Vanilla CSS3** con variables globales, Flexbox y CSS Grid
- **EmailJS** + Despacho Directo para formularios
- **GitHub Pages** para despliegue automatizado con `gh-pages`

---

## 💻 Instalación y Ejecución Local

```bash
# Clonar el repositorio
git clone https://github.com/Kotting-ign/tp4-lenguajes-4.git

# Ingresar al directorio
cd tp4-lenguajes-4

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Generar bundle de producción
npm run build

# Desplegar en GitHub Pages
npm run deploy
```
