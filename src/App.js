import './App.css';
import Body from './Components/Body';
import Header from "./Components/Header";
import { createBrowserRouter } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import Error from './Components/Error';

function App() {

  return (
    <div >
      <Header />
      <Body />

    </div>
  );
}

export const appRouter = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <Error />,
  children: [{
    path: '/',
    element: <MainContainer />
  },
  {
    path: 'watch',
    element: <WatchPage />
  },
    // {
    //   path: 'results',
    //   element: <SearchResultContainer />
    // }
  ]
}])

export default App;