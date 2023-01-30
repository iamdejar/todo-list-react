import './App.scss'
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { List } from './pages/List';
import { AddTaskForm } from './components/AddTask/AddTask';

const App = () => {

  return (

    <BrowserRouter>

        <div className="todolist-body">

          <h1 className='h1'>Easy tasks</h1>

          <Link to="/add">Add a new task</Link>

          <Suspense fallback="Loading...">
            <Routes>
              <Route path='/' element={<List/>} />
              <Route path='/add' element={<AddTaskForm/>} />
            </Routes>
          </Suspense>
          
        </div>
    </BrowserRouter>
    
  );
}

export default App;
