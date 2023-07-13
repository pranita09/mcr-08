import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import { Home } from "./pages/Home";
import { SingleMeetupPage } from "./pages/SingleMeetupPage";

function App() {
  return (
    <div className="App bg-[#f1f5f9] h-[160vh] ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meetup/:meetupId" element={<SingleMeetupPage />} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        containerStyle={{
          top: "5rem",
        }}
      />
    </div>
  );
}

export default App;
