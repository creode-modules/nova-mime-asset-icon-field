import {resolve} from 'path';
import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue'

async function getConfig() {
    return defineConfig({
        plugins: [vue()],

        build: {
            outDir: resolve(__dirname, 'dist'),
            emptyOutDir: true,
            target: 'ES2022',
            minify: true,
            manifest: true,
            lib: {
                entry: resolve(__dirname, 'resources/js/field.js'),
                name: 'tool',
                formats: ['umd'],
                fileName: () => 'js/field.js',
            },
            rollupOptions: {
                input: resolve(__dirname, 'resources/js/field.js'),
                external: ['vue', 'Nova', 'LaravelNova'],
                output: {
                    globals: {
                        vue: 'Vue',
                        nova: 'Nova',
                        'laravel-nova': 'LaravelNova',
                    },
                },
            },
        },

        server: {
            // respond to all network requests (same as '0.0.0.0')
            host: true,
            // we need a strict port to match on PHP side
            strictPort: true,
            port: 5173,
            hmr: {
                // Force the Vite client to connect via SSL
                // This will also force a "https://" URL in the hot file
                protocol: 'wss',
                // The host where the Vite dev server can be accessed
                // This will also force this host to be written to the hot file
                host: `${process.env.DDEV_HOSTNAME}`,
            }
        },
    });
}

export default getConfig();
