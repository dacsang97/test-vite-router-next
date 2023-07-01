import { defineConfig } from "vite";
import routerNext from "@chillgroup/vite-router-next";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), routerNext()],
});
