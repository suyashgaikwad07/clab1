import React, { useState, useMemo } from "react";
import { Search, Copy, Check, Terminal, Code2, Menu, X } from "lucide-react";
import { programs, categories } from "@/data/programs";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";

const Index = () => {
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(programs[0].id);
  const [copied, setCopied] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const filtered = useMemo(() => {
    if (!search.trim()) return programs;
    const q = search.toLowerCase();
    return programs.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [search]);

  const selected = programs.find((p) => p.id === selectedId) || filtered[0];

  const groupedFiltered = useMemo(() => {
    const groups: Record<string, typeof programs> = {};
    for (const p of filtered) {
      if (!groups[p.category]) groups[p.category] = [];
      groups[p.category].push(p);
    }
    return groups;
  }, [filtered]);

  const handleCopy = async () => {
    if (!selected) return;
    await navigator.clipboard.writeText(selected.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectProgram = (id: string) => {
    setSelectedId(id);
    setSidebarOpen(false);
  };

  const sidebarContent = (
    <>
      {/* Header */}
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground tracking-tight">SnippetLab</h1>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search programs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-accent border border-border rounded-md pl-9 pr-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary font-sans"
          />
        </div>
      </div>

      {/* Program List */}
      <div className="flex-1 overflow-y-auto px-2 pb-4">
        {Object.entries(groupedFiltered).map(([cat, progs]) => (
          <div key={cat} className="mb-3">
            <p className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {cat}
            </p>
            {progs.map((p) => (
              <button
                key={p.id}
                onClick={() => handleSelectProgram(p.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  selected?.id === p.id
                    ? "bg-primary/10 text-primary border-l-2 border-primary"
                    : "text-foreground/80 hover:bg-accent border-l-2 border-transparent"
                }`}
              >
                <span className="block font-medium truncate">{p.title}</span>
                <span className="block text-xs text-muted-foreground truncate mt-0.5">
                  {p.description}
                </span>
              </button>
            ))}
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground text-sm mt-8">
            No programs found
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-border">
        <p className="text-xs text-muted-foreground">
          {programs.length} programs • F.Y.B.Sc.Comp.Sci.
        </p>
      </div>
    </>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Mobile overlay sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[300px] flex flex-col border-r border-border bg-card transition-transform duration-300 md:relative md:translate-x-0 md:w-[320px] md:min-w-[320px] ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {selected ? (
          <>
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4 border-b border-border bg-card/50 gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="md:hidden shrink-0 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent"
                >
                  <Menu className="h-5 w-5" />
                </button>
                <div className="min-w-0">
                  <h2 className="text-base md:text-lg font-semibold text-foreground truncate">{selected.title}</h2>
                  <p className="text-xs md:text-sm text-muted-foreground truncate">{selected.description}</p>
                </div>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 md:px-4 py-2 rounded-md bg-primary text-primary-foreground text-xs md:text-sm font-medium hover:bg-primary/90 transition-colors shrink-0"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span className="hidden sm:inline">{copied ? "Copied!" : "Copy Code"}</span>
              </button>
            </div>

            {/* Code Area */}
            <div className="flex-1 overflow-y-auto p-3 md:p-6">
              <div className="bg-card rounded-lg border border-border p-3 md:p-5 overflow-x-auto">
                <SyntaxHighlighter code={selected.code} />
              </div>

              {/* Output */}
              {selected.output && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Terminal className="h-4 w-4 text-syntax-green" />
                    <span className="text-sm font-medium text-foreground">Output</span>
                  </div>
                  <pre className="bg-card rounded-lg border border-border p-3 md:p-5 text-xs md:text-sm font-mono text-syntax-green whitespace-pre-wrap">
                    {selected.output}
                  </pre>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-muted-foreground">Select a program to view its code</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
