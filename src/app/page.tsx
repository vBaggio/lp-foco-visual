import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ClientStrip } from "./components/ClientStrip";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
      <ClientStrip />
    </>
  );
}
