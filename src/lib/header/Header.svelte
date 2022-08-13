<script lang="ts">
	import { page } from '$app/stores';
	import logo from './bne.svg';
</script>

<header class="headerContent ">
	<div class="headerContent__logoContent ">
		<a 
		class="headerContent__logoContent__link "
		href="https://kit.svelte.dev">
			<img 
			class="headerContent__logoContent__link__img "
			src={logo} alt="SvelteKit" />
		</a>
	</div>

	<nav class="headerContent__nav">


		<ul class="headerContent__nav__list">
			<li 
			class:active={$page.url.pathname === '/'} 
			class="headerContent__nav__list__item">
				<a 
				class="headerContent__nav__list__item-text"
				sveltekit:prefetch href="/">Home</a></li>

			<li 
			class="headerContent__nav__list__item"
			class:active={$page.url.pathname === '/about'}>
				<a 
				class="headerContent__nav__list__item-text"
				sveltekit:prefetch href="/about">About</a>
			</li>

			<li
			class="headerContent__nav__list__item" 
			class:active={$page.url.pathname === '/todos'}>
				<a 
				class="headerContent__nav__list__item-text"
				sveltekit:prefetch href="/todos">Todos</a>
			</li>

			<li
			class="headerContent__nav__list__item"
			class:active={$page.url.pathname === '/books'}>
				<a 
				class="headerContent__nav__list__item-text"
				sveltekit:prefetch href="/books">Books</a>
			</li>

		</ul>

	</nav>

</header>

<style type="text/scss"> 
	@import './Header.scss';
</style>
