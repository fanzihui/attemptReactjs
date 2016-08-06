import React from "react";
import ReactDOM from "react-dom";
import  { Provider } from 'react-redux'; //store注入
import {Router,Route,IndexRoute, hashHistory} from "react-router";

import store from './store';

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";

const app = document.querySelector('#app');

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Featured}></IndexRoute>
				<Route path="/archives(/:article)" name="archives" component={Archives}></Route>
				<Route path="/settings" name="settings" component={Settings}></Route>
			</Route>
		</Router>
	</Provider>
,app)