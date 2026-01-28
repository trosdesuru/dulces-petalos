# Dulces Pétalos

Aplicación web para visualizar el catálogo de una floristería, construida con **Next.js**, **TypeScript**, **React** y **Tailwind CSS**.

## Decisiones Técnicas y Arquitectura

El objetivo principal ha sido crear una base escalable, mantenible y robusta usando metodología Clean Code.

### 1.Separation of Concerns (SoC)
Se evita juntar responsabilidades separando los servicios:
- **`src/lib/api.ts`**: Capa de servicio agnóstica a la UI. Centraliza los `fetch` y maneja errores de red.
- **`src/components/feature/*`**: Componentes inteligentes con lógica de negocio específica.
- **`src/components/ui/*`**: Componentes stateless y reutilizables.

### 2. Programación Defensiva
- **Adaptación de Datos**: Tuve una discrepancia entre la interfaz inicial y la API (`image` en vez de `imgUrl`). Se optó por tipar estrictamente la respuesta real de la API.
- **Fallback Image**: El componente `ProductCard` implementa un *fallback* visual. Si la API devuelve una imagen vacía o falla, se muestra un icono en lugar de romper el frontend.
- **Manejo de Errores**: Implementación de archivos `error.tsx` y `not-found.tsx` para evitar que el usuario vea pantallas en blanco o errores de sistema.

### 3. Rendimiento
- Uso de **Server Components** por defecto para minimizar el JS enviado al cliente.
- Optimización de imágenes con `next/image` para carga diferida y formatos modernos.
- Implementación de **Skeletons** en `loading.tsx` para mejorar el *Cumulative Layout Shift (CLS)* durante la carga.

## Gestión de Ramas con git

Para simular un entorno profesional de CI/CD, el repositorio se estructura en dos ramas principales:

- **`main`**: Rama de producción. Contiene únicamente código estable, testeado y listo para despliegue.
- **`develop`**: Rama de integración. Aquí se fusionan las *feature branches* y se ejecutan las pruebas antes de promocionar a producción.

### 4. Testing
Se ha configurado **Jest** + **React Testing Library** para asegurar la calidad.
- Tests unitarios en `ProductCard` cubriendo tanto el "Happy Path" como algunos casos específicos.

## Instalación y Ejecución

1. Clonar el repositorio e instalar dependencias:
   ```bash
   npm install
2. Ejecutar el servidor de desarrollo:
    ```npm run dev
3. Ejecutar los tests:
    ```npm run test
📂 Estructura del Proyecto
src/
├── app/                 # Next.js App Router (Páginas)
├── components/
│   ├── ui/              # Átomos reutilizables (ProductCard, etc.)
│   └── feature/         # Bloques de funcionalidad (ProductDetail)
├── lib/                 # Lógica de negocio y llamadas API
├── types/               # Definiciones TypeScript compartidas
└── __tests__/           # Pruebas unitarias