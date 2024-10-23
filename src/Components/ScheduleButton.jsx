import { useState } from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

const ScheduleButton = ({ horario }) => {
    // Estado para controlar a cor do botão
    const [buttonColor, setButtonColor] = useState('bg-green-500'); // Inicialmente verde
    const [isClicked, setIsClicked] = useState(false); // Novo estado para controlar o clique

    const handleClick = () => {
        window.open(`https://wa.me/5599999999999?text=Olá, gostaria de agendar um horário para ${horario}.`, "_blank");
        setButtonColor('bg-orange-500'); // Muda para laranja após abrir o WhatsApp

        // Muda a cor do botão para vermelho se já foi clicado
        if (isClicked) {
            setButtonColor('bg-red-500'); // Muda para vermelho se já foi clicado
        } else {
            setIsClicked(true); // Marca como clicado
        }
    };

    return (
        <button 
            onClick={handleClick} 
            className={`${buttonColor} text-white font-bold py-2 px-4 rounded`}
        >
            Agendar Horário: {horario}
        </button>
    );
};

// Adiciona validação para a prop 'horario'
ScheduleButton.propTypes = {
    horario: PropTypes.string.isRequired, // Define que horario é uma string obrigatória
};

export default ScheduleButton;
