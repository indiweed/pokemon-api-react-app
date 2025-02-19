import './ChipsContainer.css';
import TitleContainer from '../TitleContainer/TitleContainer';
import ChipsButtons from '../ChipsButtons/ChipsButtons';
import TerminDefinition from '../TerminDefinition/TerminDefinition';
import { useState } from 'react';

export default function ChipsContainer() {
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    return (
    <>
        <TitleContainer />
        <div className='chips_container'>
            <ChipsButtons setSelectedPokemon={setSelectedPokemon} />
            <TerminDefinition pokemon={selectedPokemon} />
        </div>
    </>
    );
}
