<script>
    import meetups from "./Meetups/meetup-store.js";
    import Header from "./UI/Header.svelte";
    import MeetupGrid from "./Meetups/MeetupGrid.svelte";
    import TextInput from "./UI/TextInput.svelte";
    import Button from "./UI/Button.svelte";
    import EditMeetup from'./Meetups/EditMeetup.svelte';
    import MeetupDetail from "./Meetups/MeetupDetail.svelte";
    let editMode;
    let page = 'overview';
    let pageData = {};
    let editedId;
    function cancelEdit(){
        editMode=null;
        editedId=null;
    }
    function savedMeetup(event){
        editedId=null;
        editMode = null;
    }
    function showDetails(event){
        page='details';
        pageData.id=event.detail;
    }
    function closeDetail(){
        page = 'overview';
        pageData ={};
    }
    function startEdit (event) {
        editMode = 'edit';
        editedId = event.detail;
    }
</script>
<style>
    main{
        margin-top:5rem ;
    }

</style>
<Header />
<main>
{#if page ==='overview'}
    {#if editMode ==='edit'}
    <EditMeetup id={editedId} on:save="{savedMeetup}" on:cancel={cancelEdit}/>
    {/if}
    <MeetupGrid meetups={$meetups} on:showdetails={showDetails} on:edit="{startEdit}" on:add={()=>{editMode = 'edit'}}/>
{:else}
    <MeetupDetail id={pageData.id} on:close={closeDetail}/>
{/if}
</main>