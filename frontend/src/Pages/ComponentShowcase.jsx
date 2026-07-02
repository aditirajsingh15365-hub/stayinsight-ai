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
    ? "bg-[#312924] border border-[#3A302A]"
    : "bg-white border border-[#EFE5DA] shadow-sm shadow-[#26211E]/5";

  return (
    <ThemeLayout>
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="mb-10">

          <span className="text-[#C85A32] font-semibold">
            Design System
          </span>

          <h1
            className={`text-4xl md:text-5xl font-bold font-serif mt-3 ${
              darkMode
                ? "text-[#F7F1EA]"
                : "text-[#26211E]"
            }`}
            style={{
              fontFamily:
                "'Playfair Display', Georgia, serif",
            }}
          >
            Component Library
          </h1>

          <p
            className={`mt-4 ${
              darkMode
                ? "text-[#C8B8A6]"
                : "text-[#61554E]"
            }`}
          >
            Reusable interface elements used throughout
            StayInsight AI.
          </p>

        </div>

        {/* Buttons */}
        <div className={`${cardStyle} rounded-3xl p-8 mb-8`}>

          <h2
            className={`text-2xl font-bold mb-5 ${
              darkMode
                ? "text-[#F7F1EA]"
                : "text-[#26211E]"
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
                ? "text-[#F7F1EA]"
                : "text-[#26211E]"
            }`}
          >
            Input Field
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
                ? "text-[#F7F1EA]"
                : "text-[#26211E]"
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
                ? "text-[#F7F1EA]"
                : "text-[#26211E]"
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
                ? "text-[#F7F1EA]"
                : "text-[#26211E]"
            }`}
          >
            Toast Notification
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
                ? "text-[#F7F1EA]"
                : "text-[#26211E]"
            }`}
          >
            Demo Modal
          </h2>

          <p
            className={`mt-3 ${
              darkMode
                ? "text-[#C8B8A6]"
                : "text-[#61554E]"
            }`}
          >
            This modal demonstrates the reusable
            modal component used throughout the
            platform.
          </p>
        </Modal>

        {/* Toast Component */}
        {showToast && (
          <Toast
            message="Component library is working successfully!"
          />
        )}

      </main>

      <Footer />
    </ThemeLayout>
  );
}

export default ComponentShowcase;