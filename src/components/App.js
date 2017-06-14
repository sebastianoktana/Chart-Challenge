import React from 'react'
import Chart from './Chart'
import {connect} from 'react-redux'
import ChangeRisk from '../containers/changeRisk'
import * as actions from '../actions'


const App = (props) => {
	
	return(
 	 	<div>
		  	<Chart data={props.data} risk={props.risk}/>
		    <ChangeRisk  onChange={props.onChange}/>
     	</div>
		)
	};

const mapStateToProps = (state)=>{
	return{
	   risk:state.risk,
	   data:state.data
	}
}

const mapDispatchToProps = (dispatch) => {
    return { 
    	onChange : (risk)=>{
	    	dispatch(actions.changeRisk(risk))
	  	}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
