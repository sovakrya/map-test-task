import {
  Background,
  BackgroundVariant,
  Connection,
  ControlButton,
  Controls,
  Panel,
  Position,
  ReactFlow,
  addEdge,
  useEdgesState,
  useNodesState,
  type Edge,
  type Node,
} from "@xyflow/react";
import { useCallback} from "react";

import "@xyflow/react/dist/style.css";
import styled from "styled-components";
import Process from "./components/Process";

import { sendConnectedEdges } from "./api/nodeApi";
import Subprocess from "./components/Subprocess";

const MainBox = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
const BtnSendRequest = styled.button`
  align-self: flex-end;
`;

const nodeTypes = {
  process: Process,
  subprocess: Subprocess
};
let posY = 0;
let posX = 0;
function App() {
  const [nodes, setNodes, onNodeChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  function addProcess() {
    posY += 190;
    posX += 80;
    setNodes((nodes) => {
      return [
        ...nodes,
        {
          id: String(Math.random()),
          position: { x: posX, y: posY },
          data: { label: "" },
          type: "process",
          targetPosition: Position.Bottom,
        },
      ];
    });
  }

  function addSubprocess() {
    posY += 190;
    posX += 80;
    setNodes((nodes) => {
      return [
        ...nodes,
        {
          id: String(Math.random()),
          position: { x: posX, y: posY },
          data: { label: "" },
          type: "subprocess",
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
        <Controls showZoom={false}></Controls>

        <Panel position="top-right">
          <ControlButton onClick={addProcess}>1</ControlButton>
          <ControlButton onClick={addSubprocess}>2</ControlButton>
          <ControlButton onClick={addSubprocess}>3</ControlButton>
        </Panel>
        <Panel position="bottom-right">
          <BtnSendRequest onClick={() => sendConnectedEdges(nodes, edges)}>
            Отправить запрос
          </BtnSendRequest>
        </Panel>
      </ReactFlow>
    </MainBox>
  );
}

export default App;
