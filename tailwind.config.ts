import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			fontFamily: {
				sans: ["Inter", "sans-serif"],
				heading: ["Orbitron", "monospace"],
				tech: ["Orbitron", "monospace"],
			},
			colors: {
				border: {
					DEFAULT: "hsl(var(--border))",
					accent: "hsl(var(--border-accent))",
				},
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
					glow: "hsl(var(--primary-glow))",
					variant: "hsl(var(--primary-variant))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
					glow: "hsl(var(--accent-glow))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
					hover: "hsl(var(--card-hover))",
				},
				success: {
					DEFAULT: "hsl(var(--success))",
					foreground: "hsl(var(--success-foreground))",
				},
				warning: "hsl(var(--warning))",
				info: "hsl(var(--info))",
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-border': 'var(--gradient-border)',
				'gradient-text': 'var(--gradient-text)',
				'gradient-hero': 'var(--gradient-hero)',
			},
			boxShadow: {
				'card': 'var(--shadow-card)',
				'hover': 'var(--shadow-hover)',
				'glow': 'var(--shadow-glow)',
				'accent': 'var(--shadow-accent)',
				'inner': 'var(--shadow-inner)',
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
				"fade-in": {
					"0%": {
						opacity: "0",
						transform: "translateY(20px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"slide-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(40px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"glow": {
					"0%, 100%": { boxShadow: "var(--shadow-glow)" },
					"50%": { boxShadow: "0 0 60px rgba(0, 255, 255, 0.5)" },
				},
				"float": {
					"0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
					"50%": { transform: "translateY(-15px) rotate(2deg)" },
				},
				"shimmer": {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(100%)" },
				},
				"pulse-border": {
					"0%, 100%": { borderColor: "hsl(var(--primary))" },
					"50%": { borderColor: "hsl(var(--accent))" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				"fade-in": "fade-in 0.6s ease-out",
				"slide-up": "slide-up 0.8s ease-out",
				"glow": "glow 3s ease-in-out infinite alternate",
				"float": "float 6s ease-in-out infinite",
				"shimmer": "shimmer 2s infinite",
				"pulse-border": "pulse-border 2s ease-in-out infinite",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;