import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

/**
 * Foco Gestão Visual — Landing Page
 *
 * Estrutura pós-reset: somente Hero + Navbar consolidados.
 * Demais seções (estrutura, ordem, composição) serão definidas após
 * brainstorming de redesign.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
      </main>
    </>
  );
}
