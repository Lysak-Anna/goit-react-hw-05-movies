import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from 'pages/Home/Home.jsx';
import Cast from 'components/Cast/Cast.jsx';
import Reviews from 'components/Reviews/Reviews.jsx';
import Header from 'components/Header/Header.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import LanguageProvider from 'Context/Context';
const Movies = lazy(() => import('../src/pages/Movies/Movies'));
const MovieDetails = lazy(() =>
  import('../src/pages/MovieDetails/MovieDetails')
);
const queryClient = new QueryClient();
function App() {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:movieId" element={<MovieDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
              <Route path="*" element={<Home />} />
            </Route>
          </Routes>
          <ToastContainer position="top-center" theme="dark" />
        </div>
      </QueryClientProvider>
    </LanguageProvider>
  );
}

export default App;
