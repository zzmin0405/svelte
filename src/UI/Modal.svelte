<script>
  import Button from "./Button.svelte";
    export let title;
    import {createEventDispatcher} from'svelte';
    import {fade,fly} from 'svelte/transition';
    const dispatch = createEventDispatcher();

    function closeModal(){
        dispatch('cancel');
    }
</script>
<style>
  .section::-webkit-scrollbar {
   width: 10px;
   }

   /* Track */
   .section::-webkit-scrollbar-track {
   box-shadow: inset 0 0 2px grey; 
   border-radius: 3px;
   }

   /* Handle */
   .section::-webkit-scrollbar-thumb {
   background: #4b4b4b; 
   border-radius: 3px;
   }
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  z-index: 10;
}

.modal {
  position: fixed;
  top: 10vh;
  left: 10%;
  width: 80%;
  max-height: 80vh;
  background: white;
  border-radius: 5px;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  overflow: scroll;
}

h1 {
  padding: 1rem;
  margin: 0;
  border-bottom: 1px solid #ccc;
  font-family: 'Roboto Slab', sans-serif;
}

.content {
  padding: 1rem;
}

footer {
  padding: 1rem;
}

@media (min-width: 768px) {
  .modal {
    width: 40rem;
    left: calc(50% - 20rem);
  }
}

</style>
<div transition:fade class="modal-backdrop" on:click={closeModal}></div>
<div  transition:fly={{y:60}} class="modal section">
    <h1>{title}</h1>
    <div class="content">
        <slot/>
    </div>
    <footer>
        <slot name="footer">
            <Button on:click={closeModal}>Close</Button>
        </slot>
    </footer>
</div>