import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button, Input } from "../components/ui";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-blue-950 text-white">
      <Navbar />

      <main className="max-w-md mx-auto px-6 py-20">

        <div className="
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-3xl
          p-8
          shadow-2xl
          shadow-cyan-500/10
        ">

          <h1 className="text-3xl font-bold mb-2">
            Welcome Back
          </h1>

          <p className="text-slate-400 mb-8">
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
              Login
            </Button>

          </form>

        </div>

      </main>

      <Footer />
    </div>
  );
}

export default Login;