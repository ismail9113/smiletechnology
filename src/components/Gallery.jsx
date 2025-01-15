import React, { useState } from "react";

const PortfolioSection = () => {
  const [filter, setFilter] = useState("all"); // State to track active filter

  const handleFilterChange = (category) => {
    setFilter(category); // Update the filter state with the selected category
  };

  const containerStyle = {
    padding: '0 15px',
    margin: '0 auto',
    maxWidth: '100%',
  };

  const textCenterStyle = {
    textAlign: 'center',
    marginBottom: '30px',
  };

  const headingStyle = {
    fontSize: '31px',
    fontWeight: 'bold',
    marginBottom: '15px',
  };

  const paragraphStyle = {
    color: '#6c757d',
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '0 10px',
    background: 'none',
    border: '2px solid #000',
    cursor: 'pointer',
    whiteSpace: 'nowrap', // Ensures buttons don't wrap to the next line
    flexShrink: 0, // Prevents buttons from shrinking
  };

  const categoryScrollWrapper = {
    overflowX: 'auto', // Enables horizontal scrolling
    whiteSpace: 'nowrap', // Prevents line wrapping
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
    scrollbarWidth: 'none', // Hides scrollbar in Firefox
    msOverflowStyle: 'none', // Hides scrollbar in IE 10+
  };

  const categoryScrollStyle = {
    display: 'inline-flex',
    padding: '10px 0',
  };

  const portfolioListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '30px',
  };

  const responsiveButtonStyle = {
    '@media (max-width: 768px)': {
      buttonStyle: {
        fontSize: '14px',
        padding: '8px 15px',
      }
    }
  };

  const scrollBarHideStyle = {
    '::-webkit-scrollbar': {
      display: 'none', // Hides the scrollbar in Chrome/Safari
    },
  };

  const responsivePortfolioStyle = {
    '@media (max-width: 768px)': {
      flex: '1 0 48%', // 2 items per row on tablets
    },
    '@media (max-width: 480px)': {
      flex: '1 0 100%', // Full width on mobile
    },
  };

  // List of portfolio items with categories
  const portfolioItems = [
    { category: "dev", imageUrl: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
    { category: "web", imageUrl: "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" },
    { category: "wp", imageUrl: "https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" },
  ];

  return (
    <section id=" #projects #portfolio" style={{  padding: '60px 0' }}>
      <div style={containerStyle}>
        <div style={textCenterStyle}>
          <h2 style={headingStyle} className="text-purple-700">/..Project Gallery../</h2>
          <p style={paragraphStyle}>Use all the same size pictures :)</p>
        </div>

        {/* Scrollable Category Section */}
        <div style={{ ...categoryScrollWrapper, ...scrollBarHideStyle }}>
          <nav style={categoryScrollStyle}>
            <button className=" hover:text-purple-600" style={buttonStyle} onClick={() => handleFilterChange('all')}>All</button>
            <button className=" hover:text-purple-600" style={buttonStyle} onClick={() => handleFilterChange('web')}>Web Design</button>
            <button className=" hover:text-purple-600" style={buttonStyle} onClick={() => handleFilterChange('dev')}>Development</button>
            <button className=" hover:text-purple-600" style={buttonStyle} onClick={() => handleFilterChange('wp')}>WordPress</button>
            {/* Add more buttons if necessary */}
          </nav>
        </div>

        {/* Portfolio Items */}
        <ul style={portfolioListStyle}>
          {/* Filter the portfolio items based on the selected filter */}
          {portfolioItems
            .filter(item => filter === "all" || item.category === filter)
            .map((item, index) => (
              <PortfolioItem key={index} category={item.category} imageUrl={item.imageUrl} style={responsivePortfolioStyle} />
            ))}
        </ul>
      </div>
    </section>
  );
};

const PortfolioItem = ({ category, imageUrl, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  const itemStyle = {
    flex: '1 0 21%', // Default 4 items per row
    margin: '10px',
    position: 'relative',
    listStyle: 'none',
    ...style,
  };

  const imgStyle = {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 0.3s ease',
  };

  const overlayContentStyle = {
    textAlign: 'center',
    color: '#fff',
  };

  const iconStyle = {
    fontSize: '24px',
    margin: '0 10px',
    color: '#fff',
  };

  return (
    <li
      className={`mix ${category}`}
      style={itemStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ position: 'relative' }}>
        <img src={imageUrl} alt={`${category} project`} style={imgStyle} />
        <div style={overlayStyle}>
          <div style={overlayContentStyle}>
            <p style={{ fontSize: '18px' }}>Project Name</p>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
              <a href="#" title="View Project" style={iconStyle}>
                <i className="fas fa-link"></i>
              </a>
              <a href={imageUrl} title="Click to zoom-in" style={iconStyle}>
                <i className="fas fa-search"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PortfolioSection;
