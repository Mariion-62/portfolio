import Homepage from 'components/Homepage';
import { Route, Routes } from 'react-router-dom';
import AllParcours from './components/AllParcours';
import Realisations from './components/Realisations';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/mes-realisations" element={<Realisations />} />
          <Route path="/mon-parcours" element={<AllParcours />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
