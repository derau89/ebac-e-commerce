import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Guide } from '../../types/guide';

interface GuideFormProps {
  onAddGuide: (guide: Guide) => void;
}

function GuideForm({ onAddGuide }: GuideFormProps) {
  const [numeroGuia, setNumeroGuia] = useState('');
  const [destinatario, setDestinatario] = useState('');
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    onAddGuide({
      numeroGuia,
      destinatario,
      origen,
      destino,
      fecha: new Date().toLocaleString(),
      estado: 'Pendiente',
      historial: [
        {
          date: new Date().toLocaleString(),
          status: 'Pendiente',
        },
      ],
    });

    setNumeroGuia('');
    setDestinatario('');
    setOrigen('');
    setDestino('');
  };

  return (
    <section id="registro">
      <form onSubmit={handleSubmit}>
        <h2>Registro de Guía</h2>

        <input
          type="text"
          value={numeroGuia}
          onChange={(event) => setNumeroGuia(event.target.value)}
          placeholder="Número de guía"
        />

        <input
          type="text"
          value={origen}
          onChange={(event) => setOrigen(event.target.value)}
          placeholder="Origen"
        />

        <input
          type="text"
          value={destino}
          onChange={(event) => setDestino(event.target.value)}
          placeholder="Destino"
        />

        <input
          type="text"
          value={destinatario}
          onChange={(event) => setDestinatario(event.target.value)}
          placeholder="Destinatario"
        />

        <button type="submit">Agregar Guía</button>
      </form>
    </section>
  );
}

export default GuideForm;