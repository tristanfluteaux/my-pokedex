import './PokeCardDetails.css'

const PokeCardDetails = ({ front_default, back_default }) => {

    return (
        <div className='details-card'>
           
            <img src={front_default}/>
            <img src={back_default}/>
            blabla
        </div>
    )
}

export default PokeCardDetails;