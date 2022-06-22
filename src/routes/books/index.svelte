<script lang="ts">
	import { enhance } from '$lib/form';
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	type book = {
		id: string;
		book_name: string;
		book_review: string;
	};
	
	var reviews = '';
	function show_review(review) {
		reviews = review;		
	}

	export let books: book[], review: reviews;


</script>

<svelte:head>
	<title>Books</title>
</svelte:head>

<div class="container">

	<div class="books">
		{#each books as book (book.id)}
	
			<div class="book" on:click={() => show_review(book.book_review)}>
			<div class="book_author">
				{book.book_author}
			</div>
			<div class="book_name">
				{book.book_name}
			</div>
	
		</div>
		<br>
	
		{/each}

	</div>

	<div class="review">

	<p id="content_review">
		{reviews}
	</p>
	</div>

</div>

<style>
	.container {
		display: flex;
		gap: 1em;
		overflow-x: auto;

	}
	.books{
		display: flex;
		flex-direction:column;
		width: 20em;
		min-width: 10em;
	}
	
	.book {
		text-align: center;
		cursor: pointer;
		padding: 0.3em;
		border-radius: 2em;
		box-shadow: 2px 5px rgba(93, 93, 93, 30%);
		background-color: indianred;
		
	}
	.book_author{
		color:#202020;
	}
	.book_name{
		color: aliceblue;
		font-size: large;
		font-weight: bold;
		font-style: italic;
	}
	.review{
		background-color:aliceblue;
		border-radius: 2em;
		margin-bottom: 1em;
		box-shadow: -4px 5px rgba(93, 93, 93, 30%);
		padding: 1em;
		font-size: large;
		text-align: justify;
		flex-basis: auto;
		width: 100%;
		min-width: 15em;

	}
</style>