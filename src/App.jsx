import "./App.css";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <main className="screen">
      <div className="layout">
        <CTA />
        <footer className="site-footer">
          <p>Serving Texas &amp; surrounding areas</p>
          <Contact />
        </footer>
      </div>
    </main>
  );
}
