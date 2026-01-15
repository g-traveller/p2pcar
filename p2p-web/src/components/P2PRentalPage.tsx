import Navbar from './Navbar';
import SearchBar from './SearchBar';
import VehicleGrid from './VehicleGrid';
import Footer from './Footer';
import styles from './P2PRentalPage.module.css';

export default function P2PRentalPage() {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <SearchBar />
        <VehicleGrid />
      </main>
      <Footer />
    </div>
  );
}
