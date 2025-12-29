import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
    plugins: [
        laravel({
            input: "resources/js/main.tsx",
            refresh: true,
        }),
        react(),
        mode === "development" && componentTagger(),
    ].filter(Boolean),

    resolve: {
        alias: {
            "@": path.resolve(__dirname, "resources/js"),
        },
    },

    server: {
        host: "localhost",
        port: 5173,
        watch: {
            ignored: ["**/storage/framework/views/**"],
        },
    },
}));
