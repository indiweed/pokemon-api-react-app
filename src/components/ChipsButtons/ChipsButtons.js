import './ChipsButtons.css';
import ChipItem from '../ChipItem/ChipItem';

export default function ChipsButtons({setSelectedPokemon}) {
    return (
        <div className='chips_btns_container'>
            <div className='chips_btns_list'>
                <ChipItem pokemon={'bulbasaur'} setSelectedPokemon={setSelectedPokemon}/>
                <ChipItem pokemon={'ivysaur'} setSelectedPokemon={setSelectedPokemon}/>
                <ChipItem pokemon={'venusaur'} setSelectedPokemon={setSelectedPokemon}/>
                <ChipItem pokemon={'charmander'} setSelectedPokemon={setSelectedPokemon}/>
                <ChipItem pokemon={'charizard'} setSelectedPokemon={setSelectedPokemon}/>
                <ChipItem pokemon={'weedle'} setSelectedPokemon={setSelectedPokemon}/>
                <ChipItem pokemon={'pikachu'} setSelectedPokemon={setSelectedPokemon}/>
                <ChipItem pokemon={'kakuna'} setSelectedPokemon={setSelectedPokemon}/>
                <ChipItem pokemon={'beedrill'} setSelectedPokemon={setSelectedPokemon}/>
                <ChipItem pokemon={'meowth'} setSelectedPokemon={setSelectedPokemon}/>
            </div>
        </div>   
    )
}