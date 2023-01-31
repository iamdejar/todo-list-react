import './App.scss'
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { List } from './pages/List';
import { DetailTask } from './pages/Detail';
import { Trash } from './pages/Trash';

const App = () => {

  return (

    <BrowserRouter>

        <div className="todolist-body">

          <h1 className='h1'>Easy tasks</h1>

          <Suspense fallback="Loading...">
            <Routes>
              <Route path='/' element={<List/>} />
              <Route path='/task' element={<DetailTask/>} />
              <Route path='/trash' element={<Trash/>} />
            </Routes>
          </Suspense>
          
        </div>
    </BrowserRouter>
    
  );
}

export default App;
