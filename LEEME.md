# Página de acceso de Ruedas Doradas (GitHub Pages)

Carga la app de Apps Script dentro de esta página para que se pueda **instalar como ícono** en Android e iPhone, con el logo del club y un enlace corto. No guarda datos ni claves.

## Publicar (10 minutos)
1. En GitHub crea un repositorio **público** llamado `ruedas-doradas` (Add file > Upload files) y sube TODO el contenido de esta carpeta: `index.html`, `manifest.webmanifest`, `sw.js` y la carpeta `icons`.
2. Abre `index.html` en GitHub (lápiz ✏️) y en `APP_URL` pega el enlace de tu app, el que termina en `/exec` (menú de la planilla *Ruedas Doradas > Ver enlace de la app*). Guarda con *Commit changes*.
3. En el repositorio: *Settings > Pages > Build and deployment > Deploy from a branch > main / (root) > Save*.
4. En 1 o 2 minutos queda en `https://TU-USUARIO.github.io/ruedas-doradas/`. Ese es el enlace que les das a los apoderados.

## Instalar en el teléfono
- **Android (Chrome):** abrir el enlace > menú ⋮ > *Instalar aplicación* (o *Agregar a pantalla de inicio*).
- **iPhone (Safari):** abrir el enlace > botón Compartir > *Agregar a pantalla de inicio*.

## Importante
- El repositorio es público: **no pongas códigos de acceso ni datos de familias**. Solo está el enlace de la app, que de todas maneras exige código o PIN.
- La app de Apps Script debe seguir desplegada con *Ejecutar como: Yo* y *Acceso: Cualquier persona*. Al publicar cambios allí, haz *Implementar > Versión nueva*; el enlace `/exec` no cambia y esta página no hay que tocarla.
- Si cambias el enlace de la app, edita solo `APP_URL`.
- Al actualizar esta página, reemplaza `index.html` (y vuelve a pegar tu `APP_URL`) y `sw.js`. La página usa caché en modo red primero: con internet siempre muestra la versión más nueva; sin internet, la última copia guardada. Si un teléfono se queda con una versión vieja, cierra y abre la app dos veces.
- El aviso gris de Google ("creada por un usuario de Apps Script") suele desaparecer al mostrar la app dentro de una página propia, pero Google puede cambiarlo; revisa en tu teléfono.
- Si en el iPhone la app no mantiene la sesión o no abre, usa el enlace directo de Apps Script (hay un enlace de respaldo en la página).
