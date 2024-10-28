import { useNavigate } from '@solidjs/router';

export const GoHomeButton = () => {
  const navigate = useNavigate();

  return <button onClick={() => navigate('/')}>Go Home</button>;
};
