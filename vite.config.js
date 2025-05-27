import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr'; // ✅ Add this line

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()], // ✅ Add svgr to the plugins array
});
