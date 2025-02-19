import './ChipItem.css';
import fetchData from '../../services/pokemon-api';

export default function ChipItem({ pokemon, setSelectedPokemon }) {

    const handleClick = async () => {
        const data = await fetchData(pokemon);
        setSelectedPokemon(data);
    }

    return (
        <div>
            <button className='chips_btn' onClick={handleClick}>
                {pokemon}
            </button>
        </div>
    );
}
