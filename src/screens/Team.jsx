import TeamList from "../components/TeamList";

import '../components/TeamList.css'

const Team = ({ favorites, toogleFavorite }) => {
    return ( 
        <div className='team-main'>
            <h2 className='team-title'>Your Pokemon Team</h2>
            <TeamList favorites={favorites} toogleFavorite={toogleFavorite}/>
            <h2 className='team-title'>Ready for battle ?</h2>
        </div>
    );
}

export default Team;