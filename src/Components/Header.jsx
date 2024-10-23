// src/components/Header.jsx
import { useState } from 'react';



const Header = () => {
    const [isOpen, setIsOpen] = useState(null); // Controla qual modal está aberto

    const handleOpen = (index) => {
        setIsOpen(index); // Abre o modal específico com base no índice
    };

    const handleClose = () => {
        setIsOpen(null); // Fecha o modal
    };

    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="text-lg font-bold">Dr. Raphael Conde</div>
            <div className="flex space-x-4">
                {/* Lista horizontal de itens clicáveis */}
                <span className="cursor-pointer" onClick={() => handleOpen(1)}>Sobre mim </span>
                <span className="cursor-pointer" onClick={() => handleOpen(2)}>Horarios </span>
                <span className="cursor-pointer" onClick={() => handleOpen(3)}>Especialidades</span>
            </div>

            {/* Modal para SOBRE MIM*/}
            {isOpen === 1 && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h1 className="text-lg  text-blue-950 mb-6"> 👨🏻‍⚕️ Olá, me chamo RAPHAEL CONDE, sou Medico Veterinário ⚕️ (CRMV: 52455) <br />
                        Especialista em oncologia e Clinica médica há mais de 10 anos. Cuidando e Slvando vidas! <br />
                         Agende um horario para a consulta a domicílio do seu animalzinho ❤️
                        </h1>
                       
                        <button 
                            className="mt-4 bg-blue-500 text-white p-2 rounded"
                            onClick={handleClose}
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}

            {/* Modal para HORARIOS */}
            {isOpen === 2 && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-lg font-bold mb-2 text-blue-950"> ⌚ A consulta está prevista dentro do horário marcado, e o atendimento dura cerca de 1 hora. <br />
                        💲Valores como medicação e exames(caso o animal precise) são valores extras. <br />
                        💲 Colsulta Clinica custa: R$ 200; <br />
                        💲 Consulta de especialidade Oncológica: R$ 300;
                        </h2>
                       
                        <button 
                            className="mt-4 bg-blue-500 text-white p-2 rounded"
                            onClick={handleClose}
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}

            {/* Modal para Endereço */}
            {isOpen === 3 && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded shadow-lg">
                    <h2 className="text-lg font-bold mb-2 text-blue-950"> 
                    ✅ Colsulta Clinica custa: R$ 200; <br />
                    ✅ Consulta de especialidade Oncológica: R$ 300;
                        </h2>
                        <h2 className="text-lg font-bold mb-2 text-red-600"> 
                        ⚠️ Medicação e exames são valores extras e é necessario combinar  <br />
                        com o Médico veterinário no ato da consulta.
                        
                        </h2>
                        <button 
                            className="mt-4 bg-blue-500 text-white p-2 rounded"
                            onClick={handleClose}
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
