import React from 'react';
import { Link } from 'react-router-dom';

const TrainCard = ({ train }) => {
  return (
    <div>
      <h3>{train.trainName}</h3>
      <p>Train Number: {train.trainNumber}</p>
      {/* Display other train information */}
      <Link to={`/train/${train.trainNumber}`}>View Details</Link>
    </div>
  );
};

export default TrainCard;
