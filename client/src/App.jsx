import React, { useState, useEffect } from 'react'
import {
	WhoWeAre,
	Footer,
  OurServices,
  Contact,
	Banner,
	OurBlog,
	WhoWeAre
} from './components';

import drawerToogleButton from './components/SideDrawer/DrawerToggleButton';
import Toolbar from './components/Toolbar/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import sideDrawer from './components/SideDrawer/SideDrawer';

function App () {

	const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

	const drawerToggleClickHandler = () => {
		setSideDrawerOpen(!sideDrawerOpen)
	}

	const backdropClickHandler = () => {
		setSideDrawerOpen(false)
	}

	
		//let sideDrawer;
		let backdrop;

		if(sideDrawerOpen){
			//sideDrawer = <SideDrawer></SideDrawer>;
			backdrop = <Backdrop click={backdropClickHandler}></Backdrop>;
		}
		return (
			<div style={{height: '100%'}}>
				<Toolbar drawerClickHandler={drawerToggleClickHandler}></Toolbar>
				<SideDrawer show={sideDrawerOpen}></SideDrawer>
			
				{backdrop}
				<main style={{marginTop: '64px'}}>					
					
						<Banner/>
					
						<WhoWeAre/>
				
						<OurServices/>
				
						<p>OurClients</p>
					
						<OurBlog/>						
				
						<Contact/>
					
					
						<Footer/>
					
				</main>
			</div>
		);
	
}

export default App;
