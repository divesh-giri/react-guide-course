import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image: "https://images.unsplash.com/photo-1631788376573-07da6bab9839",
    address: "Connaught Place, New Delhi, Delhi, India",
    description: "First Meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: "https://images.unsplash.com/photo-1631788376573-07da6bab9839",
    address: "Sector 18, Noida, India",
    description: "Second Meetup",
  },
];

const HomePage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// export const getServerSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;
//   console.log(req);
//   console.log(res);

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://divesh251:test123@cluster0.zdpkv.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          image: meetup.image,
          address: meetup.address,
          id: meetup._id.toString(),
        };
      }),
    },
    revalidate: 1,
  };
};

export default HomePage;
