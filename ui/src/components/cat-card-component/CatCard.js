import './CadCard.css'
import React from "react";

function CatCard(props) {

	return (
		<div className="card">
			<img className="item" key={props.catData.id} src={`https://cataas.com/${props.catData.url}`} />
			<div className="tags" >
				<ul>{
					props.catData.tags.length >= 1 ? props.catData.tags.map(tag => <li>{tag}</li>) : 'No tags for this kitty :(' /*<div className="tag-child">{tag}</div>)*/
				}</ul>
			</div>
		</div>
	)
}

export default CatCard;
