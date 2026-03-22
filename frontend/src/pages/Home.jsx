import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../services/authService";

export default function Home() {
  const [tab, setTab] = useState("login"); // "login" ou "register"
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError("");
    try {
      if (tab === "login") {
        const res = await login({ email: form.email, password: form.password });
        localStorage.setItem("token", res.data.access_token);
        navigate("/dashboard"); // à adapter selon ta route future
      } else {
        await register(form);
        alert("Compte créé avec succès !");
        setTab("login");
      }
    } catch (e) {
      setError("Email ou mot de passe invalide.");
    }
  };

  return (
    <div className="min-h-screen flex" style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2d5e 50%, #0a4a6e 100%)" }}>
      
      {/* LEFT SIDE */}
      <div className="flex-1 flex flex-col justify-center px-16 text-white">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-blue-900 font-bold text-lg">V</span>
          </div>
          <span className="text-xl font-semibold">VAERDIA ProjectFlow</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Bienvenue sur<br />
          <span style={{ color: "#00d4a0" }}>VAERDIA</span><br />
          <span style={{ color: "#00d4a0" }}>ProjectFlow</span>
        </h1>
        <p className="text-lg text-blue-200 mb-10 max-w-md">
          La plateforme de gestion de projet ultime pour les équipes modernes
        </p>
        <p className="text-blue-300 max-w-lg text-sm leading-relaxed">
          VAERDIA ProjectFlow combine la puissance de{" "}
          <span style={{ color: "#00d4a0" }}>Jira</span>,{" "}
          <span style={{ color: "#00d4a0" }}>Notion</span> et{" "}
          <span style={{ color: "#00d4a0" }}>Trello</span>{" "}
          dans une seule plateforme intuitive.
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-4 mt-10 max-w-lg">
          {[
            { icon: "⊞", title: "Tableaux Kanban", desc: "Visualisez vos tâches avec drag & drop" },
            { icon: "👥", title: "Collaboration", desc: "Travaillez en équipe efficacement" },
            { icon: "💬", title: "Messagerie", desc: "Communiquez en temps réel" },
            { icon: "📊", title: "Analytics", desc: "Suivez votre progression" },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.05)" }}>
              <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0" style={{ background: "rgba(0,212,160,0.15)" }}>
                {f.icon}
              </div>
              <div>
                <p className="font-semibold text-sm">{f.title}</p>
                <p className="text-blue-300 text-xs">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE — Card */}
      <div className="flex items-center justify-center px-10">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-96">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Commencez maintenant</h2>
          <p className="text-gray-500 text-sm mb-6">Connectez-vous ou créez votre compte</p>

          {/* Toggle */}
          <div className="flex rounded-xl overflow-hidden border border-gray-200 mb-6">
            <button
              onClick={() => setTab("login")}
              className="flex-1 py-2 text-sm font-medium transition-all"
              style={tab === "login" ? { background: "#0d2d5e", color: "white" } : { background: "white", color: "#666" }}
            >
              Connexion
            </button>
            <button
              onClick={() => setTab("register")}
              className="flex-1 py-2 text-sm font-medium transition-all"
              style={tab === "register" ? { background: "#0d2d5e", color: "white" } : { background: "white", color: "#666" }}
            >
              Inscription
            </button>
          </div>

          {/* Fields */}
          <div className="flex flex-col gap-4">
            {tab === "register" && (
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">Nom</label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
                />
              </div>
            )}
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Email</label>
              <input
                type="email"
                placeholder="nom@exemple.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 block mb-1">Mot de passe</label>
              <input
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
              />
            </div>

            {error && <p className="text-red-500 text-xs">{error}</p>}

            <button
              onClick={handleSubmit}
              className="w-full py-2.5 rounded-lg text-white font-semibold text-sm mt-1 transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(90deg, #0d2d5e, #0a4a6e)" }}
            >
              {tab === "login" ? "Se connecter" : "Créer mon compte"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}