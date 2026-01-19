'use client';

import { Suspense } from 'react';
import RegisterForm from '@/components/RegisterForm';

export default function RegisterPage() {
  // The RegisterForm component now handles all validation and registration logic internally
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterForm />
    </Suspense>
  );
}
