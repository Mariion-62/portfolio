import Homepage from 'components/Homepage';
import Parcours from 'components/Parcours';
import { Route, Routes } from 'react-router-dom';
import Realisations from './components/Realisations';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/mes-realisations" element={<Realisations />} />
          <Route path="/mon-parcours" element={<Parcours />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
