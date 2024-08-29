import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MainSection from '../MainSection/MainSection';

const Layout = () => {
	return (
		<>
			<Header />
			<div>
                <MainSection/>
            </div>
            <Footer/>
		</>
	);
};

export default Layout;
