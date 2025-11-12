import React from 'react';
import Banner from './Banner';
import Category from './Category';
import RecentListing from './RecentListing';
import AdoptFromPawmart from './AdoptFromPawmart';
import MeetHero from './MeetHero';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <RecentListing data={data}></RecentListing>
            <AdoptFromPawmart></AdoptFromPawmart>
            <MeetHero></MeetHero>
        </div>
    );
};

export default Home;