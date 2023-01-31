import { useEffect } from 'react';
import { useState } from 'react';
import { fetchEvents } from 'services/eventsApi';
import { Link, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const EventPage = () => {
  const [events, setEvents] = useState([]);
  const location=useLocation();
  console.log(location);

  useEffect(() => {
    fetchEvents().then(setEvents);
  }, []);

  return (
    <>
      <ul>
        {events.map(({ name, id }) => (
          <li key={id}>
            <Link to={id} state={{from:location}}>{name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
