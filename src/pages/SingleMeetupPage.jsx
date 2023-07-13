import { useParams } from "react-router-dom";
import { useEvent } from "../contexts/EventContext";
import { Header } from "../components/Header";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { BiRupee } from "react-icons/bi";
import { useState } from "react";
import { Modal } from "@mui/material";
import { RSVPModal } from "../components/RSVPModal";

export const SingleMeetupPage = () => {
  const { meetupId } = useParams();
  const {
    state: { events },
  } = useEvent();

  const [showModal, setShowModal] = useState(false);

  const meetup = events?.meetups?.find((meet) => meet?.id === meetupId);

  return (
    <div className="w-[90%] m-auto">
      <Header />
      <div className="flex flex-cols gap-8 py-6 px-4 ">
        <div className="w-[50%] pr-12">
          <h1 className="text-[2rem] font-semibold pb-2">{meetup?.title}</h1>
          <p>Hosted By:</p>
          <p className="font-semibold py-0.5">{meetup?.hostedBy}</p>
          <div className="w-full h-[20rem] py-3">
            <img
              className="w-full h-full object-cover"
              src={meetup?.eventThumbnail}
              alt={meetup?.title}
            />
          </div>
          <p className="py-3 text-2xl font-semibold">Details:</p>
          <p>{meetup?.eventDescription}</p>
          <p className="py-4 text-2xl font-semibold">Additional Information:</p>
          <p className="mb-2">
            <span className="font-semibold">Dress Code: </span>
            {meetup?.additionalInformation?.dressCode}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Age Restrictions: </span>
            {meetup?.additionalInformation?.ageRestrictions}
          </p>
          <p className="py-4 text-2xl font-semibold">Event Tags:</p>
          <div className="flex items-center justify-start gap-4">
            {meetup?.eventTags?.map((tag, index) => (
              <div
                key={index}
                className="py-1 px-2 bg-red-500 rounded-md text-[white]"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="">
          <div className="bg-[white] py-8 px-6 flex gap-6 flex-col justify-start w-[30rem] rounded-md">
            <div className="flex gap-3 items-center justify-start">
              <AiOutlineClockCircle />
              <div>
                <p>{meetup?.eventStartTime} to</p>
                <p>{meetup?.eventEndTime}</p>
              </div>
            </div>
            <div className="flex gap-3 items-center justify-start">
              <FiMapPin />
              <div>
                <p>{meetup?.location}</p>
                <p>{meetup?.address}</p>
              </div>
            </div>
            <div className="flex gap-3 items-center justify-start">
              <BiRupee className="text-xl" />
              <p>{meetup?.price}</p>
            </div>
          </div>
          <p className="py-5 text-2xl font-semibold">
            Speakers: ({meetup?.speakers?.length})
          </p>
          <div className="flex items-center justify-start gap-6 flex-wrap">
            {meetup?.speakers?.map((speaker, index) => (
              <div
                key={index}
                className="py-4 px-6 bg-[white] flex flex-col items-center gap-2 rounded-md"
              >
                <img
                  src={speaker?.image}
                  alt={speaker?.name}
                  className="w-[8rem] h-[8rem] rounded-full object-cover"
                />
                <div className="text-center">
                  <p className="text-lg font-semibold">{speaker?.name}</p>
                  <p>{speaker?.designation}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="py-6 text-center">
            {meetup?.isPaid ? (
              <button className="py-2 px-8 bg-red-500 text-[white] rounded-md hover:bg-red-600 disabled hover:cursor-not-allowed">
                Already RSVPed
              </button>
            ) : (
              <button
                className="py-2 px-8 bg-red-500 text-[white] rounded-md hover:bg-red-600 hover:cursor-pointer"
                onClick={() => setShowModal(true)}
              >
                RSVP
              </button>
            )}
          </div>
        </div>
      </div>
      {showModal && (
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          <>
            <RSVPModal setShowModal={setShowModal} />
          </>
        </Modal>
      )}
    </div>
  );
};
