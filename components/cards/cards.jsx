import "./cards.css"
import { Link } from "react-router-dom"


export default function Cards({titulo1, sistemas, informacao1, informacao2, informacao3, link1, link2, link3, cor, icone}) {
    return(
        <>
        <div className='card'>
            <div className='card-branco'>

              <img className='iconesala' src={icone}></img>
              <h3>{titulo1}</h3>
              <h3>{sistemas}</h3>
            </div>
            <div className='card-vermelho' style={{backgroundColor: cor}}>
              <Link className="informacao-card" to={link1}>{informacao1}</Link>
              <Link className="informacao-card" to={link2}>{informacao2}</Link>
              <Link className="informacao-card" to={link3}>{informacao3}</Link>
            </div>
          </div>
        </>
  )
}