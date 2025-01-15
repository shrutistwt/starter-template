import { useState, useEffect } from 'react';

const Component = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <div>{isClient ? "Client Rendered" : "Server Rendered"}</div>;
};
