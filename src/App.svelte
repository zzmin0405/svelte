<script>
    import meetups from "./Meetups/meetup-store.js";
    import Header from "./UI/Header.svelte";
    import MeetupGrid from "./Meetups/MeetupGrid.svelte";
    import TextInput from "./UI/TextInput.svelte";
    import Button from "./UI/Button.svelte";
    import EditMeetup from'./Meetups/EditMeetup.svelte';
    let loadedmeetups = meetups
    let editMode;

    function cancelEdit(){
        editMode=null;
    }
    function addMeetup(event){
        const meetupData ={
            id:Math.random().toString(),
            title:event.detail.title,
            subtitle:event.detail.subtitle,
            description:event.detail.description,
            imageUrl:event.detail.imageUrl,
            contactEmail:event.detail.email,
            address:event.detail.address
        };
        loadedmeetups.addMeetup(meetupData);
        editMode = null;
    }
    function toggleFavorite(event){
        const id = event.detail;
        meetups.toogleFavorite(id);
    }
</script>
<style>
    main{
        margin-top:5rem ;
    }
    .meetup-controls{
        margin: 1rem;
    }
</style>
<Header />
<main>
    <div class="meetup-controls">
        <Button c on:click="{()=>editMode = 'add'}">New Meetup</Button>
    </div>
    {#if editMode ==='add'}
    <EditMeetup on:save="{addMeetup}" on:cancel={cancelEdit}/>
    {/if}
    <MeetupGrid meetups={$meetups} on:togglefavorite="{toggleFavorite}" />

</main>