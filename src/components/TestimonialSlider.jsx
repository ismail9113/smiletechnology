import React, { useEffect } from 'react';

const ReviewsSection = () => {
    // Inline styles
    const reviewsSectionStyle = {
        padding: '20px',
        backgroundColor: '#f9f9f9',
        color: '#333',
        overflow: 'hidden',
    };

    const reviewsContainerStyle = {
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
    };

    const headingStyle = {
        marginBottom: '20px',
        fontSize: '2rem',

    };

    const reviewsSliderStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'nowrap',
        gap: '20px',
        animation: 'scrollReviews 40s linear infinite', // Slow down the animation to 25 seconds
        whiteSpace: 'nowrap', // Prevent line breaks for the slider
    };

    const reviewBoxStyle = {
        minWidth: '300px',
        padding: '15px',
        background: '#fff',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        fontSize: '1rem',
        display: 'inline-block', // Keep boxes inline for scrolling effect
        overflow: 'hidden', // Hide overflow text
        textOverflow: 'ellipsis', // Add ellipsis for overflowing text
        whiteSpace: 'normal', // Allow text to wrap normally
    };

    const starsStyle = {
        marginTop: '10px',
        fontSize: '1.5rem',
        color: '#FFA500',
    };

    // Animation keyframes as a string
    const animationKeyframes = `
        @keyframes scrollReviews {
            0% {
                transform: translateX(100%); /* Start with the content off-screen to the right */
            }
            100% {
                transform: translateX(-100%); /* End with the content off-screen to the left */
            }
        }
    `;

    // Inject the animation keyframes into the document
    useEffect(() => {
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(animationKeyframes, styleSheet.cssRules.length);
    }, []);

    return (
        <section id="reviews" style={reviewsSectionStyle}>
            {/* Container for the reviews section */}
            <div className="reviews-container" style={reviewsContainerStyle}>
                {/* Heading for the reviews section */}
                <h2 style={headingStyle} className='font-bold text-purple-700'>/...What People Are Saying.../</h2>
                {/* Slider container holding all review boxes */}
                <div className="reviews-slider" style={reviewsSliderStyle}>
                    {/* Individual review boxes */}
                    <div className="review-box" style={reviewBoxStyle}>
                        <p>"This challenge is a great way to enhance your skills!" - John D.</p>
                        <div className="stars" style={starsStyle}>★★★★☆</div>
                    </div>
                    <div className="review-box" style={reviewBoxStyle}>
                        <p>"I loved connecting with other developers!" - Emma W.</p>
                        <div className="stars" style={starsStyle}>★★★★★</div>
                    </div>
                    <div className="review-box" style={reviewBoxStyle}>
                        <p>"The resources provided are top-notch!" - Michael S.</p>
                        <div className="stars" style={starsStyle}>★★★★☆</div>
                    </div>
                    <div className="review-box" style={reviewBoxStyle}>
                        <p>"A must-join challenge for anyone serious about learning." - Sarah K.</p>
                        <div className="stars" style={starsStyle}>★★★★★</div>
                    </div>
                    <div className="review-box" style={reviewBoxStyle}>
                        <p>"Excellent way to improve my React skills!" - Alice L.</p>
                        <div className="stars" style={starsStyle}>★★★★☆</div>
                    </div>
                    <div className="review-box" style={reviewBoxStyle}>
                        <p>"The community support is amazing!" - James P.</p>
                        <div className="stars" style={starsStyle}>★★★★★</div>
                    </div>
                    <div className="review-box" style={reviewBoxStyle}>
                        <p>"A well-structured challenge with great resources!" - Olivia H.</p>
                        <div className="stars" style={starsStyle}>★★★★★</div>
                    </div>
                    <div className="review-box" style={reviewBoxStyle}>
                        <p>"I have learned so much in such a short time!" - David G.</p>
                        <div className="stars" style={starsStyle}>★★★★☆</div>
                    </div>
                    <div className="review-box" style={reviewBoxStyle}>
                        <p>"Highly recommended for anyone looking to sharpen their skills!" - Lucy B.</p>
                        <div className="stars" style={starsStyle}>★★★★★</div>
                    </div>
                    <div className="review-box" style={reviewBoxStyle}>
                        <p>"A fantastic opportunity to grow and learn with others!" - Mark T.</p>
                        <div className="stars" style={starsStyle}>★★★★★</div>
                    </div>
                    <div className="review-box" style={reviewBoxStyle}>
                        <p>"This challenge helped me land my first job in tech!" - Rachel M.</p>
                        <div className="stars" style={starsStyle}>★★★★★</div>
                    </div>
                    <div className="review-box" style={reviewBoxStyle}>
                        <p>"The perfect blend of theory and practice!" - Chris W.</p>
                        <div className="stars" style={starsStyle}>★★★★☆</div>
                    </div>
                    <div className="review-box" style={reviewBoxStyle}>
                        <p>"The daily challenges kept me motivated!" - Zoe A.</p>
                        <div className="stars" style={starsStyle}>★★★★★</div>
                    </div>
                    <div className="review-box" style={reviewBoxStyle}>
                        <p>"A transformative experience for my coding journey!" - Liam N.</p>
                        <div className="stars" style={starsStyle}>★★★★★</div>
                    </div>
                    <div className="review-box" style={reviewBoxStyle}>
                        <p>"The collaboration opportunities were priceless!" - <span>Sofia R.</span> </p>
                        <div className="stars" style={starsStyle}>★★★★☆</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;
