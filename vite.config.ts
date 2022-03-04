import { defineConfig } from "vite";
import { resolve } from "path";
import { chromeExtension } from "vite-plugin-chrome-extension";
import eslintPlugin from 'vite-plugin-eslint';
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
	build: {
		rollupOptions: {
			input: "src/manifest.json",
		},
	},
	plugins: [
    	vue(),
	    chromeExtension(),
		eslintPlugin()
  ],
});
