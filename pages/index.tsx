import {MongoClient} from "mongodb";
import {NextPage} from "next";

import {MeetupPropsI} from "@features/Meetups/components/Meetup";
import MeetupsList from "@features/Meetups/components/MeetupsList";


interface HomePagePropsI {
    meetups: MeetupPropsI[]

}

const HomePage: NextPage<HomePagePropsI> = ({meetups}) => {
    return <MeetupsList meetups={meetups}/>
};

export const getStaticProps = async () => {
    const posts = [
        {
            src: 'https://wallpapercave.com/wp/wp12135919.jpg',
            title: 'My title',
            address: 'some address',
            description: 'Meetup description',
            id: 'm1'
        },
        {
            src: 'https://wallpapercave.com/wp/wp12133517.jpg',
            title: 'My title',
            address: 'some address',
            description: 'Meetup description',
            id: 'm2'
        },
        {
            src: 'https://wallpapercave.com/wp/wp11610492.jpg',
            title: 'My title',
            address: 'some address',
            description: 'Meetup description',
            id: 'm3'
        },
    ]
    return {
        props: {
            meetups: posts
        },
        revalidate: 10,
    }
}

export default HomePage;
