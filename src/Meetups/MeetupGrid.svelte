<script>
  import { createEventDispatcher } from "svelte";
  import MeetupItem from "./MeetupItem.svelte";
  import MeetupFilter from "./MeetupFilter.svelte";
  import Button from "../UI/Button.svelte";
  import {scale,fly} from "svelte/transition";
  import {flip} from "svelte/animate";
  export let meetups;
  const dispatch = createEventDispatcher();
  let favsOnly = false;
  function setfiler(event){
    favsOnly = event.detail ===1;
  }
  $: filteredMeetups = favsOnly ? meetups.filter(m => m.isFavorite) : meetups;
</script>

<style>
  #meetups {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
  #meetup-controls{
    margin: 1rem;
    display :flex;
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    #meetups {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
<section id="meetup-controls">
  <MeetupFilter on:select={setfiler}/>
  <Button on:click="{()=>dispatch('add')}">New Meetup</Button>

</section>
<section id="meetups">
  {#each filteredMeetups as meetup (meetup.id)}
  <div  animate:flip={{duration:50}}>
    <MeetupItem 
    id={meetup.id}
    title={meetup.title}
    subtitle={meetup.subtitle}
    description={meetup.description}
    imageUrl={meetup.imageUrl}
    email={meetup.contactEmail}
    address={meetup.address}
    isFav={meetup.isFavorite} 
    on:showdetails
    on:edit/>
  </div>
  {/each}
</section>
