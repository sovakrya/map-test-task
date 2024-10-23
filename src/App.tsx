import {
  ReactFlow,
  Background,
  BackgroundVariant,
  ControlButton,
  Controls,
  addEdge,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import { useCallback } from "react";

import "@xyflow/react/dist/style.css";
import CustomNode from "./components/CustomNode";

type Node = {
  id: string;
  position: { x: number; y: number };
  data: { label: string };
  type: string;
};

const nodeTypes = { editableNode: CustomNode };
let pos = 0;
function App() {
  const [nodes, setNodes, onNodeChange] = useNodesState<Node>([]);

  function addTwoNodes() {
    pos += 100;
    setNodes((nodes) => {
      return [
        ...nodes,
        {
          id: String(Math.random()),
          position: { x: 100, y: pos },
          data: { label: "" },
          type: "editableNode",
        },
        {
          id: String(Math.random()),
          position: { x: 100, y: (pos += 100) },
          data: { label: "" },
          type: "editableNode",
        },
      ];
    });
  }
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes} style={{}}>
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
