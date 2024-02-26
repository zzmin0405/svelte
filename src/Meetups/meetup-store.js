import { writable } from "svelte/store";

const meetups = writable([
  {
    id: "m1",
    title: "COding Bootcamp",
    description: "HJHIHIHIHIHHIHIHI",
    subtitle: "Learn Hard",
    imageUrl:
      "https://i.namu.wiki/i/pcuapOq_pmNJ-l3XnG1-5y-FawoBIe9NV6Xs8n8s4l9NxmbdzN34XJxhpm1iy6uWMK2MMcxPtD9_S3Wv1HGQxw.webp",
    address: "부산광역시 어쩌구저쩌구",
    contactEmail: "111111.com",
    isFavorite: false,
  },
  {
    id: "m2",
    title: "C0ding Bootcamp",
    subtitle: "Learn Hard! ! ! !",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceDNPZFn8Y9fTrJ3LvVafCFSNpECSH83xo0Ar1ChdIEcGfT1ze0t-QJzxfERd_fBRGsQ&usqp=CAU",
    description: "asdasdasdasdasd",
    address: "부산광역시 어쩌구저쩌구",
    contactEmail: "1132231.com",
    isFavorite: false,
  },
]);
const customMeetupsStore = {
  subscribe: meetups.subscribe,
  addMeetup: (meetupData) => {
    const newMeetup = {
      ...meetupData,
      id: Math.random().toString(),
      isFavorite: false,
    };
    meetups.update((items) => {
      return [newMeetup, ...items];
    });
  },
  updateMeetup: (id, meetupData) => {
    meetups.update((items) => {
      const meetupIndex = items.findIndex((i) => i.id === id);
      const updatedMeetup = { ...items[meetupIndex], ...meetupData };
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    });
  },
  removeMeetup: (id) => {
    meetups.update((items) => {
      return items.filter((i) => i.id !== id);
    });
  },
  toggleFavorite: (id) => {
    meetups.update((items) => {
      const updatedMeetup = { ...items.find((m) => m.id === id) };
      updatedMeetup.isFavorite = !updatedMeetup.isFavorite;
      const meetupIndex = items.findIndex((m) => m.id === id);
      const updatedMeetups = [...items];
      updatedMeetups[meetupIndex] = updatedMeetup;
      return updatedMeetups;
    });
  },
};
export default customMeetupsStore;
