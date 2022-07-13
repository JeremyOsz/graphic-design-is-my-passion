<script>
    import GoneFishin from "../GoneFishin/GoneFishin.svelte";
    import Sick from "../Sick/Sick.svelte";
    export let ref;
    export let goneFishin;
    export let sick
</script>
<div {ref}>
    <h2>Jeremy</h2>
    <p>We will miss you lydia</p>
    <img src='/static/karaoke.gif' alt='minion doing karaoke'/>
    <p>Let us sing you oout with a round of karaoke</p>
    {#if goneFishin}<GoneFishin />{/if}
    {#if sick}<Sick />{/if}
</div>

<style>
    p{
        font-family: impact;
        font-weight: 700;
        letter-spacing: 15px;
        line-height: 0.8;
        font-size: 30px;
        color: floralwhite;
    }
</style>