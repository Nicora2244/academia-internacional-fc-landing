# Academia Internacional FC — Landing Page

Landing page para **Academia Internacional FC** — campamentos de entrenamiento
de fútbol e inmersión cultural en Colombia. *Go South. Play Real.*

Construida con **React + Vite + Tailwind CSS**, a partir del diseño en Figma.

## Requisitos

- Node.js 18 o superior

## Empezar

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo (http://localhost:5173)
npm run build    # build de producción en /dist
npm run preview  # previsualiza el build
```

Para compartir el servidor de desarrollo en la red local:

```bash
npm run dev -- --host
```

## Estructura

```
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   ├── favicon.svg
│   └── assets/            # fotos exportadas desde Figma
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Header.jsx     # nav superior
        ├── Hero.jsx       # "Go South. Play Real."
        ├── Marquee.jsx    # cinta animada
        ├── About.jsx      # intro
        ├── Pillars.jsx    # FÚTBOL · CULTURA · CONEXIÓN
        ├── Colombia.jsx   # carrusel
        ├── Academy.jsx    # Academia Internacional FC
        ├── Pricing.jsx    # Next Level Camp (planes)
        ├── Faq.jsx        # preguntas frecuentes
        └── Footer.jsx
```

## Secciones

- **Hero** — "Go South. Play Real." con llamado a la acción
- **Marquee** — cinta animada con el lema
- **About** — la propuesta de la academia
- **Pillars** — FÚTBOL · CULTURA · CONEXIÓN
- **Colombia** — carrusel de imágenes con indicadores
- **Academy** — historia de Academia Internacional FC
- **Pricing (Next Level Camp)** — planes One Week / Two Weeks / Four Weeks
- **FAQ** — preguntas frecuentes desplegables
- **Footer** — enlaces y contacto

## Diseño

- **Colores:** azul `#1a73e8`, lima `#d4f604` (ver `tailwind.config.js`).
- **Tipografías:** Comfortaa (títulos), Roboto (texto), Montserrat (etiquetas).
- Contenido: edita los arrays al inicio de cada componente en `src/components/`.

## Próximos pasos

- Conectar el botón "Apply Now" a un formulario / backend para captar inscripciones.
- Sustituir el logo de texto por el escudo real de la academia.
- Revisar y pulir el diseño responsive en móvil.
- Desplegar a un enlace permanente (Vercel / Netlify / GitHub Pages).
