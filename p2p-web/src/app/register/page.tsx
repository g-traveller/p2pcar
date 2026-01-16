'use client';

import RegisterForm, { RegisterData } from '@/components/RegisterForm';
import { register } from '@/services/authApi';

export default function RegisterPage() {
  const handleRegister = async (data: RegisterData) => {
    try {
      // RegisterForm now sends the data in the correct format
      // The handleSubmit in RegisterForm handles the conversion
      await register({
        name: data.name,
        email: data.email,
        phone: data.phone,
        password: data.password,
        verificationCode: data.verificationCode,
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
