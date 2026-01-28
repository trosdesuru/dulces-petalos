import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // TypedRoutes para Habilitar las rutas tipadas
  typedRoutes: true,
  // Configuración de imágenes remotas
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dulces-petalos.jakala.es',
      },
    ],
  },
};

export default nextConfig;
