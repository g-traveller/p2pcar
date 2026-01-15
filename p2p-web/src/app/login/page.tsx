import LoginForm from '@/components/LoginForm';
import { LoginRequest } from '@/types/api';

export default function LoginPage() {
  const handleLogin = async (data: LoginRequest) => {
    'use server';

    // This will be replaced with actual API call
    // For now, it's handled client-side in LoginForm component
    console.log('Login data:', data);
  };

  return <LoginForm />;
}
