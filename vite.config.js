import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '0.0.0.0',  // Allow access from your network
//     port: 5173,       // You can change the port if needed
//     allowedHosts: ['e9e6-45-112-29-36.ngrok-free.app']
//   }
// })
