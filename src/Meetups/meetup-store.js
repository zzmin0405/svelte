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
    imageUrl: "",
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
  toogleFavorite: (id) => {
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
