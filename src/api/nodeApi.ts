import { Edge, getConnectedEdges, Node } from "@xyflow/react";

export async function sendConnectedEdges(nodes: Node[], edges: Edge[]) {
  const connectedEdges = getConnectedEdges(nodes, edges);
  const nodesRes: Node[] = [];

  for (let i = 0; i < connectedEdges.length; i++) {
    for (let j = 0; j < nodes.length; j++) {
      if (
        connectedEdges[i].target === nodes[j].id ||
        connectedEdges[i].source === nodes[j].id
      ) {
        if (!nodesRes.includes(nodes[j])) {
          nodesRes.push(nodes[j]);
        }
      }
    }
  }

  const resp = await fetch("/dfdfsfsffdf", {
    method: "POST",
    body: JSON.stringify({
      nodes: nodesRes,
      edges: edges,
    }),
  });

  return resp.json();
}
