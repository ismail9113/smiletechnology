import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faKissWinkHeart, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

const ReviewComponent = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const [thankYouVisible, setThankYouVisible] = useState(false);

  const handleStarClick = (index) => {
    setRating(index);
  };

  const handleSubmit = () => {
    if (reviewText.trim() === '') {
      setErrorVisible(true);
      setTimeout(() => setErrorVisible(false), 5000);
      return;
    }
    // Submit the review here (e.g., send to a server)
    setThankYouVisible(true);
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center pb-4   px-4 pt-5">
      <div className="reviews flex justify-center items-center w-full mb-10">
        <div className="arrow1 arrows cursor-pointer text-2xl">
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
        <div className="reviewstuff w-full md:w-4/5 text-center px-4 md:px-12">
          <p className="review text-lg">{reviewText || "Your opinion matters! Could you share a quick review with us?"}</p>
          <div className="bottomreview flex justify-center items-center mt-5">
            <div className="rname flex justify-center mr-8">
              <span className="rfname">{firstName}</span>
              <span className="rlname ml-1">{lastName}</span>
            </div>
            <div className="stars2 flex">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={index < rating ? fasStar : farStar}
                  className="text-yellow-500 text-xl"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="arrow2 arrows cursor-pointer text-2xl">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>

      {errorVisible && (
        <div className="errorcontainer flex items-center mb-12 bg-red-500 text-white p-4 rounded w-full max-w-md ">
          <FontAwesomeIcon icon={faExclamationCircle} className="mr-2 text-lg" />
          <div>Your review must be legible! Try again!</div>
        </div>
      )}

      {thankYouVisible && (
        <div className="thank-you-container flex items-center text-2xl text-gray-500 mb-6">
          <div className="thank-you">Thank you for your review!</div>
          <FontAwesomeIcon icon={faKissWinkHeart} className="text-pink-500 ml-2" />
        </div>
      )}

      <div className="input-container flex flex-col items-center  p-8 rounded shadow-md w-full max-w-md bg-gray-100">
        <div className="names flex justify-between w-full mb-4">
          <input
            type="text"
            className="firstname w-full p-2 border rounded mr-2"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="lastname w-full p-2 border rounded ml-2"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="input flex flex-col w-full mb-4">
          <textarea
            className="reviewinp p-2 border rounded mb-2"
            placeholder="Write a review"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <div className="stars flex mb-4 justify-center">
            {[1, 2, 3, 4, 5].map((star, index) => (
              <FontAwesomeIcon
                key={index}
                icon={index < rating ? fasStar : farStar}
                className="cursor-pointer text-yellow-500 text-xl"
                onClick={() => handleStarClick(index + 1)}
              />
            ))}
          </div>
          <button className="submit bg-purple-600 hover:bg-purple-800 text-white p-2 rounded" onClick={handleSubmit}>
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
