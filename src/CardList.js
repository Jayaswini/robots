import React, {Component} from 'react';
import { members } from './members';
import Card from './Card';
const CardList = ({members}) => {
		return(
			<div>
			{
               members.map((user,i) =>{
               	return(
               		<Card
               		key={i}
               		name={members[i].name}
               		id={members[i].id}/>
               		);

               })
           }
             </div>
			);
	
}
export default CardList;