export const getDate = (dateString) => {
  const dateObj = new Date(dateString);

  const dayOfWeek = dateObj.toLocaleString("en-us", { weekday: "short" });
  const month = dateObj.toLocaleString("en-us", { month: "short" });
  const dayOfMonth = dateObj.getDate();
  const year = dateObj.getFullYear();

  let hours = dateObj.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  let minutes = dateObj.getMinutes();
  minutes = String(minutes).padStart(2, "0");

  let seconds = dateObj.getSeconds();
  seconds = String(seconds).padStart(2, "0");

  const formattedDate = `${dayOfWeek} ${month} ${dayOfMonth} ${year} at ${hours}:${minutes}:${seconds} ${ampm}`;

  return formattedDate;
};
