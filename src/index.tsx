import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReaderLayout from './layouts/ReaderLayout';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoadingSpinner from './components/LoadingSpinner';
import Home, { homeLoader } from './pages/Home';
import Error from './pages/Error';
import Latest, { latestDataLoader } from './pages/Latest';
import Comics, { comicDataLoader } from './pages/Comics';
import Bookmarks from './pages/Bookmarks';
import ViewComic, { comicLoader } from './pages/comics/ViewComic';
import ViewChapter, { chapterLoader } from './pages/comics/ViewChapter';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <ReaderLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: homeLoader
      },
      {
        path: "/comics",
        element: <Comics />,
        loader: comicDataLoader,

      },
      {
        path: "/latest",
        element: <Latest />,
        loader: latestDataLoader

      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,

      },
      {
        path: "/comics/:comic",
        element: <ViewComic />,
        loader: comicLoader

      },
      {
        path: "/comics/:comic/volume/:volume/chapter/:chapter",
        element: <ViewChapter />,
        loader: chapterLoader

      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<LoadingSpinner />} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
