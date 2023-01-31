import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';
import { EventPage } from 'pages/HomePage/EventPage/EventPage';
import { EventSubPage } from 'pages/HomePage/EventSubPage/EventSubPage';
import { SearchPage } from './SearchPage/SearchPage';
import { EventsDetails } from 'pages/HomePage/EventsDetails/EventsDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventPage />}>
          <Route path=":eventId" element={<EventSubPage />} />
        </Route>
        <Route path="search" element={<SearchPage />}>
          <Route path=":eventId" element={<EventSubPage />} />
        </Route>
        <Route path='events/:eventId/details' element={<EventsDetails/>}/>
      </Route>
    </Routes>
  );
};
