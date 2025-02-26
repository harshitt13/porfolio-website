// src/App.jsx
// eslint-disable-next-line no-unused-vars
import React from "react";
import SideNav from "./components/SideNav";

export default function App() {
  return (
    <div className="flex">
      <SideNav />
      <main className="flex-1 p-8 lg:ml-64">
        <section id="home" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-4">Home</h2>
          <p>Welcome to my portfolio!</p>
        </section>

        <section id="about" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p>This is the about section.</p>
        </section>

        <section id="resume" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-4">Resume</h2>
          <p>This is the resume section.</p>
        </section>

        <section id="projects" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p>This is the projects section.</p>
        </section>

        <section id="contact" className="min-h-screen">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p>This is the contact section.</p>
        </section>
      </main>
    </div>
  );
}