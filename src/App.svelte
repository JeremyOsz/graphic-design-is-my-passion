<script>
	import Jeremy from "./components/Jeremy/Jeremy.svelte";
	import Alvin from "./components/Alvin/Alvin.svelte";
	import Amelia from "./components/Amelia/Amelia.svelte";
	import Will from "./components/Will/Will.svelte";
	export let name;
	export let greeting;
	const capitalisedGreeting = greeting[0].toUpperCase() + greeting.slice(1);
</script>

<main>
	<h1>Hello {name}!</h1>
	<h2>{capitalisedGreeting} from the dev team!</h2>
	<div class='typewriter'>
		<p>You may know we write code</p>
	</div>
	<div>
		<p class="comic-sans">... But Graphic design is our passion!</p>
	</div>

	<div class='artboard'>
		<Jeremy ref="uglyBox"/>
		<Alvin  ref="uglyBox"/>
		<Amelia ref="uglyBox"/>
		<Will ref="uglyBox"/>
	</div>
	
</main>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		background: #ff161699;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 900;
		margin-top: -50px;
	}

	@media (min-width: 640px) { 
		main {
			max-width: none;
		}
	}

	.artboard{
		display: flex;
		flex-wrap: wrap;
	}

	:global([ref=uglyBox]){
		flex: 49%;
		border: 4px dotted rgb(251, 235, 0);
		height: 400px;
	}

	.comic-sans {
		font-family: "Comic Sans MS", "Comic Sans", cursive;
    font-size: 32px;
    font-weight: 800;
    font-kerning: none;
    letter-spacing: 16px;
    line-height: 1.4;
	text-align: left;
	width: 500px;
	margin-left: 300px;
	color: blueviolet;
	}

	.typewriter { 
		display: flex;
		width: fit-content;
		margin: auto;
	}

	.typewriter p{
		font-family: "Roboto Mono", monospace;
		overflow: hidden; /* Ensures the content is not revealed until the animation */
		border-right: 0.15em solid orange; /* The typwriter cursor */
		white-space: nowrap; /* Keeps the content on a single line */
		margin: 0 auto; /* Gives that scrolling effect as the typing happens */
		letter-spacing: 0.15em; /* Adjust as needed */
		animation: typing 3.5s steps(40, end),
			blink-caret 0.75s step-end infinite;
		font-weight: 500;
		font-size: 31px;
		color: greenyellow;
	}

	/* The typing effect */
	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 100%;
		}
	}

	/* The typewriter cursor effect */
	@keyframes blink-caret {
		from,
		to {
			border-color: transparent;
		}
		50% {
			border-color: orange;
		}
	}
</style>
