import { useNavigate } from "react-router-dom";
import { getDate } from "../utils/getDate";

export const EventCard = ({ meetup }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-[17rem] h-[20rem] rounded-md cursor-pointer hover:scale-105"
      onClick={() => navigate(`/meetup/${meetup?.id}`)}
    >
      <div className="w-[100%] h-[70%] relative">
        <img
          src={meetup?.eventThumbnail}
          alt={meetup?.title}
          className="cursor-pointer w-[100%] h-[100%] object-cover rounded-md"
        />
        <div className="absolute py-0.5 px-2 bg-[#f8f5f5] rounded top-2 left-2 text-sm">
          {meetup?.eventType}
        </div>
      </div>
      <div className="py-1">
        <p>{getDate(meetup?.eventStartTime)}</p>
        <p className="text-lg font-semibold">{meetup?.title}</p>
      </div>
    </div>
  );
};
