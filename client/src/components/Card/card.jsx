import React from 'react';
import Img01 from '../Assets/img01.jpg'
import '../Card/card.css'
import axios from 'axios';

function Card(props){

	return (
		<div className="card">
					<div className="photo">
						<img className="image" src={props.image.url} />
					</div>	
					<div className="infos">
						<div className="titulos">
							<p className="tit">{props.title}</p>
							<p className="sub-tit">{props.date}</p>
						</div>
						<div className="text">
							<p>{props.description} <a className="hiperLink" href={props.blogLink}> Continue a ler...</a></p>
							
						</div>
					</div>
		</div>
	);
}

export default Card;