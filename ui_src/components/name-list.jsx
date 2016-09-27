import React from 'react';
import { Header } from 'stardust';

export default React.createClass({
	render: function() {
		return <div> 
			<Header as='h3'>{this.props.heading}</Header>
			<ul>
				{this.props.names.map(function(name, i){
					return <li  key={i}>{name}</li>;
				})}
			</ul>
		</div>;
	}
});