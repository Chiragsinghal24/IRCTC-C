import React, { useEffect, useState } from 'react';

const Coachbox = ({ classtype, trainnumber, from, to, date }) => {
  const [available, setAvailable] = useState("");
  const [fare, setFare] = useState("");
  const [loading, setLoading] = useState(true); // Add loading state

  const inputDate = new Date(date);
  const year = inputDate.getFullYear();
  const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
  const day = inputDate.getDate().toString().padStart(2, '0');

  const convertedDate = `${year}${month}${day}`;

  const fetchMe = async () => {
    setLoading(true); // Set loading to true when starting the fetch
    const url = `https://us-central1-mind-pen-22c05.cloudfunctions.net/getAlternatives?train_no=${trainnumber}&src=${from}&des=${to}&date=${convertedDate}&travel_class=${classtype}&quota=GN`;
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log("data result", result);
      console.log("result is:", result.data);
      setAvailable(result[0].availability);
      setFare(result[0].fare);
      setLoading(false); // Set loading to false after fetching data
    } catch (error) {
      console.error(error);
      setLoading(false); // Set loading to false in case of an error
    }
  };

  useEffect(() => {
    fetchMe();
  }, []);

  return (
    <div>
      {loading ? (
        // Show loading indicator or message while data is being fetched
        <p><span className="loading loading-dots loading-lg"></span></p>
      ) : (
        <div class="border-t border-r border-l h-34 w-36 rounded-md flex flex-col">
          <div class="border-b text-sm text-red-700">
            <div className='flex'>
              <div className='flex'>
                <p className='text-xl ml-3'>{classtype}</p>
              </div>
              <hr className='transform -rotate-90 w-10 mt-2 ml-1'></hr>
              <p className='text-xl'>₹ {fare}</p>
            </div>
          </div>
          <div className="text-red-700">
            <div className='flex'>
              <p className='mt-1 font-bold text-center'>{available}</p>
            </div>
          </div>
          <div className='mt-2'>
            <button className='max-h-[30px] min-h-[20px] btn btn-gray-400 rounded-md rounded-t-none w-full'>Book Now</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Coachbox;
