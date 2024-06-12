import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tailwindcss from 'tailwindcss'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    // svgr({ 
    //   svgrOptions: {
    //     // svgr options
    //   },
    // }),
  ],
  esbuild: {
    jsx: 'transform', // enable JSX support in.js files
  },
  env: {
    SYNCFUSION_LICENSE: 'Ngo9BigBOggjHTQxAR8/V1NBaF1cXmhPYVJwWmFZfVpgfF9HZ1ZQTWYuP1ZhSXxXdkNjUH9WcXNUT2FeUUI=',
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }, 
})
