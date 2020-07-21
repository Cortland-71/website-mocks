import React from 'react';
import '../styleIdea1.css';
import Top from '../top';
import Banner from './banner';
import Coffee from './coffee';
import Nav from './nav';


const Home = () => {
    return (
        <div className="sample-container">
            <Top />
            <Coffee />
            <Banner />
            
            <Nav />
        </div>
    )
}
export default Home;