import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col p-4 h-screen gap-4 pattern-bg">
      <Navbar />
       <Dashboard />
       <Footer />
    </main>
  );
}
