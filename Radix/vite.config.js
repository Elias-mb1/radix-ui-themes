import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        // Här kan du lägga till inställningar för CSS-preprocessorer om det behövs
      },
    },
  },
});
