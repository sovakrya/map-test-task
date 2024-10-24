import { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import styled from "styled-components";

const NodeBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  height: 150px;
  width: 300px;
  align-items: center;
  background-color: #f1e2e2;
  border: solid 1px #9e8888;
  border-radius: 5px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export default function CustomNode() {
  const [inputText1, setInputText1] = useState("Initial text_1");
  const [inputText2, setInputText2] = useState("Initial text_2");
  return (
    <NodeBox>
      <Handle
        type="target"
        position={Position.Left}
        style={{ width: 12, height: 12, backgroundColor: "#6d5b5b" }}
      />
      <ContentBox>
        <label contentEditable suppressContentEditableWarning>
          {inputText1}
        </label>
        <input onChange={(e) => setInputText1(e.target.value)} />
      </ContentBox>

      <ContentBox>
        <label contentEditable suppressContentEditableWarning>
          {inputText2}
        </label>
        <input onChange={(e) => setInputText2(e.target.value)} />
      </ContentBox>

      <Handle
        type="source"
        position={Position.Bottom}
        style={{ width: 12, height: 12, backgroundColor: "#6d5b5b" }}
      />
    </NodeBox>
  );
}
