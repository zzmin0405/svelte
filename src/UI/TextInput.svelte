<script>
    export let controlType;
    export let id;
    export let label;
    export let rows;
</script>

<div class="form-control">
    <label for="{id}">{label}</label>
    {#if controlType ==='textarea'}
        <textarea rows="{rows}" id="{id}"bind:value={description}/>
    {:else} 
        <input type="text" id="{id}" bind:value={title}/>
    {/if}
</div>