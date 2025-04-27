import type {UserConfig} from 'vite';
import react from "@vitejs/plugin-react";

/**
 * Vite configuration.
 * 
 * @see https://vite.dev/config/
 */
export default {
  plugins: [react()]
} satisfies UserConfig;
