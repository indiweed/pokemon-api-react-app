import './TitleContainer.css';
import Cursor from '../../images/cursor.svg';
import PokemonApiImg from '../../images/pokemonapi.svg';

export default function TitleContainer() {
    return (
        <div className='title_container'>
            <a href='https://pokeapi.co/' target='_blank'><img src={PokemonApiImg} className='api_logo' /></a>
            <img src={Cursor} className='click_logo'/>
        </div>
    )
}