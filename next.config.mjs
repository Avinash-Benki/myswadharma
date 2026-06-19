/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Static hosts (Netlify drag-and-drop / `out`) have no Image Optimization API.
  images: { unoptimized: true },
};

export default nextConfig;
