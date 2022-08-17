<script lang="ts">
	import { enhance } from '$lib/form';
	import Content from '$lib/Content.svelte';
	import Popup from '$lib/Popup.svelte';
	import Modal from '$lib/Modal.svelte';
	import { modal } from '../store.ts';

	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';


	export let wikis: any[] = [];
	let lista = '';

	$: estadoLista = lista;

	function elementClick(email: string) {
		lista = email;
	};


</script>




<svelte:head>
	<title>Wikipedia</title>
</svelte:head>

<div class="wikiContainer">

	<div class="wikiContainer__list">

		<p>Lista: {estadoLista}</p>

		{#each wikis as data(data.id)}
	
			<div class="wikiContainer__list__item">
				<p on:click="{elementClick(data.email)}">{data.email}</p>
				<p>{data.name}</p>
				<Modal show={$modal}>
					<Content />
				</Modal>
			</div>
	
		{/each}

	</div>


</div>

<style type="text/scss">
	@import './index.scss';
</style>