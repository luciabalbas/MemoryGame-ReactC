import './SingleCard.css'

export default function SingleCard({ card }) {       
  return (
    <div>
        <div className='card'>
            <div>
                <img className='front' src={card.src} alt="card front" />
                <img className="back" src="img/cover.png" alt="card cover" />
            </div>
        </div>
    </div>
  )
}
