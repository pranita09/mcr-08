import { HiOutlineSearch } from "react-icons/hi";
import { useEvent } from "../contexts/EventContext";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useEvent();
  return (
    <div className="py-4 flex justify-between border-b-2 pb-6">
      <h1
        className="px-12 text-[1.8rem] font-semibold text-red-600 logo cursor-pointer"
        onClick={() => navigate("/")}
      >
        Meetup
      </h1>
      <div className="flex justify-center items-center gap-2 py-1 px-3 bg-[white] mx-2 rounded-md">
        <HiOutlineSearch />
        <input
          type="text"
          placeholder="Search by title or tags"
          className="text-sm outline-none"
          value={state?.searchInput}
          onChange={(e) => {
            navigate("/");
            dispatch({ type: "SET_SEARCH_INPUT", payload: e.target.value });
          }}
        />
      </div>
    </div>
  );
};
