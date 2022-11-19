import svgr from '@honkhonk/vite-plugin-svgr'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { ViteAliases } from 'vite-aliases'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: 'build',
	},
	plugins: [
		react(),
		svgr(),
		ViteAliases({
			prefix: '@',
			createLog: true,
			deep: true,
			logPath: 'src/logs',
			useConfig: true,
			useTypescript: true,
		}),
	],
})
