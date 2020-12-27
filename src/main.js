import App from './App.svelte';
import bootswatch from 'bootswatch/dist/cyborg/bootstrap.css';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
