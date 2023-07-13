import { createContext, useContext, useReducer } from "react";
import { eventData } from "../data/data";

export const EventContext = createContext();

const initialState = {
  events: eventData,
  searchInput: "",
  eventTypeInput: "Both",
};

const eventReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_EVENT_TYPE":
      return { ...state, eventTypeInput: payload };
    case "SET_SEARCH_INPUT":
      return { ...state, searchInput: payload };
    default:
      return state;
  }
};

export const EventProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventReducer, initialState);

  const filteredEventsBySearch = state?.searchInput
    ? state?.events?.meetups?.filter(
        (meetup) =>
          meetup?.title
            .toLowerCase()
            .includes(state?.searchInput?.toLowerCase()) ||
          meetup?.eventTags
            ?.join("")
            .toLowerCase()
            .includes(state?.searchInput?.toLowerCase())
      )
    : state?.events?.meetups;

  const filteredEvents =
    state?.eventTypeInput !== "Both"
      ? filteredEventsBySearch?.filter(
          (meetup) => meetup?.eventType === state?.eventTypeInput
        )
      : filteredEventsBySearch;

  return (
    <EventContext.Provider value={{ state, dispatch, filteredEvents }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => useContext(EventContext);
