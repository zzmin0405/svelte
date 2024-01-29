<script>
    import Header from "./UI/Header.svelte";
    import MeetupGrid from "./Meetups/MeetupGrid.svelte";

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
        // meetups.push(newMeetup);
        meetups = [newMeetup,...meetups];
    }
</script>
<style>
    main{
        margin-top:5rem ;
    }
</style>
<Header />
<main>
    <form on:submit|preventDefault="{addMeetup}">
        <div class="form-control">
            <label for="title">title</label>
            <input type="text" id="title" bind:value={title}/>
        </div>
        <div class="form-control">
            <label for="subtitle">subtitle</label>
            <input type="text" id="subtitle"bind:value={subtitle}/>
            </div>
        <div class="form-control">
            <label for="address">address</label>
             <input type="text" id="address"bind:value={address}/>
        </div>
        <div class="form-control">
            <label for="imageUrl">Image URL</label>
             <input type="text" id="imageUrl"bind:value={imageUrl}/>
        </div>
        <div class="form-control">
            <label for="contactEmail">E-mail</label>
            <input type="text" id="contactEmail"bind:value={email}/>
        </div>
        <div class="form-control">
            <label for="description">description</label>
            <textarea rows="3" id="description"bind:value={description}/>
        </div>
        <button type="submit">Save</button>
    </form>
    <MeetupGrid {meetups} />
</main>