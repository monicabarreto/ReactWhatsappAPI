import { useState } from 'react';


const Scheduler = () => {
    // Definindo os horários disponíveis para cada dia da semana
    const diasDaSemana = [
        { dia: 'SEGUNDA:', horarios: ['09:00 ás 10:00', '11:00 ás 12:00', '14:00 ás 15:00'] },
        { dia: 'TERÇA:', horarios: ['16:00 ás 17:00', '18:00 ás 19:00'] },
        { dia: 'QUARTA:', horarios: ['16:00 ás 17:00', '18:00 ás 19:00'] },
        { dia: 'QUINTA:', horarios: ['12:00', '13:30', '16:00'] },
        { dia: 'SEXTA:', horarios: ['08:30', '10:30', '12:30'] },
    ];

    // Cria um estado inicial com base nos horários personalizados para cada dia
    const [horarios, setHorarios] = useState(
        diasDaSemana.map((dia) => ({
            dia: dia.dia,
            horarios: dia.horarios.map((hora) => ({ hora, status: 'disponivel' })),
        }))
    );

    const handleAgendamento = (diaIndex, horaIndex) => {
        setHorarios((prevHorarios) =>
            prevHorarios.map((dia, dIndex) =>
                dIndex === diaIndex
                    ? {
                        ...dia,
                        horarios: dia.horarios.map((hora, hIndex) =>
                            hIndex === horaIndex ? { ...hora, status: 'aguardando' } : hora
                        ),
                    }
                    : dia
            )
        );
    };

    const openWhatsApp = (hora, diaIndex, horaIndex) => {
        const numeroWhatsApp = '91999999999'; // Insira o número do WhatsApp do profissional
        const mensagem = `Olá! Gostaria de agendar um horário para ${hora}. Aguardo sua confirmação.`;
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        window.open(urlWhatsApp, '_blank');

        // Atualiza o estado para mudar a cor do botão
        setHorarios((prevHorarios) =>
            prevHorarios.map((dia, dIndex) =>
                dIndex === diaIndex
                    ? {
                        ...dia,
                        horarios: dia.horarios.map((horario, hIndex) =>
                            hIndex === horaIndex ? { ...horario, status: 'confirmado' } : horario
                        ),
                    }
                    : dia
            )
        );
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4 font-mono text-center">AGENDE SUA CONSULTA AQUI:</h1>
            <p className="text-xl mb-4 font-mono text-left">Horários disponíveis:</p>
            {horarios.map((dia, diaIndex) => (
                <div key={diaIndex} className="mb-3 " >
                    <h2 className="font-bold mb-4 font-mono text-left p-2 text-lg">{dia.dia}</h2>
                    <div className=" text-center flex  bg-gray-200 shadow-lg p-4 rounded gap-2">
                        {dia.horarios.map((horario, horaIndex) => (
                            <div
                                key={horaIndex}
                                className={`cursor-pointer p-5 rounded flex justify-center  ${
                                    horario.status === 'disponivel' ? 'bg-green-500' :
                                    horario.status === 'aguardando' ? 'bg-yellow-500' : 
                                    horario.status === // Estado ao clicar
                                    'bg-red-500' // Quando confirmado
                                }`}
                                onClick={() => handleAgendamento(diaIndex, horaIndex)}
                            >
                             
                                {horario.hora}
                                                         
                                {horario.status === 'aguardando' &&  (
                                    
                                    <div className="mt-5 grid-flow-col justify-center p-2 ">
                                        <button 
                                            onClick={() => openWhatsApp(horario.hora, diaIndex, horaIndex)} 
                                            className={"bg-blue-500 text-white px-2 py-2 rounded mr-4"}
                                        >
                                            Vamos confirmar sua consulta?
                                        </button>

                                        <button 
                                            onClick={() => alert('Ao confirmar a sua consulta, vc entrará em contato com o profissional para acertar os detalhes como endereço e estado do seu animal')} 
                                            className="bg-gray-500 text-white px-2 py-2 rounded"
                                        >
                                            Saiba mais
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Scheduler;
