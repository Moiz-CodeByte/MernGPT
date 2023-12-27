// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({

//   plugins: [react()],
// })
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Update with your actual app name or leave it as '/' if your app is at the root.
  plugins: [react()],
  server: {
    proxy: {
      "/api" : "https://mern-gpt.azurewebsites.net"
    }
    
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'main.tsx'), // Adjust the path accordingly
      },
  // server: {
  //   port: process.env.PORT, // Specify the port for the development server (optional, defaults to 3000)
  //   open: true, // Open the default browser when the development server starts (optional, defaults to false)
   
  //   }
  });
