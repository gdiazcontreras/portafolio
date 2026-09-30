# Gabriela Díaz · Portafolio Front-End

Primera versión del portafolio profesional de Gabriela Díaz, periodista y Front-End Developer. Conecta su experiencia en comunicación estratégica, innovación y transformación digital con el desarrollo de experiencias web centradas en las personas.

## Características

- Diseño oscuro con acentos violeta y lavanda, ilustración CSS y componentes personalizados.
- Secciones de inicio, presentación, experiencia, habilidades, proyectos y contacto.
- Diseño responsive para dispositivos móviles, tabletas y escritorio.
- Navegación sticky, menú móvil con cierre mediante Escape y sección activa.
- HTML semántico, enlace para saltar al contenido, foco visible y respeto por `prefers-reduced-motion`.
- Aviso accesible para enlaces pendientes; ningún enlace provisional conduce a un destino inventado.
- Sin imágenes externas, fotografías inventadas ni capturas ficticias.

## Tecnologías

HTML5, CSS3, JavaScript vanilla y Bootstrap 5.3.3 mediante CDN con verificación de integridad. Bootstrap aporta la base responsive y la estructura de navegación; el menú se controla con JavaScript propio, sin necesitar el bundle de Bootstrap. No requiere instalación de paquetes ni compilación.

Las tecnologías listadas dentro de las cards describen los proyectos presentados; no son dependencias de este portafolio.

## Estructura

```text
proyecto8/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── img/
│       └── .gitkeep
└── README.md
```

`assets/img/` queda preparada para las capturas reales de los proyectos.

## Ejecución local

Abrir `index.html` en el navegador. También se puede usar la extensión Live Server del editor o, si Python 3 está instalado, ejecutar desde esta carpeta:

```sh
python3 -m http.server 8000
```

Luego visitar `http://localhost:8000`. Se necesita conexión a Internet para cargar el CSS de Bootstrap desde su CDN. No se necesitan claves ni variables de entorno.

## Estado del proyecto

Primera versión completa de la interfaz, con información pendiente antes de su publicación profesional. Los comentarios `TODO` de `index.html` identifican:

- URLs personales de GitHub y LinkedIn, y dirección de correo electrónico.
- Cargos, períodos y funciones reales en Fortalece Pyme Valparaíso y CREAS.
- Enlaces de demo y repositorio para los tres proyectos.
- Capturas reales y sus textos alternativos.
- Contenido y URL del caso de estudio de SMARTBUDGET.

Para activar un enlace, reemplazar `href="#"` por el destino real, quitar `data-pending` y actualizar su `aria-label` para eliminar “enlace pendiente”. Para el correo utilizar `mailto:` seguido de la dirección real. Al publicar el caso de estudio, retirar también su etiqueta visible “Pendiente”.

Los textos de experiencia contienen TODO visibles para que no se confundan con datos confirmados. Las vistas previas son espacios gráficos de reserva y no representan interfaces reales.

## Revisión manual

Comprobar el sitio en móvil, tableta y escritorio; recorrerlo con Tab; abrir y cerrar el menú con teclado y Escape; probar los anchors y avisos de enlaces pendientes. Con reducción de movimiento activada, la navegación debe omitir el desplazamiento animado. Revisar nuevamente después de incorporar capturas y datos definitivos.

## Autora

**Gabriela Díaz**  
Comunicación + Tecnología + Front-End  
2026
