import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ThemeLayout from "../components/ThemeLayout";

import { Button, Input } from "../components/ui";

function Login() {
  const { darkMode } = useTheme();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  };

  const cardStyle = darkMode
    ? `
      bg-[#312924]
      border border-[#3A302A]
      shadow-sm
      shadow-black/20
    `
    : `
      bg-white
      border border-[#EFE5DA]
      shadow-sm
      shadow-[#26211E]/5
    `;

  return (
    <ThemeLayout>
      <Navbar />

      <main className="max-w-md mx-auto px-6 py-20">

        <div className={`${cardStyle} rounded-3xl p-8`}>

          <div className="text-center">

            <span className="text-[#C85A32] font-medium">
              Welcome Back
            </span>

            <h1
              className={`mt-3 text-4xl font-bold font-serif ${
                darkMode
                  ? "text-[#F7F1EA]"
                  : "text-[#26211E]"
              }`}
              style={{
                fontFamily:
                  "'Playfair Display', Georgia, serif",
              }}
            >
              Sign In to StayInsight AI
            </h1>

            <p
              className={`mt-4 mb-8 ${
                darkMode
                  ? "text-[#C8B8A6]"
                  : "text-[#61554E]"
              }`}
            >
              Access guest insights, hospitality analytics,
              and personalized recommendations.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <div className="pt-2">
              <Button type="submit">
                Log In
              </Button>
            </div>

          </form>

        </div>

      </main>

      <Footer />
    </ThemeLayout>
  );
}

export default Login;