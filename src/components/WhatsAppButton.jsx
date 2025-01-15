// WhatsAppButton.js
import React from 'react';

const WhatsAppButton = () => {
  return (
    <div
      style={{
        // position: 'fixed',
        bottom: '15px',
        right: '15px',
      }}
    >
      <div
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: '#10b418',
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          borderRadius: '50%',
          cursor: 'pointer',
          textAlign: 'center',
          color: '#ffffff',
          lineHeight: '65px',
          zIndex: 99,
          animation: 'pulse 1.8s ease-out infinite',
        }}
      >
        <a
          href="https://api.whatsapp.com/send?phone=9113407724&text=hello world"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'block',
            textDecoration: 'none',
          }}
        >
          <button
            style={{
              outline: 'none',
              width: '60px',
              height: '60px',
              border: 0,
              backgroundColor: '#2ecc71',
              padding: 0,
              borderRadius: '100%',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
              cursor: 'pointer',
              transition: 'opacity 0.3s, background 0.3s, boxShadow 0.3s',
              position: 'relative',
            }}
          >
            <span
              style={{
                content: "''",
                display: 'block',
                backgroundImage: 'url("//i.imgur.com/cAS6qqn.png")',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '60%',
                width: '100%',
                height: '100%',
                opacity: 1,
              }}
            ></span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default WhatsAppButton;
