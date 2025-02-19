import './TerminDefinition.css';
import { useEffect, useState } from 'react';


export default function TerminDefinition({ pokemon }) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);

    if (!pokemon) {
        return <div className="termin_definition"></div>;
    }

    return (
        <div className="termin_definition">
                <div className="termin_definition_container">
                    <span className="poke_name">{pokemon.name}</span>

                    {loading ? (
                        <div className="loader-container">
                            <div className="spinner"></div>
                        </div>) : (
                        <div className="poke_img">
                            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
                        </div>)}

                    <div className="poke_info">
                        <ul className="poke_info_list">
                            <li className="poke_info_item" id="movie">Снялся в 78 сериях</li>
                            <li className="poke_info_item" id="id">id: {pokemon.id}</li>
                            <li className="poke_info_item" id="height">height: {pokemon.height}</li>
                            <li className="poke_info_item" id="attack">attack: {pokemon.stats[1].base_stat}</li>
                        </ul>
                    </div>
                </div>
        </div>
    );
}
