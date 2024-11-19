import React from "react";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Footer from "./components/Footer/Footer";

const App = () => {
  const location = useLocation();

  return (
    <div className="relative">
      <Background />
      <div className="relative z-10 text-white">
        <Navbar />
        <main className="min-h-[calc(100vh-120px)]">
          <TransitionGroup>
            <CSSTransition key={location.key} classNames="page" timeout={500}>
              <div>
                <Outlet />
              </div>
            </CSSTransition>
          </TransitionGroup>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
