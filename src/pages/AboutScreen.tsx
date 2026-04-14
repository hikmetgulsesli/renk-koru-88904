import { useNavigate } from 'react-router-dom';
import { BilgiEkrani } from '../screens/BilgiEkrani';

export function AboutScreen(): JSX.Element {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <BilgiEkrani
      onBack={handleBack}
    />
  );
}
