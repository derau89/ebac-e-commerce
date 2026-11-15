import type { Guide, GuideStatus } from '../../types/guide';
import { useSelector } from 'react-redux'


function filterGuidesByStatus(
  guides: Guide[],
  status: GuideStatus
) {
  return guides.filter(
    (guide) => guide.estado === status
  ).length;
}




function StatusPanel() {
  const guides = useSelector((state: { guides: Guide[] }) => state.guides)
  return (
    <section id="estado">
      <h2>Estado de Guías</h2>

      <p>Total de guías: {guides.length}</p>

      <p>
        Guías pendientes: {filterGuidesByStatus(guides, 'Pendiente')}
      </p>

      <p>
        En tránsito: {filterGuidesByStatus(guides, 'En tránsito')}
      </p>

      <p>
        Guías entregadas: {filterGuidesByStatus(guides, 'Entregado')}
      </p>
    </section>
  );
}

export default StatusPanel;