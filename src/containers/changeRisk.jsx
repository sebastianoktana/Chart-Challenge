import React from 'react';


const changeRisk = props => (
  <div>
    <br />
    <br />
    <label>Level of Risk<h1>{props.risk}</h1></label>
    <label>Risk:<br />
      <input
        ref={(input) => { this.range = input; }}
        type="range"
        defaultValue="1"
        min="0"
        max="10"
        onChange={(e) => {
          e.preventDefault();
          if (this.range) {
            props.onChange(this.range.value);
          }
        }}
      />
    </label>
  </div>
  );

export default changeRisk;

