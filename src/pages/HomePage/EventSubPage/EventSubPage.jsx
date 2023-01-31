import { useFetchEvent } from 'hooks/UseFetchEvent/UseFetchEvent';
import { Link ,useLocation} from 'react-router-dom';
export const EventSubPage = () => {
  
  const location = useLocation();
 const event = useFetchEvent();
  // console.log(event);
  
  
 
  return (
    <>
      {event && (
        <>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width='340'/>
          {!location.pathname.includes('search') &&
          <Link to="details" state={location.state}>More info</Link>}
        </>
      )}
    </>
  );
};
