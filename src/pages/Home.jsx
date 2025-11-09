import React from 'react';
import Banner from './Banner';
import Category from './Category';
import RecentListing from './RecentListing';
import AdoptFromPawmart from './AdoptFromPawmart';
import MeetHero from './MeetHero';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <RecentListing></RecentListing>
            <AdoptFromPawmart></AdoptFromPawmart>
            <MeetHero></MeetHero>
        </div>
    );
};

export default Home;