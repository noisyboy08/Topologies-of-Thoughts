export interface Node {
  id: string;
  label: string;
  snippet: string;
  clusterIndex: number;
  centralSimilarity: number;
  connectionsCount: number;
}

export interface Edge {
  id: string;
  sourceNodeId: string;
  targetNodeId: string;
  weight: number;
}

