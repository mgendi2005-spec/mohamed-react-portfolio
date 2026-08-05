import { Suspense, lazy } from "react";
import { useLocation, Routes, Route } from "react-router";
import { AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PageTransition from "./components/PageTransition";
import "./App.css";

const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <main>
        <Suspense fallback={<div className="route-fallback">Loading...</div>}>
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageTransition>
                    <HomePage />
                  </PageTransition>
                }
              />
              <Route
                path="/about"
                element={
                  <PageTransition>
                    <About />
                  </PageTransition>
                }
              />
              <Route
                path="/projects"
                element={
                  <PageTransition>
                    <Projects />
                  </PageTransition>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageTransition>
                    <Contact />
                  </PageTransition>
                }
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
    </>
  );
}

export default App;
