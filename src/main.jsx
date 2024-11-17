import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App, loader as mainLoader } from './App.jsx'
import { Todo } from './Components/TodoList/Todo';
import { ErrorPage404 } from './Components/ErrorPage404/ErrorPage404.jsx';
import { Notebook, loader as NoteBookLoader } from './Components/NoteBook/Notebook.jsx';
import { Provider } from 'react-redux';
import store from './store/store.js';
import s from './index.module.css'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage404 />,
    loader: mainLoader,
    children: [
      {
        path: '/Todolist',
        element: <Todo />,
      },
      {
        path: '/Notebook',
        element: <Notebook />,
        loader: NoteBookLoader,
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
