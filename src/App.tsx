import {
  Background,
  BackgroundVariant,
  Connection,
  ControlButton,
  Controls,
  Panel,
  ReactFlow,
  addEdge,
  useEdgesState,
  useNodesState,
  type Edge,
  type Node,
} from "@xyflow/react";
import { useCallback, useState } from "react";

import "@xyflow/react/dist/style.css";
import styled from "styled-components";
import CustomNode from "./components/CustomNode";
import { sendConnectedEdges } from "./api/nodeApi";

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
  const [nodes, setNodes, onNodeChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [nodeName, setNodeName] = useState("Initial text");

  const onConnect = useCallback(
    (connection: Connection) => setEdges((eds) => addEdge(connection, eds)),
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
          data: { label: nodeName },
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
          data: { label: nodeName },
          type: "input",
        },
      ];
    });
  }

  function changeNodeName() {
    setNodes((nds) => {
      const newNodes = nds.map((node) => {
        if (node.selected) {
          return {
            ...node,
            data: {
              ...node.data,
              label: nodeName,
            },
          };
        }
        return node;
      });

      return newNodes;
    });

    setNodeName("");
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
        <Panel position="top-right">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
            }}
          >
            <span>label:</span>
            <input
              type="text"
              onChange={(e) => setNodeName(e.target.value)}
              value={nodeName}
            />
            <button onClick={changeNodeName}>ok</button>
          </div>
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
