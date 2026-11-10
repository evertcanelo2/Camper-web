import type { Metadata } from 'next';

// page.tsx es un Client Component y no puede exportar metadata, por eso va aquí
export const metadata: Metadata = {
  title: 'Camper VE | Links',
  description: 'Escríbenos por WhatsApp, mira el catálogo o síguenos en Instagram.',
};

export default function LinkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
