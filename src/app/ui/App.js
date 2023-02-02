import './App.scss'
import { Provider } from 'react-redux';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { List } from '../../pages/List';
import { DetailTask } from '../../pages/Detail';
import { Trash } from '../../pages/Trash';
import { store } from '../store';

export const App = () => {

  return (

    <Provider store={store}>
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
    </BrowserRouter></Provider>
    
  );
}
