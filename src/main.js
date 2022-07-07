import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Lydia',
		greeting: 'Farewell'
	}
});

export default app;