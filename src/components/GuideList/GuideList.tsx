import type { Guide } from '../../types/guide';

interface GuideListProps {
  guides: Guide[];
  onUpdateStatus: (
    numeroGuia: string,
    nuevoEstado: Guide['estado']
  ) => void;
  onDeleteGuide: (numeroGuia: string) => void;
}

function GuideList({
  guides,
  onUpdateStatus,
  onDeleteGuide,
}: GuideListProps) {
  return (
    <section id="guias">
      <h2>Guías</h2>

      <p>Total de guías: {guides.length}</p>

      {guides.map((guide) => (
        <div key={guide.numeroGuia}>
          <p>Número de guía: {guide.numeroGuia}</p>
          <p>Destinatario: {guide.destinatario}</p>
          <p>Origen: {guide.origen}</p>
          <p>Destino: {guide.destino}</p>
          <p>Fecha: {guide.fecha}</p>
          <p>Estado: {guide.estado}</p>

          <select
            value={guide.estado}
            onChange={(e) =>
              onUpdateStatus(
                guide.numeroGuia,
                e.target.value as Guide['estado']
              )
            }
          >
            <option value="Pendiente">Pendiente</option>
            <option value="En tránsito">En tránsito</option>
            <option value="Entregado">Entregado</option>
          </select>

          <p>Historial:</p>

          <ul>
            {guide.historial.map((entry, index) => (
              <li key={index}>
                {entry.date} - {entry.status}
              </li>
            ))}
          </ul>

          <button
            onClick={() => onDeleteGuide(guide.numeroGuia)}
          >
            Eliminar
          </button>
        </div>
      ))}
    </section>
  );
}

export default GuideList;