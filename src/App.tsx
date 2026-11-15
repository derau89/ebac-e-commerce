import { useEffect} from 'react'
import { useSelector } from 'react-redux'
import Header from './components/Header/Header'
import GuideForm from './components/GuideForm/GuideForm'
import StatusPanel from './components/StatusPanel/StatusPanel'
import GuideList from './components/GuideList/GuideList'
import type { Guide } from './types/guide'

function App() {
  const guides = useSelector((state: { guides: Guide[] }) => state.guides)
  useEffect(() => {
    localStorage.setItem('guides', JSON.stringify(guides))
  }, [guides])


  return (
    <div>
      <Header />

      <GuideForm />

      <GuideList />

      <StatusPanel/>
    </div>
  )
}

export default App