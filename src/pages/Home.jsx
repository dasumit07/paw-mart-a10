import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Banner from './Banner';
import Category from './Category';
import RecentListing from './RecentListing';
import AdoptFromPawmart from './AdoptFromPawmart';
import MeetHero from './MeetHero';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData();

  useEffect(() => {
    document.title = "Home | PawMart";
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Banner></Banner>
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Category></Category>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <RecentListing data={data}></RecentListing>
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AdoptFromPawmart></AdoptFromPawmart>
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <MeetHero></MeetHero>
      </motion.div>
    </div>
  );
};

export default Home;