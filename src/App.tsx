import {
  ReactFlow,
  Background,
  BackgroundVariant,
  ControlButton,
  Controls,
  addEdge,
  type Edge,
  type Node,
  applyNodeChanges,
  applyEdgeChanges,
} from "@xyflow/react";
import { useCallback, useState } from "react";

import "@xyflow/react/dist/style.css";
import CustomNode from "./components/CustomNode";
import styled from "styled-components";

const MainBox = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const BtnSendRequest = styled.button`
  align-self: flex-end;
`;

const nodeTypes = {
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

  function addCustomNode() {
    posY += 100;
    posX += 80;
    setNodes((nodes) => {
      return [
        ...nodes,
        {
          id: String(Math.random()),
          position: { x: posX, y: posY },
          data: { label: "" },
          type: "editableNode",
        },
      ];
    });
  }

  function addDefaultNode() {
    posY += 100;
    posX += 80;

    setNodes((nodes) => {
      return [
        ...nodes,
        {
          id: String(Math.random()),
          position: { x: posX, y: posY },
          data: { label: "Initial text" },
          type: "default",
        },
      ];
    });
  }

  function addInputNode() {
    posY += 100;
    posX += 80;

    setNodes((nodes) => {
      return [
        ...nodes,
        {
          id: String(Math.random()),
          position: { x: posX, y: posY },
          data: { label: "Initial text" },
          type: "input",
        },
      ];
    });
  }

  return (
    <MainBox>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodeChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        style={{ backgroundColor: "#f8f0f0", display: "flex" }}
      >
        <Background color="#f1d2de" variant={BackgroundVariant.Cross} />
        <Controls showZoom={false}>
          <ControlButton onClick={addCustomNode}>1</ControlButton>
          <ControlButton onClick={addDefaultNode}>2</ControlButton>
          <ControlButton onClick={addInputNode}>3</ControlButton>
        </Controls>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            paddingBottom: 16,
            paddingRight: 16,
          }}
        >
          <BtnSendRequest>Отправить запрос</BtnSendRequest>
        </div>
      </ReactFlow>
    </MainBox>
  );
}

export default App;
