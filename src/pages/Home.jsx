import { EventCard } from "../components/EventCard";
import { Header } from "../components/Header";
import { useEvent } from "../contexts/EventContext";

export const Home = () => {
  const { state, dispatch, filteredEvents } = useEvent();
  const { eventTypeInput } = state;
  return (
    <div className="w-[90%] m-auto">
      <Header />
      <div className="flex items-center justify-between py-3 pt-4">
        <h1 className="text-[1.8rem] font-semibold">Meetup Events</h1>
        <div className="mx-2 px-3 py-2 bg-[white] rounded-md text-[gray] text-sm">
          Select Event Type:
          <select
            className="outline-none px-1"
            value={eventTypeInput}
            onChange={(e) =>
              dispatch({ type: "SET_EVENT_TYPE", payload: e.target.value })
            }
          >
            <option value="Both">Both</option>
            <option value="Online">Online</option>
            <option value="Offline">Offline</option>
          </select>
        </div>
      </div>
      <div className="flex justify-around items-center gap-6 flex-wrap py-6">
        {filteredEvents?.length > 0 ? (
          filteredEvents?.map((meetup) => (
            <EventCard key={meetup?.id} meetup={meetup} />
          ))
        ) : (
          <p>Oops, there is no meetup matches your preference!</p>
        )}
      </div>
    </div>
  );
};
