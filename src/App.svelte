<script>
    import Header from "./UI/Header.svelte";
    import MeetupGrid from "./Meetups/MeetupGrid.svelte";
    import TextInput from "./UI/TextInput.svelte";
    import Button from "./UI/Button.svelte";
    let title="";
    let subtitle="";
    let address="";
    let email="";
    let description="";
    let imageUrl="";

    let meetups =[
        {id:'m1',
        title: 'COding Bootcamp',
        description:"HJHIHIHIHIHHIHIHI",
        subtitle:'Learn Hard',
        imageUrl:"https://i.namu.wiki/i/pcuapOq_pmNJ-l3XnG1-5y-FawoBIe9NV6Xs8n8s4l9NxmbdzN34XJxhpm1iy6uWMK2MMcxPtD9_S3Wv1HGQxw.webp",
        address:'부산광역시 어쩌구저쩌구',
        contactEmail: '111111.com'
        },
        {id:'m2',
        title: 'C0ding Bootcamp',
        subtitle:'Learn Hard! ! ! !',
        imageUrl:"",
        description:"asdasdasdasdasd",
        address:'부산광역시 어쩌구저쩌구',
        contactEmail: '1132231.com'
        }
    ];
    function addMeetup(){
        const newMeetup ={
            id:Math.random().toString(),
            title:title,
            subtitle:subtitle,
            description:description,
            imageUrl:imageUrl,
            contactEmail:email,
            address:address
        };
        meetups = [newMeetup,...meetups];
    }
</script>
<style>
    main{
        margin-top:5rem ;
    }
    form{
        width: 30rem;
        max-width: 90%;
        margin: auto;
    }
</style>
<Header />
<main>
    <form on:submit|preventDefault="{addMeetup}">
        <TextInput id="title" 
        label="Title" 
        type="text"
        value={title}
        on:input="{event=> (title = event.target.value)}"/>
        <TextInput id="subtitle" 
        label="Subtitle" 
        type ="text"
        value={subtitle}
        on:input="{event=>(subtitle = event.target.value)}"/>
        <TextInput id="address" 
        label="Address" 
        type="text"
        value={address}
        on:input="{event=>(address = event.target.value)}"/>
        <TextInput id="imageUrl" 
        label="Image URL" 
        value={imageUrl}
        on:input="{event=> (imageUrl = event.target.value)}"/>
        <TextInput id="email" 
        label="E-mail" 
        value={email}
        type = "email"
        on:input="{event=> (email = event.target.value)}"/>
        <TextInput id="description" 
        label="Description" 
        value={description}
        controlType="textarea"
        on:input="{event=> (description = event.target.value)}"/>
        <Button type="submit" caption="Save"/>
        </form>
    <MeetupGrid {meetups} />
</main>