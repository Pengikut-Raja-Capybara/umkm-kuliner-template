/**
 * Helper untuk resolve asset path dengan base URL
 * Otomatis handle GitHub Pages base path
 */
export const asset = (path: string): string => {
  // Hapus leading slash jika ada
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Gunakan import.meta.env.BASE_URL dari Vite
  const baseUrl = import.meta.env.BASE_URL;
  
  // Gabungkan base URL dengan path
  return `${baseUrl}${cleanPath}`;
};
