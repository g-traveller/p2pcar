import { notFound } from 'next/navigation';
import PaymentPage from '@/components/PaymentPage';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PaymentRoute({ params }: PageProps) {
  const { id } = await params;

  // Validate booking ID
  const bookingId = parseInt(id);
  if (isNaN(bookingId)) {
    notFound();
  }

  return <PaymentPage bookingId={bookingId} />;
}
