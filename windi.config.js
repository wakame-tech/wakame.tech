export default {
  darkMode: "media",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  scan: {
    exclude: [
      "node_modules",
      ".git",
      "dist",
      "public",
      ".cache",
      ".temp",
      "markdown",
    ],
  },
  transformCSS: "pre",
}
