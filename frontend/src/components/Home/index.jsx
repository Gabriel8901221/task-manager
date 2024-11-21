import React, { useEffect, useState } from "react";

const Home = () => {
  const [time, setTime] = useState(new Date());

  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="w-full h-screen p-12 flex flex-col gap-16">
      <div className='bg-[url("bg-home-task.jpg")] bg-cover bg-center rounded-md w-full h-80 bg-blue-950 bg-opacity-70 bg-blend-multiply p-6 flex  justify-start items-end'>
        <div className="flex flex-col gap-2 font-semibold">
          <h1 className="text-5xl">
            {time.toLocaleTimeString("en", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </h1>
          <h2 className="text-xl">{currentDate}</h2>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-72 h-full bg-blue-500 p-4 rounded-md flex flex-col gap-4">
          <div className="flex flex-col ">
            <h3 className="text-2xl font-bold">Taks</h3>
            <p>Start planning your tasks today</p>
          </div>

          <button className="w-full h-10 bg-white text-black font-bold rounded-md">Plan now</button>
        </div>
        <div className="w-72 h-full bg-orange-500 p-4 rounded-md flex flex-col gap-4">
        <div className="flex flex-col ">
            <h3 className="text-2xl font-bold">Task with Time</h3>
          <p>do your tasks using a timer</p>
        </div>
        
          <button className="w-full h-10 bg-white text-black font-bold rounded-md">Start now</button>
        </div>
        <div className="w-72 h-full bg-purple-700 p-4 rounded-md flex flex-col gap-4">
        <div className="flex flex-col ">
           <h3 className="text-2xl font-bold">Taks Favorites</h3>
          <p>See your favorite tasks or add one</p>
        </div>
         
          <button className="w-full h-10 bg-white text-black font-bold rounded-md">See now</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
