import { notFound } from 'next/navigation';
import BookingPage from '@/components/BookingPage';

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function BookVehiclePage({ params }: PageProps) {
  const { id } = await params;

  // Validate vehicle ID
  const vehicleId = parseInt(id);
  if (isNaN(vehicleId)) {
    notFound();
  }

  return <BookingPage vehicleId={vehicleId} />;
}
