import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchSingleTrainDetails } from './api'; // You'll need to implement this

const TrainDetails = () => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
    // Fetch single train details based on 'trainNumber' parameter
    fetchSingleTrainDetails(trainNumber)
      .then(data => setTrain(data))
      .catch(error => console.error(error));
  }, [trainNumber]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Train Details</h1>
      <p>Train Number: {train.trainNumber}</p>
      {/* Display other train details */}
    </div>
  );
};

export default TrainDetails;
