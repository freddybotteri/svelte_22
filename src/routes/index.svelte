<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Counter from '$lib/Counter.svelte';
	import Card_simple from '$lib/cards/card_simple.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section >

	<Card_simple title={'Nuevos usuarios 1'} subTitle={'Carnés, normas de uso, formación, preguntas frecuentes,...'}/>
	<Card_simple title={'Nuevos usuarios 2'} subTitle={'Horarios'}/>

</section>

<style>
	@import "./index.scss";
</style>
