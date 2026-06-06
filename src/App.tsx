import { Route, Routes } from 'react-router-dom';
import { CartDrawer } from './components/shop/CartDrawer';
import { QuickViewModal } from './components/shop/QuickViewModal';
import { AnnounceBar } from './components/layout/AnnounceBar';
import { Navbar } from './components/layout/Navbar';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { ToastContainer } from './components/ui/ToastContainer';
import { ShopProvider } from './context/ShopContext';
import { HaulPage } from './pages/HaulPage';
import { HomePage } from './pages/HomePage';
import { MenPage } from './pages/MenPage';
import { TrendingPage } from './pages/TrendingPage';
import { WomenPage } from './pages/WomenPage';

export default function App() {
  return (
    <ShopProvider>
      <ScrollToTop />
      <AnnounceBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/men" element={<MenPage />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/haul" element={<HaulPage />} />
      </Routes>
      <CartDrawer />
      <QuickViewModal />
      <ToastContainer />
    </ShopProvider>
  );
}
