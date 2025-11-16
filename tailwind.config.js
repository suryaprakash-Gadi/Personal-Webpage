// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { // Your existing colors
        'primary-bg': '#1a1a2e',
        'secondary-bg': '#16213e',
        'accent-1': '#00f5c3',
        'accent-2': '#e94560',
        'text-primary': '#e0e0e0',
        'text-secondary': '#a0a0a0',
      },
      fontFamily: {
        // MODIFICATION: Set JetBrains Mono as the default sans-serif font
        sans: ['"JetBrains Mono"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
        // The mono utility will also use JetBrains Mono, which is fine.
        // You can keep it explicit or rely on sans being JetBrains Mono now.
        // For clarity, keeping it explicit:
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      },
      animation: { // Your existing animations
        'text-focus-in': 'text-focus-in 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
        'slide-in-bottom': 'slide-in-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      keyframes: { // Your existing keyframes
        'text-focus-in': {
          '0%': { filter: 'blur(12px)', opacity: '0' },
          '100%': { filter: 'blur(0px)', opacity: '1' },
        },
        'slide-in-bottom': {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      },
    }
  },
  plugins: [
    // require('tailwind-scrollbar'), // If you added this
  ],
}