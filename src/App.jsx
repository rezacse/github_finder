import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './app.css';
import routePath from './routePath';
import ProfileSearchView from './views/ProfileSearch/ProfileSearchView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routePath.SEARCH} element={<ProfileSearchView />}>
          <Route path=":keyword/:searchType" element={<ProfileSearchView />} />
        </Route>
        <Route
          path="*"
          element={<ProfileSearchView to={routePath.SEARCH} replace />}
        />
      </Routes>
    </BrowserRouter>

    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path={`${routePath.SEARCH}/:keyword/:searchType`}
    //       element={<ProfileSearchView />}
    //     />
    //     <Route
    //       path={`${routePath.SEARCH}/:keyword/`}
    //       element={<ProfileSearchView />}
    //     />
    //     <Route path={routePath.SEARCH} element={<ProfileSearchView />} />
    //     <Route path="*" element={<ProfileSearchView />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
