import React from 'react';
import { Header } from 'stardust';

export default React.createClass({
	render: function() {
		return <div> 
			<Header as='h3'>{this.props.heading}</Header>
			<ul>
				{
					this.props.names.forEach( (name) => {
						<li>{name}</li>;
					})
				}
			</ul>
		</div>;
	}
});