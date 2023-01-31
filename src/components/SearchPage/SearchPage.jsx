import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams, Outlet,Link } from 'react-router-dom';
import { fetchEventsByName } from 'services/eventsApi';

export const SearchPage = () => {
  const [eventsSearchByWord, setEventsSearchByWord] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const event = searchParams.get('word');



  useEffect(() => {
    if (event !=='' && event !== null)
      fetchEventsByName(event).then(data => {
        console.log(data);
        setEventsSearchByWord(data);
      });
  }, [event]);

  const handelSabmite = e => {
    e.preventDefault();
    const form = e.target;
    setSearchParams({ word: form.elements.word.value });
    form.reset();
  };

  return (
    <>
      <form onSubmit={handelSabmite}>
        <input type="text" name="word" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {eventsSearchByWord.map(({ name, id }) => (
          <li key={id}>
            <Link to={id}>{name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
};
