import React from "react";
import { connect } from 'react-redux';

import { fetchDoubans,deleteDouban,addDouban } from "../actions/doubansActions";

// 添加动画效果
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// 获取数据
@connect((store) => {
	// console.log(store)
	return {
		doubans: store.doubans.doubans,
		subjects: store.doubans.subjects,
	}
})
export default class Featured extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchDoubans())
	}

	handleDel(e){
		var delIndex = e.target.getAttribute('data-id');
		console.log(delIndex)
		this.props.dispatch(deleteDouban(delIndex))
	}
	render() {
		const { doubans } = this.props;
		const { subjects } = this.props;
		// for(var i in subjects){
		// 	console.log(subjects[i].title);
		// }
		const mappedSubject = subjects.map(
			(subject,k) => 
				<li  key={k}>
	                <span class="asc">{k+1}</span>
	                <img src={subject.images.small} /> &nbsp;&nbsp;
	                Title: {subject.title} &nbsp;&nbsp;
	                subtype: {subject.subtype} &nbsp;&nbsp;
	                year: {subject.year} &nbsp;&nbsp;
	                original_title: {subject.original_title} &nbsp;&nbsp;
	                <button class="btn btn-danger pull-right" data-id={subject.id} onClick={this.handleDel.bind(this)}>删除</button>
	             </li>
	  )
		
	  // 加载中
	  if(doubans.fetching){
	    return (
	      <img src="http://img.mukewang.com/55ac9c3b0001418206240284.gif" />
	    )
	  } 
		if(doubans.fetched){
			return (<h1>获取失败</h1>)
		}
		
	  return (
	    <div class="row">
	    	<h1>{doubans.title} - 前{doubans.count}名</h1>
	        <ReactCSSTransitionGroup transitionName="example" component="ul">
	          {mappedSubject}
	        </ReactCSSTransitionGroup>
	    </div>
	  );
	}
		
	
}