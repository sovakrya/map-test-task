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
  type: string
};

const nodeTypes = {editableNode: CustomNode}

function App() {
  const [nodes, setNodes, onNodeChange] = useNodesState<Node>([]);
  let pos = 0;
  function addTwoNodes() {
    
  }
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes}>
        <Background color="#f1d2de" variant={BackgroundVariant.Cross} />
        <Controls showZoom={false}>
          <ControlButton>1</ControlButton>
          <ControlButton>2</ControlButton>
          <ControlButton>3</ControlButton>
        </Controls>
      </ReactFlow>
    </div>
  );
}

export default App;
