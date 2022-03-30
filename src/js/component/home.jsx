import React from "react";

//include images into your bundle
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
//create your first component
const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<div className="contentBox">
				<Jumbotron />
				<Card />
			</div>
			<div class="card-footer text-muted"></div>
		</div>
	);
};

export default Home;
