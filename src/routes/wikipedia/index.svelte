<script lang="ts">
	import { enhance } from '$lib/form';
	import Content from '$lib/Content.svelte';
	import Popup from '$lib/Popup.svelte';
	import Modal from '$lib/Modal.svelte';
	import { modal } from '../store.ts';

	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	
	var reviews = '';
	function show_review(review) {
		reviews = review;		
	}

	export let wikis: any[], review: reviews;


</script>




<svelte:head>
	<title>Wikipedia</title>
</svelte:head>

<div class="wikiContainer">

	<div class="wikiContainer__list">

		{#each wikis as data(data.id)}
	
			<div class="wikiContainer__list__item">
				<p>{data.email}</p>
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