import { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import styled from "styled-components";

const NodeBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  height: 180px;
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

export default function Subprocess() {
  const [inputText1, setInputText1] = useState("Initial text_1");
  const [inputText2, setInputText2] = useState("Initial text_2");
  const [inputText3, setInputText3] = useState("Initial text_3");
  return (
    <NodeBox>
     
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

      <ContentBox>
        <label contentEditable suppressContentEditableWarning>
          {inputText3}
        </label>
        <input onChange={(e) => setInputText3(e.target.value)} />
      </ContentBox>

      <Handle
        type="source"
        position={Position.Top}
        style={{ width: 12, height: 12, backgroundColor: "#6d5b5b" }}
      />
    </NodeBox>
  );
}
