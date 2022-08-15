<script lang="ts">
	import { enhance } from '$lib/form';
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

<div class="container">

	<div class="books">
		{#each wikis as data(data.id)}
	
			<div class="book_author">
				{data.name}
			</div>
	
		{/each}

	</div>


</div>

<style type="text/scss">
	@import './index.scss';
</style>