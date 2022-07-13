<script>
    import GoneFishin from "../GoneFishin/GoneFishin.svelte";
    import Sick from "../Sick/Sick.svelte";
    export let ref;
    export let goneFishin;
    export let sick
</script>
<div {ref}>
    <h2>Will</h2>
    {#if goneFishin}<GoneFishin />{/if}
    {#if sick}<Sick />{/if}
</div>