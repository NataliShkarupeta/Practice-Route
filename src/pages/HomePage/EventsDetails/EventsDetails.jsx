import { useFetchEvent } from "hooks/UseFetchEvent/UseFetchEvent";
import { useNavigate ,useLocation} from "react-router-dom";

export const EventsDetails= () => {
  const event = useFetchEvent();
 const navigate = useNavigate();
 const location = useLocation();
  console.log(event);

  return (
    <>
      <button onClick={()=> navigate(location?.state?.from ?? "/")}>Go back</button>
      
      {event && (
        <>
          <h2>{event.name}</h2>
          <img src={event.images[0].url} alt={event.name} width="340" />
          <p>Genre: {event.classifications[0].genre.name}</p>
          <p> SubGenre: {event.classifications[0].subGenre.name} </p>
        </>
      )}
    </>
  );
};