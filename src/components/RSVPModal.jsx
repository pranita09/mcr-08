const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid gray",
  boxShadow: 24,
  p: 4,
};

export const RSVPModal = ({ setShowModal }) => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setShowModal(false);
  };
  return (
    <div style={styles} className="bg-[white] py-4 px-6 rounded-md">
      <p className="py-1 text-lg font-semibold">Complete your RSVP</p>
      <p className="py-2 text-[gray]">Fill in your personal information.</p>
      <form className="flex flex-col gap-4 py-3 " onSubmit={formSubmitHandler}>
        <label>
          <p>Name:</p>
          <input
            type="text"
            className="border rounded-md p-1 w-full"
            required
          />
        </label>
        <label>
          <p>Email:</p>
          <input
            type="email"
            className="border rounded-md p-1 w-full"
            required
          />
        </label>
        <p className="text-[gray]">* You have to make the payment at venue.</p>
        <button
          type="submit"
          className="py-2 bg-red-500 text-[white] rounded-md cursor-pointer hover:bg-red-600"
        >
          RSVP
        </button>
      </form>
    </div>
  );
};
