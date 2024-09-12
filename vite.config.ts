import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/https://github.com/fs-jun24-team5/group_project_team5/',  
  build: {
    outDir: 'dist',  
  },
})
