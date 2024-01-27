<script>
    import Header from "./UI/Header.svelte";
    import MeetUpItemts from "./MeetUps/MeetUpItems.svelte";
    const meetups =[
        {id:'m1',
        title: 'COding Bootcamp',
        subtitle:'Learn Hard',
        imageUrl:"https://i.namu.wiki/i/pcuapOq_pmNJ-l3XnG1-5y-FawoBIe9NV6Xs8n8s4l9NxmbdzN34XJxhpm1iy6uWMK2MMcxPtD9_S3Wv1HGQxw.webp",
        adrees:'부산광역시 어쩌구저쩌구',
        contactEmail: '111111.com'
        },
        {id:'m2',
        title: 'C0ding Bootcamp',
        subtitle:'Learn Hard! ! ! !',
        adrees:'부산광역시 어쩌구저쩌구',
        contactEmail: '1132231.com'
        }
    ]
</script>
<style>
    #meetups{
        margin-top:5rem ;
    }
</style>
<Header />
<section id="meetups">
    {#each meetups as meetup}
    <MeetUpItemts />
{/each}
</section>
