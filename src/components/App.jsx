import React from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';
import ChangeRisk from './ChangeRisk';
import changeRiskAction from '../actions';

const App = props => (
  <div>
    <Chart data={props.data} risk={props.risk} />
    <ChangeRisk risk={props.risk} onChange={props.onChange} />
  </div>
		);

const mapStateToProps = state => ({
	   risk: state.risk,
	   data: state.data,
});

const mapDispatchToProps = dispatch => ({
    	onChange: (risk) => {
	    	dispatch(changeRiskAction(risk));
	  	},
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
