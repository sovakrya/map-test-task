import {
  ReactFlow,
  Background,
  BackgroundVariant,
  ControlButton,
  Controls,
  addEdge,
  type Edge,
  applyNodeChanges,
  applyEdgeChanges,
} from "@xyflow/react";
import { useCallback, useState } from "react";

import "@xyflow/react/dist/style.css";
import CustomNodeWithHandles from "./components/CustomNodeWithHandles";
import CustomNode from "./components/CustomNode";

type Node = {
  id: string;
  position: { x: number; y: number };
  data: { label: string };
  type: string;
};

const nodeTypes = {
  editableNodeWithHandles: CustomNodeWithHandles,
  editableNode: CustomNode,
};
let posY = 0;
let posX = 0;
function App() {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const onNodeChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgs) => applyEdgeChanges(changes, edgs)),
    [setEdges]
  );

  const onConnect = useCallback(
    (connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  function addTwoNodes() {
    posY += 100;
    posX += 80;
    setNodes((nodes) => {
      return [
        ...nodes,
        {
          id: String(Math.random()),
          position: { x: posX, y: posY },
          data: { label: "" },
          type: "editableNodeWithHandles",
        },
        {
          id: String(Math.random()),
          position: { x: (posX += 80), y: (posY += 100) },
          data: { label: "" },
          type: "editableNodeWithHandles",
        },
      ];
    });
  }

  function addTtreeNodes() {}
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodeChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        style={{ backgroundColor: "#f8f0f0" }}
      >
        <Background color="#f1d2de" variant={BackgroundVariant.Cross} />
        <Controls showZoom={false}>
          <ControlButton onClick={addTwoNodes}>1</ControlButton>
          <ControlButton>2</ControlButton>
          <ControlButton>3</ControlButton>
        </Controls>
      </ReactFlow>
    </div>
  );
}

export default App;
