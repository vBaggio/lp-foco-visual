import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — gera HTML estático para deploy no Vercel
  // ou em qualquer CDN. Combina com LP de conteúdo predominantemente fixo.
  output: "export",

  // Necessário com static export — desliga otimização sob demanda do next/image
  // (que precisaria de servidor). Para LP estática, melhor pré-otimizar manualmente
  // (WebP/AVIF) e servir como está.
  images: {
    unoptimized: true,
  },

  // Trailing slash para compatibilidade com hosts que esperam diretórios
  trailingSlash: false,
};

export default nextConfig;
