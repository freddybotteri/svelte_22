<script lang="ts">
    import peopleImg from './people.svg';

    export let title;
    export let subTitle;

</script>

<div class="cardSimpleContainer">

    <div class="cardSimpleContainer__imgContainer">
        <img 
            class="cardSimpleContainer__imgContainer__img"
			src={peopleImg} alt="SvelteKit" />
    </div>

    <div class="cardSimpleContainer__titleContainer">
        <h3 class="cardSimpleContainer__titleContainer__title">
            {title} 
        </h3>
    </div>

    <div class="cardSimpleContainer__subTitleContainer">
        <p class="cardSimpleContainer__subTitleContainer__subTitle">
            {subTitle} 
        </p>
    </div>


</div>


<style type="text/scss">
    @import './Card_simple.scss';
</style>