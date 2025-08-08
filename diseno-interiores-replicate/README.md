MODELO: replicate/controlnet-hough

## ¿Qué hace controlnet-hough?
Este modelo genera imágenes a partir de líneas de contorno (Hough transform) y un prompt de texto. Generalmente necesita una imagen base (image) de entrada, como PNG o JPEG, que se usará para extraer las líneas de contorno, y un prompt para guiar la generación.


# Next.js + Replicate

Este proyecto permite a los usuarios rediseñar espacios o imágenes utilizando inteligencia artificial, mediante la API de [Replicate](https://replicate.com). El usuario sube una imagen y recibe una nueva versión generada con un modelo de IA como `Flux Kontext Pro`.

---

## 🚀 Tecnologías utilizadas

- [Next.js 14]
- [React]
- [Chakra UI] — para la UI
- [Replicate API] — generación de imágenes IA
- [Cloudinary] — subida de imágenes
- [TypeScript]

---

## ✨ Funcionalidades

- Subida de imágenes mediante formulario
- Carga asincrónica con `useFormState` y Server Actions
- Visualización del resultado generado por IA
- Manejo de estado del proceso (`starting`, `processing`, `succeeded`, etc.)
- Polling automático para obtener el resultado final

---

## 📦 Instalación

1. Cloná este repositorio
2. Instalá las dependencias
3. Crea un archivo .env.local y agregá tus claves:
    - CLOUDINARY_PRESET = tu_preset
    - CLOUDINARY_CLOUD_NAME = tu_nombre
    - CLOUDINARY_FOLDER = un_folder
4. Iniciá el servidor de desarrollo: `npm run dev`