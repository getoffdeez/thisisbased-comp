import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col p-4 gap-4 pattern-bg sm:h-screen">
      <Navbar />
       <Dashboard />
       <Footer />
    </main>
  );
}
