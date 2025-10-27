import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();
      const [hover, setHover] = useState(false);
      const [active, setActive] = useState(false);
  
      const style: React.CSSProperties = {
          
          color: "#815656",
          padding: '10px 16px',
          borderRadius: 10,
          transform: active ? 'translateY(1px) scale(0.996)' : hover ? 'translateY(-3px) scale(1.01)' : 'none',
          cursor: 'pointer',
          fontSize: 15,
          fontWeight: 600,
          transition: 'all 160ms ease',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
      };

  return (
    <button
    className="bg-MyCream hover:bg-PressCream rounded-md p-5"
    aria-label="Log in"
            style={style}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => {
                setHover(false);
                setActive(false);
            }}
            onMouseDown={() => setActive(true)}
            onMouseUp={() => setActive(false)}
            onFocus={() => setHover(true)}
            onBlur={() => {
                setHover(false);
                setActive(false);
            }}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;