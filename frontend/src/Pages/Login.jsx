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
    ? "bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-cyan-500/10"
    : "bg-white border border-slate-200 shadow-xl";

  return (
    <ThemeLayout>
      <Navbar />

      <main className="max-w-md mx-auto px-6 py-20">

        <div className={`${cardStyle} rounded-3xl p-8`}>

          <h1
            className={`text-3xl font-bold mb-2 ${
              darkMode
                ? "text-white"
                : "text-slate-900"
            }`}
          >
            Welcome Back
          </h1>

          <p
            className={`mb-8 ${
              darkMode
                ? "text-slate-400"
                : "text-slate-600"
            }`}
          >
            Sign in to StayInsight AI
          </p>

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
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <Button type="submit">
              Log in
            </Button>

          </form>

        </div>

      </main>

      <Footer />
    </ThemeLayout>
  );
}

export default Login;