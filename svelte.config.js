import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'docs',
			assets: 'docs',
			fallback: null,
			precompress: false,
		}),
		appDir: 'internal',
		paths: {
			base: dev ? '' : '/serious_survey',
		},
		vite: {
			ssr: {
				noExternal: ['three'],
			},
			prerender: {
				default: true,
			}
		}
	},
};

export default config;
