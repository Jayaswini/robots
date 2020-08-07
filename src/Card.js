import React, {Component} from 'react';

class Card extends Component{
	render(){
		return (
			<div className='bg-white dib br3 pa3 mr3 mv2 grow bw2 shadow-5'>
			   <img alt='pig' src={`https://robohash.org/${this.props.id}?size=200x200`} />
			    <div>
			      <h2>{this.props.name}</h2>
			   </div>
			</div>
		);
	}
}

export default Card;