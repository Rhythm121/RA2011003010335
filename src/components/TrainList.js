import React, { useState, useEffect } from 'react';
import TrainCard from './TrainCard';
import { fetchTrainSchedule } from './api'; // You'll need to implement this

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch train schedule data and update 'trains' state
    fetchTrainSchedule()
      .then(data => setTrains(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>All Trains</h1>
      {trains.map(train => (
        <TrainCard key={train.trainNumber} train={train} />
      ))}
    </div>
  );
};

export default TrainList;
