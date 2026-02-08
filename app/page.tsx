import ThreeBackground from '../components/ThreeBackground';
import Header from '../components/Header';
import BioCard from '../components/BioCard';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className="min-h-screen">
            <ThreeBackground />
            <div className="content-scroller">
                <Header />
                <main className="w-full py-16 sm:py-24 flex items-center justify-center">
                    <BioCard />
                </main>
                <Gallery />
                <Footer />
            </div>
        </div>
    );
}
