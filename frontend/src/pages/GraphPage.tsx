import { GraphCanvas } from '../components/graph/GraphCanvas';
import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useGraphStore } from '../store/graphStore';
import { fetchNeighborsFromEmbedding, fetchNeighborsFromNode, type NeighborRow } from '../lib/graphApi';

type NeighborPanelTab = 'from-node' | 'embedding';

function parseEmbeddingJson(raw: string): number[] {
  const arr = JSON.parse(raw.trim()) as unknown;
  if (!Array.isArray(arr)) throw new Error('Expected a JSON array');
  if (arr.length !== 1024) throw new Error(`Expected 1024 numbers, got ${arr.length}`);
  return arr.map((v, i) => {
    const n = Number(v);
    if (!Number.isFinite(n)) throw new Error(`Invalid number at index ${i}`);
    return n;
  });
}

export function GraphPage() {
  const [helpOpen, setHelpOpen] = useState(true);
  const [params] = useSearchParams();
  const [panelTab, setPanelTab] = useState<NeighborPanelTab>('from-node');
  const [fromNodeNeighbors, setFromNodeNeighbors] = useState<NeighborRow[]>([]);
  const [embeddingNeighbors, setEmbeddingNeighbors] = useState<NeighborRow[]>([]);
  const [nodeQueryLoading, setNodeQueryLoading] = useState(false);
  const [embeddingQueryLoading, setEmbeddingQueryLoading] = useState(false);
  const [fromNodeError, setFromNodeError] = useState<string | null>(null);
  const [embeddingError, setEmbeddingError] = useState<string | null>(null);
  const [lastQueriedNodeId, setLastQueriedNodeId] = useState<string | null>(null);
  const [embeddingJson, setEmbeddingJson] = useState('');
  const [embeddingMatchCount, setEmbeddingMatchCount] = useState(8);
  const [embeddingMaxDistance, setEmbeddingMaxDistance] = useState(2);
  const { saveState, saveError, startAutoSave, stopAutoSave, loadGraph, graphId, selectedNodeId, nodes } =
    useGraphStore();

  useEffect(() => {
    document.getElementById('root')?.classList.add('app-workspace');
    startAutoSave();
    return () => {
      stopAutoSave();
      document.getElementById('root')?.classList.remove('app-workspace');
    };
  }, []);

  useEffect(() => {
    const fromQuery = params.get('graph')?.trim();
    const fromEnv = (import.meta.env.VITE_GRAPH_ID as string | undefined)?.trim();
    const id = fromQuery || fromEnv;
    if (!id) return;
    void loadGraph(id).catch(() => {
      /* keep demo graph if API/auth missing */
    });
  }, [params, loadGraph]);

  useEffect(() => {
    if (!selectedNodeId) {
      setFromNodeNeighbors([]);
      setFromNodeError(null);
      setLastQueriedNodeId(null);
    }
  }, [selectedNodeId]);

  const selectedNode = selectedNodeId ? nodes.find((n) => n.id === selectedNodeId) : null;
  const nodeLabelById = new Map(nodes.map((n) => [n.id, n.label]));

  async function handleFindNeighborsFromNode() {
    if (!selectedNodeId) return;
    setNodeQueryLoading(true);
    setFromNodeError(null);
    try {
      const out = await fetchNeighborsFromNode(graphId, selectedNodeId, 8);
      setFromNodeNeighbors(out.neighbors);
      setLastQueriedNodeId(selectedNodeId);
    } catch (e) {
      setFromNodeError((e as Error).message || 'Failed to query neighbors');
      setFromNodeNeighbors([]);
      setLastQueriedNodeId(null);
    } finally {
      setNodeQueryLoading(false);
    }
  }

  async function handleEmbeddingQuery() {
    setEmbeddingQueryLoading(true);
    setEmbeddingError(null);
    try {
      const embedding = parseEmbeddingJson(embeddingJson);
      const out = await fetchNeighborsFromEmbedding(graphId, embedding, {
        matchCount: Math.max(1, Math.min(500, embeddingMatchCount)),
        maxDistance: Math.max(0, Math.min(2, embeddingMaxDistance)),
      });
      setEmbeddingNeighbors(out.neighbors);
    } catch (e) {
      setEmbeddingError((e as Error).message || 'Embedding query failed');
      setEmbeddingNeighbors([]);
    } finally {
      setEmbeddingQueryLoading(false);
    }
  }

  const loading = panelTab === 'from-node' ? nodeQueryLoading : embeddingQueryLoading;
  const neighbors = panelTab === 'from-node' ? fromNodeNeighbors : embeddingNeighbors;
  const err = panelTab === 'from-node' ? fromNodeError : embeddingError;

  return (
    <div className="relative z-[2] h-screen w-screen overflow-hidden bg-bg text-text">
      <video id="webcam-bg" className="webcam-bg" autoPlay playsInline muted />
      <div className="absolute left-4 top-4 z-30 rounded-xl border border-emerald-400/25 bg-black/45 px-4 py-3 backdrop-blur-md">
        <Link to="/" className="font-display text-[11px] tracking-[0.28em] uppercase text-emerald-300 no-underline hover:text-emerald-200">
          ← Site home
        </Link>
        <p className="mt-1 text-[11px] text-emerald-100/80">Workspace · camera-aware graph interaction</p>
      </div>
      <div className="absolute left-4 top-24 z-30 w-[320px] rounded-2xl border border-white/15 bg-black/55 p-3 backdrop-blur-lg">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-[11px] uppercase tracking-[0.2em] text-cyan-200">Command Help</div>
          <button
            onClick={() => setHelpOpen((v) => !v)}
            className="rounded border border-cyan-300/35 px-2 py-0.5 text-[10px] uppercase tracking-[0.14em] text-cyan-200 transition hover:bg-cyan-300/10"
          >
            {helpOpen ? 'Hide' : 'Show'}
          </button>
        </div>
        {helpOpen && (
          <div className="space-y-3 text-[11px] text-cyan-100/90">
            <div>
              <div className="mb-1 text-[10px] uppercase tracking-[0.15em] text-cyan-300">Keyboard</div>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                <div><span className="text-cyan-300">/</span> focus search</div>
                <div><span className="text-cyan-300">N</span> add thought</div>
                <div><span className="text-cyan-300">Space</span> voice input</div>
                <div><span className="text-cyan-300">P</span> toggle panels</div>
                <div><span className="text-cyan-300">H</span> heatmap</div>
                <div><span className="text-cyan-300">I</span> insight</div>
                <div><span className="text-cyan-300">C</span> contradictions</div>
                <div><span className="text-cyan-300">1/2/3</span> topology mode</div>
              </div>
            </div>
            <div>
              <div className="mb-1 text-[10px] uppercase tracking-[0.15em] text-emerald-300">Gestures</div>
              <div className="grid grid-cols-1 gap-y-1">
                <div><span className="text-emerald-300">Point</span> move cursor/hover node</div>
                <div><span className="text-emerald-300">Pinch</span> select node</div>
                <div><span className="text-emerald-300">Wrist move</span> orbit camera</div>
                <div><span className="text-emerald-300">Two hands</span> zoom in/out</div>
                <div><span className="text-emerald-300">Fist</span> toggle heatmap</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
        <span className="rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/90">
          Save: {saveState}
        </span>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-emerald-200">
          Production UI
        </span>
      </div>
      {saveError && (
        <div className="absolute right-4 top-14 z-30 rounded-md border border-rose-400/40 bg-black/70 px-3 py-2 text-[11px] text-rose-200">
          {saveError}
        </div>
      )}
      <div className="absolute bottom-6 right-4 z-30 w-[340px] rounded-2xl border border-violet-400/30 bg-black/60 p-3 text-[11px] text-violet-100 backdrop-blur-lg">
        <div className="mb-2 flex gap-1 rounded-lg border border-violet-300/25 bg-violet-300/5 p-0.5">
          <button
            type="button"
            onClick={() => setPanelTab('from-node')}
            className={`flex-1 rounded-md px-2 py-1 text-[10px] uppercase tracking-[0.14em] transition ${
              panelTab === 'from-node' ? 'bg-violet-500/35 text-violet-50' : 'text-violet-200/80 hover:bg-violet-400/15'
            }`}
          >
            From node
          </button>
          <button
            type="button"
            onClick={() => setPanelTab('embedding')}
            className={`flex-1 rounded-md px-2 py-1 text-[10px] uppercase tracking-[0.14em] transition ${
              panelTab === 'embedding' ? 'bg-violet-500/35 text-violet-50' : 'text-violet-200/80 hover:bg-violet-400/15'
            }`}
          >
            Embedding
          </button>
        </div>

        {panelTab === 'from-node' && (
          <>
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[10px] uppercase tracking-[0.18em] text-violet-300">Nearest (stored embedding)</div>
              <button
                type="button"
                onClick={() => void handleFindNeighborsFromNode()}
                disabled={!selectedNodeId || nodeQueryLoading}
                className="rounded border border-violet-300/45 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-violet-100 transition enabled:hover:bg-violet-300/10 disabled:cursor-not-allowed disabled:opacity-45"
              >
                {nodeQueryLoading ? 'Loading...' : 'Find'}
              </button>
            </div>
            <div className="mb-2 text-violet-100/85">
              Source: {selectedNode ? selectedNode.label : 'Select a node to query neighbors'}
            </div>
          </>
        )}

        {panelTab === 'embedding' && (
          <>
            <div className="mb-2 flex items-center justify-between gap-2">
              <div className="text-[10px] uppercase tracking-[0.18em] text-violet-300">Raw vector KNN</div>
              <button
                type="button"
                onClick={() => void handleEmbeddingQuery()}
                disabled={embeddingQueryLoading || !embeddingJson.trim()}
                className="shrink-0 rounded border border-violet-300/45 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-violet-100 transition enabled:hover:bg-violet-300/10 disabled:cursor-not-allowed disabled:opacity-45"
              >
                {embeddingQueryLoading ? 'Loading...' : 'Query'}
              </button>
            </div>
            <textarea
              value={embeddingJson}
              onChange={(e) => setEmbeddingJson(e.target.value)}
              placeholder="[0.01, -0.02, ..., ...]"
              rows={3}
              className="mb-2 w-full resize-y rounded border border-violet-300/30 bg-black/50 px-2 py-1 font-mono text-[10px] text-violet-100 placeholder:text-violet-400/40"
            />
            <div className="mb-2 flex gap-1">
              <label className="flex flex-1 flex-col text-[10px] text-violet-200/90">
                k
                <input
                  type="number"
                  min={1}
                  max={500}
                  value={embeddingMatchCount}
                  onChange={(e) => setEmbeddingMatchCount(Number(e.target.value))}
                  className="rounded border border-violet-300/30 bg-black/50 px-1 py-0.5 text-violet-100"
                />
              </label>
              <label className="flex flex-1 flex-col text-[10px] text-violet-200/90">
                max distance
                <input
                  type="number"
                  min={0}
                  max={2}
                  step={0.01}
                  value={embeddingMaxDistance}
                  onChange={(e) => setEmbeddingMaxDistance(Number(e.target.value))}
                  className="rounded border border-violet-300/30 bg-black/50 px-1 py-0.5 text-violet-100"
                />
              </label>
            </div>
          </>
        )}

        {err && (
          <div className="mb-2 rounded border border-rose-400/40 bg-rose-400/10 px-2 py-1 text-rose-200">{err}</div>
        )}
        {!err && neighbors.length === 0 && panelTab === 'from-node' && lastQueriedNodeId && !loading && (
          <div className="rounded border border-violet-300/25 bg-violet-300/5 px-2 py-1 text-violet-200/80">
            No neighbors returned for this node.
          </div>
        )}
        {!err && neighbors.length > 0 && (
          <div className="max-h-40 space-y-1 overflow-auto pr-1">
            {neighbors.map((n, idx) => {
              const nid = typeof n.node_id === 'string' ? n.node_id : '(unknown)';
              const label = nodeLabelById.get(nid) ?? nid;
              const dist = typeof n.distance === 'number' ? n.distance.toFixed(4) : '?';
              return (
                <div key={`${nid}-${idx}`} className="rounded border border-violet-300/20 bg-violet-300/5 px-2 py-1">
                  <div className="truncate text-violet-100">{label}</div>
                  <div className="text-[10px] uppercase tracking-[0.12em] text-violet-300/85">distance {dist}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <GraphCanvas />
    </div>
  );
}
