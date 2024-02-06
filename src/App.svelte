<script>
    import Header from "./UI/Header.svelte";
    import MeetupGrid from "./Meetups/MeetupGrid.svelte";
    import TextInput from "./UI/TextInput.svelte";
    import Button from "./UI/Button.svelte";
    import EditMeetup from'./Meetups/EditMeetup.svelte';

    let meetups =[
        {id:'m1',
        title: 'COding Bootcamp',
        description:"HJHIHIHIHIHHIHIHI",
        subtitle:'Learn Hard',
        imageUrl:"https://i.namu.wiki/i/pcuapOq_pmNJ-l3XnG1-5y-FawoBIe9NV6Xs8n8s4l9NxmbdzN34XJxhpm1iy6uWMK2MMcxPtD9_S3Wv1HGQxw.webp",
        address:'부산광역시 어쩌구저쩌구',
        contactEmail: '111111.com',
        isFavorite:false
        },
        {id:'m2',
        title: 'C0ding Bootcamp',
        subtitle:'Learn Hard! ! ! !',
        imageUrl:"",
        description:"asdasdasdasdasd",
        address:'부산광역시 어쩌구저쩌구',
        contactEmail: '1132231.com',
        isFavorite:false
        }
    ];
    let editMode;

    function cancelEdit(){
        editMode=null;
    }

    function addMeetup(event){
        const newMeetup ={
            id:Math.random().toString(),
            title:event.detail.title,
            subtitle:event.detail.subtitle,
            description:event.detail.description,
            imageUrl:event.detail.imageUrl,
            contactEmail:event.detail.email,
            address:event.detail.address
        };
        meetups = [newMeetup,...meetups];
        editMode = null;
    }
    function toggleFavorite(event){
        const id = event.detail;
        const updatedMeetup = {...meetups.find(m=> m.id === id)};
        updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
        const meetupIndex = meetups.findIndex(m =>m.id ===id);
        const updatedMeetups = [...meetups];
        updatedMeetups[meetupIndex]= updatedMeetup;
        meetups = updatedMeetups;
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
    <MeetupGrid {meetups} on:togglefavorite="{toggleFavorite}" />
</main>