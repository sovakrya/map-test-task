import { Edge, getConnectedEdges, Node } from "@xyflow/react";

export async function sendConnectedEdges(nodes: Node[], edges: Edge[]) {
  const connectedEdges = getConnectedEdges(nodes, edges);
  const resp = await fetch("/fdgdfgdfgsdfsdf", {
    method: "POST",
    body: JSON.stringify({
      connectedEdges,
    }),
  });

  return resp.json();
}
