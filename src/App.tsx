import { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import GuideForm from './components/GuideForm/GuideForm'
import StatusPanel from './components/StatusPanel/StatusPanel'
import GuideList from './components/GuideList/GuideList'
import type { Guide } from './types/guide'

function App() {
  const [guides, setGuides] = useState<Guide[]>(() => {
    const storedGuides = localStorage.getItem('guides')
   return storedGuides ? JSON.parse(storedGuides) as Guide[] : []
  })

  useEffect(() => {
    localStorage.setItem('guides', JSON.stringify(guides))
  }, [guides])

  const addGuide = (guide: Guide) => {
    setGuides((currentGuides) => [
      ...currentGuides,
      guide,
    ])
  }

  const deleteGuide = (numeroGuia: string) => {
    setGuides((currentGuides) =>
      currentGuides.filter(
        (guide) => guide.numeroGuia !== numeroGuia
      )
    )
  }

  const statusOrder = {
  Pendiente: 0,
  'En tránsito': 1,
  Entregado: 2,
}
  const updateGuideStatus = (
    numeroGuia: string,
    nuevoEstado: Guide['estado']
  ) => {
    

    setGuides((currentGuides) =>
      currentGuides.map((guide) =>
        statusOrder[guide.estado] < statusOrder[nuevoEstado] &&
        guide.numeroGuia === numeroGuia
          ? {
              ...guide,
              estado: nuevoEstado,
              historial: [
                ...guide.historial,
                {
                  date: new Date().toLocaleString(),
                  status: nuevoEstado,
                },
              ],
            }
          : guide
      )
    )
  }

  return (
    <div>
      <Header />

      <GuideForm onAddGuide={addGuide} />

      <GuideList
        guides={guides}
        onUpdateStatus={updateGuideStatus}
        onDeleteGuide={deleteGuide}
      />

      <StatusPanel guides={guides} />
    </div>
  )
}

export default App