import './App.scss'
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { List } from './pages/List';
import { Add } from './pages/Add';
import { Edit } from './pages/Edit';
import { Trash } from './pages/Trash';

const App = () => {

  return (

    <BrowserRouter>

        <div className="todolist-body">

          <h1 className='h1'>Easy tasks</h1>

          <Suspense fallback="Loading...">
            <Routes>
              <Route path='/' element={<List/>} />
              <Route path='/add' element={<Add/>} />
              <Route path='/edit' element={<Edit/>} />
              <Route path='/Trash' element={<Trash/>} />
            </Routes>
          </Suspense>
          
        </div>
    </BrowserRouter>
    
  );
}

export default App;
