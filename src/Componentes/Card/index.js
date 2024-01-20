import './Card.css'

import { FaRegHeart } from "react-icons/fa";


const Card = (props) => {
    
    return (
        <article className='card'>
            <div>
                <div> <span className='data'>{props.data}</span> <span className='icone'><FaRegHeart/></span></div>
                <h1>{props.titulo}</h1>
                <p>{props.texto}</p>
            </div>
        </article>
    )
}

export default Card