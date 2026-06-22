import { useState } from "react";

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
  const [name, setName] = useState("");

  const [showModal, setShowModal] =
    useState(false);

  const [showToast, setShowToast] =
    useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-blue-950 text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 py-12">

        <h1 className="text-4xl font-bold mb-3">
          UI Component Library
        </h1>

        <p className="text-slate-400 mb-10">
          Showcase of reusable UI components.
        </p>

        {/* Buttons */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">

          <h2 className="text-2xl font-bold mb-5">
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

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">

          <h2 className="text-2xl font-bold mb-5">
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

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">

          <h2 className="text-2xl font-bold mb-5">
            Loader
          </h2>

          <Loader />

        </div>

        {/* Modal */}

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">

          <h2 className="text-2xl font-bold mb-5">
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

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <h2 className="text-2xl font-bold mb-5">
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

        <Modal
          isOpen={showModal}
          onClose={() =>
            setShowModal(false)
          }
        >
          <h2 className="text-2xl font-bold">
            Demo Modal
          </h2>

          <p className="mt-3 text-slate-300">
            This modal demonstrates the reusable
            modal component.
          </p>
        </Modal>

        {showToast && (
          <Toast
            message="Toast component working successfully!"
          />
        )}

      </main>

      <Footer />
    </div>
  );
}

export default ComponentShowcase;