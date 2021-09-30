import TeamList from "../components/TeamList";

const Team = ({ favorites }) => {
    return ( 
        <div>
            <h2>Pokemon Team</h2>
            <TeamList favorites={favorites}/>
        </div>
    );
}

export default Team;