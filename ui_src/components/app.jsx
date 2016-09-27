import React from 'react';
import { Button, Header, Grid } from 'stardust';

const { Column, Row } = Grid;

export default React.createClass({
	render: function() {
		return <div>
  		<Grid className='padded' centered columns={3}>
				<Column>
					<Header as='h1'> Welcome </Header>
				</Column>
			</Grid>
    </div>;
	}
});


