import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

export default function Home() {
  const [tab, setTab] = useState("login");

  return (
    <div className="vaerdia-root min-h-screen flex bg-[#060f1e] overflow-hidden relative font-sans">
      {/* Background Orbs */}
      <div className="grid-bg absolute inset-0 bg-[radial-gradient(circle,#ffffff08_1px,transparent_1px)] bg-[length:36px_36px] pointer-events-none" />
      <div className="orb orb-1 absolute w-[500px] h-[500px] top-[-120px] left-[-100px] rounded-full bg-[radial-gradient(circle,#0a3d7a55_0%,transparent_70%)] blur-[80px] animate-drift" />
      <div className="orb orb-2 absolute w-[400px] h-[400px] bottom-[-80px] left-[30%] rounded-full bg-[radial-gradient(circle,#00d4a030_0%,transparent_70%)] blur-[80px] animate-drift delay-[-4s]" />
      <div className="orb orb-3 absolute w-[300px] h-[300px] top-[40%] right-[380px] rounded-full bg-[radial-gradient(circle,#1a5fb440_0%,transparent_70%)] blur-[80px] animate-drift delay-[-8s]" />

      {/* LEFT SIDE */}
      <div className="left flex-1 flex flex-col justify-center px-16 relative z-10 text-white">
        <div className="logo-row flex items-center gap-3 mb-16">
          <div className="logo-mark w-10 h-10 bg-gradient-to-br from-[#00d4a0] to-[#0a8a6a] rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_24px_#00d4a040]">V</div>
          <div className="logo-text text-lg font-bold">
            VAERDIA <span className="text-[#00d4a0]">ProjectFlow</span>
          </div>
        </div>

        <h1 className="headline text-5xl font-extrabold mb-6">
          Manage your projects.<br />
          <span className="text-[#00d4a0]">Unleash</span> your<br />
          <span className="text-[#4a7fc1]">team.</span>
        </h1>

        <p className="slogan text-[#7ba8d4] mb-10 italic border-l-2 border-[#00d4a040] pl-4 max-w-[420px]">
          “From idea to deliverable — <strong className="text-[#00d4a0] font-medium">without friction</strong>.<br />
          Scrum, Kanban, integrated AI. Everything your team<br />needs, in one place.”
        </p>

        <div className="features flex flex-wrap gap-2 mb-12">
          {["Kanban Boards", "Scrum Sprints", "Aura AI", "Live Reporting", "Client Portal", "HR Management", "Documents", "Integrated Chat"].map(f => (
            <div key={f} className="pill flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#a8c5e8] text-xs cursor-default hover:bg-[#00d4a012] hover:border-[#00d4a030] hover:text-[#00d4a0]">
              <div className="pill-dot w-1.5 h-1.5 rounded-full bg-[#00d4a0]"></div>
              {f}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="right w-[440px] flex-shrink-0 flex items-center justify-center px-10 py-10 relative z-10">
        {tab === "login" ? <Login switchTab={() => setTab("register")} /> : <Register switchTab={() => setTab("login")} />}
      </div>
    </div>
  );
}