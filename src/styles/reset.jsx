import { Global, css } from "@emotion/react";

export default function ResetStyles() {
	return (
		<Global
			styles={css`
				:root {
					-webkit-text-size-adjust: 100%;
					text-size-adjust: 100%;
				}

				*,
				*::before,
				*::after {
					box-sizing: border-box;
				}

				body,
				h1,
				h2,
				h3,
				h4,
				h5,
				h6,
				p,
				figure,
				blockquote,
				dl,
				dd {
					margin: 0;
				}

				html,
				body,
				#root {
					height: 100%;
				}

				body {
					line-height: 1.5;
					-webkit-font-smoothing: antialiased;
					-moz-osx-font-smoothing: grayscale;
					text-rendering: optimizeLegibility;
					background-color: transparent;
					color: inherit;
					-webkit-tap-highlight-color: transparent; /* iOS tap highlight */
				}

				b,
				strong {
					font-weight: bolder;
				}

				ul[role="list"],
				ol[role="list"],
				ul,
				ol {
					list-style: none;
					padding: 0;
					margin: 0;
				}

				a {
					background-color: transparent;
					color: inherit;
					text-decoration: none;
					text-decoration-skip-ink: auto;
				}

				img,
				picture,
				video,
				canvas,
				svg {
					display: block;
					max-width: 100%;
				}

				img,
				video {
					height: auto;
				}

				table {
					border-collapse: collapse;
					border-spacing: 0;
				}

				input,
				button,
				textarea,
				select {
					font: inherit;
					color: inherit;
				}

				button,
				input,
				select,
				textarea {
					background: transparent;
					border: 0;
					margin: 0;
					padding: 0;
					outline: none; /* replaced by :focus-visible below */
					-webkit-appearance: none;
					-moz-appearance: none;
					appearance: none;
					border-radius: 0; /* iOS */
				}

				button {
					cursor: pointer;
				}
				button:disabled,
				[type="button"][disabled],
				[type="submit"][disabled] {
					cursor: default;
				}

				::placeholder {
					color: inherit;
					opacity: 0.6;
				}
				input[type="number"]::-webkit-outer-spin-button,
				input[type="number"]::-webkit-inner-spin-button {
					-webkit-appearance: none;
					margin: 0;
				}
				input[type="number"] {
					-moz-appearance: textfield;
					appearance: textfield;
				}
				input[type="search"]::-webkit-search-decoration,
				input[type="search"]::-webkit-search-cancel-button,
				input[type="search"]::-webkit-search-results-button,
				input[type="search"]::-webkit-search-results-decoration {
					-webkit-appearance: none;
				}
				textarea {
					resize: vertical;
					overflow: auto;
				}

				fieldset {
					border: 0;
					margin: 0;
					padding: 0;
					min-width: 0;
				}
				legend {
					padding: 0;
				}

				summary {
					display: list-item;
					cursor: pointer;
				}
				details > summary {
					list-style: none;
				}

				blockquote,
				q {
					quotes: none;
				}
				blockquote::before,
				blockquote::after,
				q::before,
				q::after {
					content: "";
					content: none;
				}

				hr {
					height: 0;
					color: inherit;
					border: 0;
					border-top: 1px solid currentColor;
				}

				address {
					font-style: normal;
				}

				:focus {
					outline: none;
				}
				:focus-visible {
					outline: none;
				}

				@media (prefers-reduced-motion: reduce) {
					html:focus-within {
						scroll-behavior: auto;
					}
					*,
					*::before,
					*::after {
						animation-duration: 0.01ms !important;
						animation-iteration-count: 1 !important;
						transition-duration: 0.01ms !important;
						scroll-behavior: auto !important;
					}
				}
			`}
		/>
	);
}

