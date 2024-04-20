<script>
    export let open = false;
    import { slide } from "svelte/transition";
    const handleClick = () => (open = !open);
</script>

<div class="accordion"  on:click={handleClick}>
    <div class="header">
        <div class="text">
            <slot name="head" />
        </div>
    </div>
    <span></span>

</div>
{#if open}
    <div class="details" transition:slide>
        <slot name="details" />
    </div>
{/if}

<style lang="scss">
    div.accordion {
        padding: 16px 8px;
        border-bottom: 1px solid var(--border-color-gray);
        font-size: var(--font-size-small-small);
        display: flex;
        align-content: center;
        justify-content: space-between;
        >span {
            width: 8px;
            height: 8px;
            border-top: 1px solid var(--font-gray);
            border-right: 1px solid var(--font-gray);
            display: inline-block;
            transform: rotate(135deg);
            top: 13px;
            right: 20px;
        }
    }
</style>
