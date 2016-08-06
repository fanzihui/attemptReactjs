import React from "react";
import { Link }  from "react-router";
import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component{
	// navigate() {
	// 	this.props.history.replaceState(null,"/")
	// }
	render() {
		// const { history } = this.props;
		// console.log(history.isActive("archives"));
		const { location } = this.props;
		const containerStyle = {
		  marginTop: "60px"
		};
		console.log("layout");
		return (
			<div>
		        <Nav location={location} />
		        <div class="container" style={containerStyle}>
		          <div class="row">
		            <div class="col-lg-12">
		              <h1>Fanplus.cn</h1>
		              {this.props.children}
		            </div>
		          </div>
		          <Footer/>
		        </div>
		     </div>
		)
	}
}