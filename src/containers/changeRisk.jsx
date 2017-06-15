import React from 'react';


const changeRisk = props => (
  <div>
    <br />
    <br />
    <label>Risk:<br />
      <input
        ref={(input) => { this.range = input; }}
        type="range"
        defaultValue="0"
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

