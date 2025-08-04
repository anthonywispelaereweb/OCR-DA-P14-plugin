import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        dts({ insertTypesEntry: true }) // pour générer index.d.ts
    ],
    build: {
        lib: {
            entry: './src/index.js',
            name: 'HRnetPluginModalAw',
            fileName: 'hrnet-plugin-modal-aw',
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});