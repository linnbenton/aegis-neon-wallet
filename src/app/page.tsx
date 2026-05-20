"use client";

import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import {
  Shield,
  Cpu,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Terminal,
  Layers,
  RefreshCw,
  Settings,
  Zap,
  Lock,
  Unlock,
  ShieldAlert,
  Activity,
  ArrowUpRight,
  HelpCircle,
  EyeOff,
} from "lucide-react";

const portfolioData = [
  { month: "Jan", AssetValue: 5000, AI_Predict: 5000 },
  { month: "Feb", AssetValue: 5800, AI_Predict: 5900 },
  { month: "Mar", AssetValue: 6200, AI_Predict: 6400 },
  { month: "Apr", AssetValue: 7100, AI_Predict: 7300 },
  { month: "Mai", AssetValue: 8500, AI_Predict: 8900 },
  { month: "Jun", AssetValue: null, AI_Predict: 10800 },
  { month: "Jul", AssetValue: null, AI_Predict: 12400 },
  { month: "Aug", AssetValue: null, AI_Predict: 14100 },
];

interface SecurityReport {
  riskScore: number;
  riskLevel: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  type: "STANDARD" | "POISONING" | "MALICIOUS";
  analysis: string;
  actionRequired: boolean;
  fheHash?: string;
}

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [aiReport, setAiReport] = useState<SecurityReport | null>(null);
  const [txStatus, setTxStatus] = useState<string>("IDLE");
  const [fheMode, setFheMode] = useState(false);
  const [selectedChain, setSelectedChain] = useState<"ETH" | "SOL" | "OP_NET">(
    "ETH",
  );
  const [gasSpeed, setGasSpeed] = useState<"STABLE" | "OVERDRIVE">("STABLE");
  const [activeTab, setActiveTab] = useState<
    "PORTFOLIO" | "INTELLIGENT_ROUTING"
  >("PORTFOLIO");

  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "[SYSTEM] Aegis Neon Ultimate Engine Initialized.",
    "[SYSTEM] FHE Modules Loaded. MPC Multi-Sig Vault State: Synced.",
  ]);

  useEffect(() => {
    const intervals = [
      "TokenCore::Compiling intent vectors...",
      "FHE_Shield::Randomizing noise parameters for multi-party computation...",
      "IndexAI::Optimizing path across OP_NET and Solana structures...",
    ];
    const interval = setInterval(() => {
      const randomLog = intervals[Math.floor(Math.random() * intervals.length)];
      setTerminalLogs((prev) => [...prev.slice(-5), `[NODE] ${randomLog}`]);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleAiCoCreation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return;

    setIsAnalyzing(true);
    setAiReport(null);
    setTerminalLogs((prev) => [
      ...prev,
      `[USER_INTENT] Parsing payload: "${prompt}"`,
      "[AI_AGENT] Generating static execution graph...",
    ]);

    setTimeout(() => {
      const lowerPrompt = prompt.toLowerCase();

      if (
        lowerPrompt.includes("0x") &&
        (lowerPrompt.includes("kirim") || lowerPrompt.includes("send"))
      ) {
        setAiReport({
          riskScore: 98,
          riskLevel: "CRITICAL",
          type: "POISONING",
          analysis:
            "CRITICAL WARNING: Destination address shares a 95% front/back character spoofing match with your secondary wallet, but internal structures mismatch. Active Address Poisoning vector detected. TokenCore halted automated signature generation.",
          actionRequired: true,
          fheHash: "0x8f3b...fa92 (Shielded via Homomorphic Noise)",
        });
        setTerminalLogs((prev) => [
          ...prev,
          "[SECURITY] CRITICAL: Address Poisoning pattern verified!",
          "[TOKEN_CORE] Core signature creation blocked.",
        ]);
      } else if (
        lowerPrompt.includes("staking") ||
        lowerPrompt.includes("amankan") ||
        lowerPrompt.includes("bridge")
      ) {
        setAiReport({
          riskScore: 12,
          riskLevel: "LOW",
          type: "STANDARD",
          analysis:
            "Intent safely validated. TokenCore successfully mapped an optimized cross-chain route with minimal slippage (<0.1%) and robust MEV insulation.",
          actionRequired: false,
          fheHash: "0x2a91...bc4f (Encrypted Payload State)",
        });
        setTerminalLogs((prev) => [
          ...prev,
          "[AI_AGENT] Route mapping optimized.",
          "[TOKEN_CORE] Signature parameters appended successfully.",
        ]);
      } else {
        setAiReport({
          riskScore: 75,
          riskLevel: "HIGH",
          type: "MALICIOUS",
          analysis:
            "WARNING: Destination smart contract is unverified within the imToken Safe Registry. Hidden parameters detected containing potential high-risk asset Approval Drainer functions.",
          actionRequired: true,
          fheHash: "0x11ce...44bb (Blocked State)",
        });
        setTerminalLogs((prev) => [
          ...prev,
          "[SECURITY] WARNING: Unverified dApp signature parameters.",
          "[TOKEN_CORE] Refused payload deployment.",
        ]);
      }
      setIsAnalyzing(false);
    }, 1200);
  };

  const executeTransaction = () => {
    setTxStatus("EXECUTING");
    setTerminalLogs((prev) => [
      ...prev,
      "[BROADCAST] Distributing MPC shards to block production layers...",
    ]);
    setTimeout(() => {
      setTxStatus("SUCCESS");
      setTerminalLogs((prev) => [
        ...prev,
        `[SUCCESS] Secure state finalized. Gas optimized via TokenCore nodes.`,
      ]);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-mono p-4 md:p-8 flex flex-col items-center selection:bg-fuchsia-500 selection:text-white">
      {/* Header Ultimate */}
      <header className="mb-8 text-center mt-4 w-full max-w-6xl flex flex-col md:flex-row justify-between items-center border-b border-gray-900 pb-6 gap-4">
        <div className="text-left">
          <h1 className="text-3xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-purple-600 drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]">
            AEGIS NEON // ULTIMATE CORE
          </h1>
          <p className="text-xs text-cyan-400 mt-1 uppercase tracking-widest flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 animate-spin" /> COMPETITION LEVEL
            PRODUCTION FRAMEWORK V3.0 // STABLE
          </p>
        </div>

        {/* FHE Controls & Shards Status */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="hidden sm:flex gap-1.5 items-center bg-amber-500/10 px-3 py-1.5 rounded-lg border border-gray-800 text-[10px] text-gray-400">
            <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />{" "}
            MPC Nodes: 3/3 Online
          </div>
          <button
            onClick={() => {
              setFheMode(!fheMode);
              setTerminalLogs((prev) => [
                ...prev,
                `[FHE] Shield state toggled to: ${!fheMode ? "ENCRYPTED" : "DECRYPTED"}`,
              ]);
            }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
              fheMode
                ? "bg-amber-500/10 border-yellow-500 text-yellow-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                : "bg-gray-900 border-gray-800 text-gray-400 hover:border-purple-500/50"
            }`}
          >
            {fheMode ? (
              <Lock className="w-4 h-4 text-white-400 animate-pulse" />
            ) : (
              <Unlock className="w-4 h-4" />
            )}
            FHE Shield: {fheMode ? "ENCRYPTED" : "PUBLIC"}
          </button>
        </div>
      </header>

      {/* Layout Grid Utama */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Kolom Kiri & Tengah: AI Workspace */}
        <div className="lg:col-span-2 space-y-6">
          {/* AI Intent Workspace & Matrix */}
          <div className="bg-gray-900/80 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-md shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Multi-Chain Anchor Selector */}
            <div className="flex flex-wrap justify-between items-center mb-6 border-b border-gray-800 pb-4 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500 uppercase font-bold flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5" /> Network Context:
                </span>
                <div className="flex gap-1.5">
                  {(["ETH", "SOL", "OP_NET"] as const).map((chain) => (
                    <button
                      key={chain}
                      onClick={() => {
                        setSelectedChain(chain);
                        setTerminalLogs((prev) => [
                          ...prev,
                          `[NODE] Synced local memory to cluster: ${chain}`,
                        ]);
                      }}
                      className={`text-[10px] font-bold px-2.5 py-1 rounded transition-all ${
                        selectedChain === chain
                          ? "bg-cyan-500 text-gray-950 font-black shadow-[0_0_10px_rgba(6,182,212,0.4)]"
                          : "bg-gray-950 text-gray-500 hover:text-gray-300 border border-gray-800"
                      }`}
                    >
                      {chain === "OP_NET" ? "OP_NET (BTC L1)" : chain}
                    </button>
                  ))}
                </div>
              </div>
              <div className="text-[11px] font-bold text-fuchsia-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-ping"></span>
                TOKEN_CORE_SDK::CONNECTED
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleAiCoCreation} className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  Enter Your Asset Management Prompt / Intent:
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., 'Secure staking position via bridge' or 'Send 0.5 ETH to 0xAbC123...'"
                  className="w-full bg-gray-950 border border-gray-800 focus:border-fuchsia-500 rounded-lg pl-4 pr-28 py-3 text-sm text-gray-200 outline-none transition-all duration-300 shadow-inner"
                />
                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="absolute right-2 top-2 bg-gradient-to-r from-cyan-500 to-fuchsia-600 hover:from-cyan-400 hover:to-fuchsia-500 text-white font-bold text-xs px-4 py-1.5 rounded transition-all duration-200 shadow-[0_0_10px_rgba(6,182,212,0.4)] uppercase"
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze"}
                </button>
              </div>
            </form>

            {/* MODUL BARU: UI Analisis Risiko Matriks Tingkat Tinggi */}
            {aiReport && (
              <div
                className={`mt-6 p-5 rounded-lg border transition-all duration-500 ${
                  aiReport.riskLevel === "CRITICAL" ||
                  aiReport.riskLevel === "HIGH"
                    ? "bg-red-950/40 border-red-500/60 shadow-[0_0_20px_rgba(239,68,68,0.2)]"
                    : "bg-emerald-950/30 border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                  {/* Skor Risiko */}
                  <div className="text-center md:border-r border-gray-800/80 pr-2">
                    <span className="text-[10px] text-gray-400 block uppercase font-bold tracking-widest">
                      Risk Score
                    </span>
                    <span
                      className={`text-3xl font-black ${aiReport.riskScore > 50 ? "text-red-500" : "text-emerald-400"}`}
                    >
                      {aiReport.riskScore}/100
                    </span>
                    <span
                      className={`text-[9px] block font-bold mt-0.5 px-1.5 py-0.5 rounded ${aiReport.riskScore > 50 ? "bg-red-500/20 text-red-400" : "bg-emerald-500/20 text-emerald-400"}`}
                    >
                      {aiReport.riskLevel}
                    </span>
                  </div>

                  {/* Analisis Deskriptif */}
                  <div className="md:col-span-3 space-y-2">
                    <div className="flex items-center gap-1.5 font-bold text-xs text-gray-300">
                      {aiReport.type === "POISONING" ? (
                        <ShieldAlert className="w-4 h-4 text-red-500" />
                      ) : (
                        <Shield className="w-4 h-4 text-emerald-400" />
                      )}
                      TokenCore Shield Matrix Report:
                    </div>
                    <p className="text-xs leading-relaxed text-gray-400">
                      {aiReport.analysis}
                    </p>

                    {/* Teks Terenkripsi FHE jika Shield ON */}
                    <div className="text-[10px] text-purple-400 bg-purple-950/30 px-2 py-1 rounded border border-purple-900/40 inline-block">
                      FHE Zero-Knowledge Hash:{" "}
                      {fheMode ? "🔒 [ENCRYPTED_IN_SHARDS]" : aiReport.fheHash}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-800/60 flex justify-end">
                  {aiReport.actionRequired ? (
                    <button
                      type="button"
                      disabled
                      className="bg-red-500/20 text-red-400 border border-red-500/40 text-xs px-4 py-2 rounded cursor-not-allowed uppercase font-bold tracking-widest"
                    >
                      Transaction Auto-Blocked
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={executeTransaction}
                      disabled={
                        txStatus === "SUCCESS" || txStatus === "EXECUTING"
                      }
                      className="bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-bold text-xs px-5 py-2 rounded transition-all uppercase tracking-wider flex items-center gap-2"
                    >
                      {txStatus === "IDLE" && (
                        <>Execute Secure Intent via TokenCore</>
                      )}
                      {txStatus === "EXECUTING" && (
                        <>Processing Multi-Sig Nodes...</>
                      )}
                      {txStatus === "SUCCESS" && (
                        <>
                          <CheckCircle2 className="w-4 h-4" /> Transaction
                          Finalized! ✓
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sub-Sistem Tabs: Mengubah Tampilan Chart atau Rute Cerdas */}
          <div className="bg-gray-900/80 border border-purple-500/30 rounded-xl p-6 backdrop-blur-md shadow-[0_0_30px_rgba(168,85,247,0.1)] relative">
            <div className="flex justify-between items-center mb-4 border-b border-gray-800/60 pb-3 flex-wrap gap-2">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab("PORTFOLIO")}
                  className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded transition-all ${activeTab === "PORTFOLIO" ? "bg-purple-900/50 text-purple-300 border border-purple-500/40" : "text-gray-500 hover:text-gray-300"}`}
                >
                  Predictive Wealth Engine
                </button>
                <button
                  onClick={() => setActiveTab("INTELLIGENT_ROUTING")}
                  className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded transition-all ${activeTab === "INTELLIGENT_ROUTING" ? "bg-purple-900/50 text-purple-300 border border-purple-500/40" : "text-gray-500 hover:text-gray-300"}`}
                >
                  AI Intelligent Bridge Route
                </button>
              </div>
              <span className="text-[11px] font-mono text-fuchsia-400 font-bold">
                $14,100 Est. Aug Value
              </span>
            </div>

            {/* Tab 1: Chart Portofolio Masa Depan */}
            {activeTab === "PORTFOLIO" && (
              <div className="relative">
                {fheMode && (
                  <div className="absolute inset-0 bg-gray-950/80 backdrop-blur-md rounded-xl z-10 flex flex-col items-center justify-center border border-purple-500/40 h-64">
                    <Lock className="w-8 h-8 text-purple-400 animate-pulse mb-2" />
                    <p className="text-xs font-bold text-purple-400 uppercase tracking-widest">
                      Data Obfuscated via FHE Shield
                    </p>
                    <p className="text-[10px] text-gray-500 mt-1">
                      Deactivate FHE Shield in the upper panel to view unmasked
                      real-time telemetry
                    </p>
                  </div>
                )}
                <div className="w-full h-64 bg-gray-950/60 border border-gray-800/80 rounded-lg p-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={portfolioData}
                      margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                    >
                      <defs>
                        <linearGradient
                          id="colorAsset"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#06b6d4"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="#06b6d4"
                            stopOpacity={0}
                          />
                        </linearGradient>
                        <linearGradient
                          id="colorPredict"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#d946ef"
                            stopOpacity={0.2}
                          />
                          <stop
                            offset="95%"
                            stopColor="#d946ef"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#1f2937"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="month"
                        stroke="#4b5563"
                        fontSize={11}
                        tickLine={false}
                      />
                      <YAxis stroke="#4b5563" fontSize={11} tickLine={false} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#030712",
                          borderColor: "#4b5563",
                          borderRadius: "8px",
                          fontFamily: "monospace",
                        }}
                      />
                      <Area
                        type="monotone"
                        dataKey="AssetValue"
                        stroke="#06b6d4"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorAsset)"
                        name="Actual Valuation"
                      />
                      <Area
                        type="monotone"
                        dataKey="AI_Predict"
                        stroke="#d946ef"
                        strokeWidth={2}
                        strokeDasharray="4 4"
                        fillOpacity={1}
                        fill="url(#colorPredict)"
                        name="AI Forecast"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Tab 2: MODUL BARU: Visualisasi Rute Pintar Lintas Rantai AI */}
            {activeTab === "INTELLIGENT_ROUTING" && (
              <div className="w-full h-64 bg-gray-950/80 border border-gray-800/80 rounded-lg p-4 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-widest block mb-3">
                    Rute Lintas Rantai Teroptimasi TokenCore:
                  </span>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4 my-4">
                    <div className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-lg text-center w-full md:w-1/3">
                      <span className="text-[9px] text-gray-500 block">
                        SOURCE
                      </span>
                      <span className="text-xs font-bold text-orange-400">
                        OP_NET (Bitcoin L1)
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-purple-400 animate-pulse">
                      <ArrowUpRight className="w-4 h-4 transform rotate-45" />
                      <span className="text-[8px] font-bold text-gray-600 bg-gray-900 px-1 py-0.5 rounded border border-gray-800">
                        TokenCore Agent
                      </span>
                    </div>
                    <div className="bg-gray-900 border border-gray-800 px-4 py-2 rounded-lg text-center w-full md:w-1/3">
                      <span className="text-[9px] text-gray-500 block">
                        BRIDGE LAYER
                      </span>
                      <span className="text-xs font-bold text-purple-400">
                        imToken Core Vault
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-cyan-400 animate-pulse">
                      <ArrowUpRight className="w-4 h-4 transform rotate-45" />
                      <span className="text-[8px] font-bold text-gray-600 bg-gray-900 px-1 py-0.5 rounded border border-gray-800">
                        IndexAI Solver
                      </span>
                    </div>
                    <div className="bg-gray-900 border border-cyan-500/40 px-4 py-2 rounded-lg text-center w-full md:w-1/3 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                      <span className="text-[9px] text-gray-500 block">
                        DESTINATION
                      </span>
                      <span className="text-xs font-bold text-cyan-400">
                        {selectedChain} Mainnet
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900/50 p-2.5 rounded border border-gray-800 text-[10px] text-gray-400 flex justify-between items-center">
                  <span>
                    Slippage Protection:{" "}
                    <strong className="text-emerald-400">0.05%</strong>
                  </span>
                  <span>
                    Estimated Arrival Time:{" "}
                    <strong className="text-cyan-400">~45 Detik</strong>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Kolom Kanan: Panel Kendali Parameter Komplet */}
        <div className="space-y-6 flex flex-col">
          {/* Status Vault & Node */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 backdrop-blur-md flex-1">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-800 pb-2 flex items-center justify-between">
              <span>Secure Nodes & Vault</span>
              <HelpCircle className="w-3.5 h-3.5 text-gray-600 cursor-help" />
            </h3>

            <div className="space-y-4">
              <div className="bg-gray-950 p-3 rounded-lg border border-gray-800/60">
                <span className="text-[10px] text-gray-500 block uppercase font-bold">
                  Total Net Worth Context
                </span>
                <span
                  className={`text-xl font-bold font-mono tracking-wide block transition-all duration-300 ${fheMode ? "text-purple-400 blur-[3px]" : "text-cyan-400"}`}
                >
                  {fheMode
                    ? "0x8E3C...7F9B"
                    : selectedChain === "SOL"
                      ? "125.40 SOL"
                      : selectedChain === "OP_NET"
                        ? "0.145 BTC"
                        : "$8,500.22"}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between p-2 bg-gray-950/40 rounded border border-gray-900 items-center">
                  <span className="text-gray-400">FHE Stealth State</span>
                  <span
                    className={
                      fheMode
                        ? "text-purple-400 font-bold animate-pulse text-[10px]"
                        : "text-cyan-400 font-bold text-[10px]"
                    }
                  >
                    {fheMode ? "SHIELDED_BYTE_STREAM" : "CLEAR_TEXT_PUBLIC"}
                  </span>
                </div>
                <div className="flex justify-between p-2 bg-gray-950/40 rounded border border-gray-900">
                  <span className="text-gray-400">MPC Threshold Scheme</span>
                  <span className="text-purple-400 font-bold font-mono">
                    2-OF-3 SHARDS
                  </span>
                </div>
                <div className="flex justify-between p-2 bg-gray-950/40 rounded border border-gray-900">
                  <span className="text-gray-400">Node Synchronization</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <RefreshCw className="w-3 h-3 animate-spin" /> 100% SECURE
                  </span>
                </div>
              </div>
            </div>

            {/* Panel Gas Overdrive Controller */}
            <div className="mt-6 pt-4 border-t border-gray-800">
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-2 flex items-center gap-1">
                <Settings className="w-3.5 h-3.5" /> Intent Execution Fee Plan:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setGasSpeed("STABLE");
                    setTerminalLogs((prev) => [
                      ...prev,
                      "[GAS] Strategy changed: Minimum Fee Optimization.",
                    ]);
                  }}
                  className={`flex items-center justify-center gap-1 text-[10px] font-bold py-2 rounded transition-all border ${
                    gasSpeed === "STABLE"
                      ? "bg-emerald-950/60 text-emerald-400 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                      : "bg-gray-950 text-gray-500 border-gray-900 hover:border-gray-800"
                  }`}
                >
                  <Shield className="w-3 h-3" /> Standard Fee
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setGasSpeed("OVERDRIVE");
                    setTerminalLogs((prev) => [
                      ...prev,
                      "[GAS] OVERDRIVE ACTIVE: Securing flashbots bundle parameters.",
                    ]);
                  }}
                  className={`flex items-center justify-center gap-1 text-[10px] font-bold py-2 rounded transition-all border ${
                    gasSpeed === "OVERDRIVE"
                      ? "bg-fuchsia-950/60 text-fuchsia-400 border-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.2)]"
                      : "bg-gray-950 text-gray-500 border-gray-900 hover:border-gray-800"
                  }`}
                >
                  <Zap className="w-3 h-3 text-fuchsia-400" /> MEV Bundle
                </button>
              </div>
            </div>
          </div>

          {/* Core Intent Stream Logs Container */}
          <div className="bg-gray-950 border border-gray-800 rounded-xl p-4 h-48 flex flex-col shadow-inner">
            <div className="flex items-center gap-1.5 border-b border-gray-900 pb-2 mb-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                TokenCore Live Intent Stream
              </span>
            </div>
            <div className="flex-1 overflow-y-auto text-[10px] space-y-1 scrollbar-thin scrollbar-thumb-gray-800">
              {terminalLogs.map((log, index) => (
                <div
                  key={index}
                  className={`leading-normal ${
                    log.includes("[CRITICAL]") || log.includes("[SECURITY]")
                      ? "text-red-400 font-bold"
                      : log.includes("[SUCCESS]")
                        ? "text-emerald-400"
                        : log.includes("[USER_INTENT]")
                          ? "text-cyan-400"
                          : log.includes("[FHE]")
                            ? "text-purple-400 font-semibold"
                            : "text-gray-500"
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-12 mb-4 text-center text-[10px] text-gray-600 tracking-widest uppercase">
        Repository Alias: linnbenton // Framework Integration Verified for
        imToken 10th Hackathon
      </footer>
    </div>
  );
}
