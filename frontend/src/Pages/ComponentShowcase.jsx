import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

import ThemeLayout from "../components/ThemeLayout";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Button,
  Input,
  Loader,
  Modal,
  Toast,
} from "../components/ui";

function ComponentShowcase() {
  const { darkMode } = useTheme();

  const [name, setName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const cardStyle = darkMode
    ? "bg-white/5 border border-white/10"
    : "bg-white border border-slate-200 shadow-lg";

  return (
    <ThemeLayout>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="mb-10">

          <h1
            className={`text-4xl font-bold mb-3 ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            UI Component Library
          </h1>

          <p
            className={`${
              darkMode
                ? "text-slate-400"
                : "text-slate-600"
            }`}
          >
            Showcase of reusable UI components.
          </p>

        </div>

        {/* Buttons */}
        <div className={`${cardStyle} rounded-3xl p-8 mb-8`}>

          <h2
            className={`text-2xl font-bold mb-5 ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Buttons
          </h2>

          <div className="flex gap-4 flex-wrap">
            <Button>
              Primary Button
            </Button>

            <Button variant="secondary">
              Secondary Button
            </Button>
          </div>

        </div>

        {/* Input */}
        <div className={`${cardStyle} rounded-3xl p-8 mb-8`}>

          <h2
            className={`text-2xl font-bold mb-5 ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Input
          </h2>

          <Input
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

        </div>

        {/* Loader */}
        <div className={`${cardStyle} rounded-3xl p-8 mb-8`}>

          <h2
            className={`text-2xl font-bold mb-5 ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Loader
          </h2>

          <Loader />

        </div>

        {/* Modal */}
        <div className={`${cardStyle} rounded-3xl p-8 mb-8`}>

          <h2
            className={`text-2xl font-bold mb-5 ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Modal
          </h2>

          <Button
            onClick={() =>
              setShowModal(true)
            }
          >
            Open Modal
          </Button>

        </div>

        {/* Toast */}
        <div className={`${cardStyle} rounded-3xl p-8`}>

          <h2
            className={`text-2xl font-bold mb-5 ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Toast
          </h2>

          <Button
            onClick={() => {
              setShowToast(true);

              setTimeout(() => {
                setShowToast(false);
              }, 3000);
            }}
          >
            Show Toast
          </Button>

        </div>

        {/* Modal Component */}
        <Modal
          isOpen={showModal}
          onClose={() =>
            setShowModal(false)
          }
        >
          <h2
            className={`text-2xl font-bold ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Demo Modal
          </h2>

          <p
            className={`mt-3 ${
              darkMode
                ? "text-slate-300"
                : "text-slate-600"
            }`}
          >
            This modal demonstrates the reusable
            modal component.
          </p>
        </Modal>

        {/* Toast Component */}
        {showToast && (
          <Toast
            message="Toast component working successfully!"
          />
        )}

      </main>

      <Footer />
    </ThemeLayout>
  );
}

export default ComponentShowcase;