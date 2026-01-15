'use client';

import RegisterForm from '@/components/RegisterForm';
import { register } from '@/services/authApi';

export default function RegisterPage() {
  const handleRegister = async (data: { name: string; email: string; phone: string; password: string }) => {
    try {
      await register({
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
      });
      // Registration successful, redirect to login or home
      window.location.href = '/login';
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  return <RegisterForm onRegister={handleRegister} />;
}
