import { notFound } from 'next/navigation';
import VehicleDetailPage from '@/components/VehicleDetailPage';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function VehicleDetailRoute({ params }: PageProps) {
  const { id } = await params;

  // Validate vehicle ID
  const vehicleId = parseInt(id);
  if (isNaN(vehicleId)) {
    notFound();
  }

  return <VehicleDetailPage vehicleId={vehicleId} />;
}
