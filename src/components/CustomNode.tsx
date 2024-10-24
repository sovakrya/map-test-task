import { useState } from "react";
import { Handle, Position } from "@xyflow/react";
import styled from "styled-components";

const NodeBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 250px;
  background-color: #f1e2e2;
  border: solid 1px #9e8888;
  border-radius: 5px;
`;

const NodeInputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
`;

export default function CustomNode() {
  const [isEdit, setIsEdit] = useState(false);
  const [inputText, setInputText] = useState("Initial text");

  return (
    <NodeBox>
      <Handle
        type="target"
        position={Position.Left}
        style={{ width: 12, height: 12, backgroundColor: "#6d5b5b" }}
      />
      {!isEdit ? (
        <span onClick={() => setIsEdit(true)}>{inputText}</span>
      ) : (
        <NodeInputBox>
          <input
            type="text"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button onClick={() => setIsEdit(false)}>ok</button>
        </NodeInputBox>
      )}

      <Handle
        type="source"
        position={Position.Bottom}
        style={{ width: 12, height: 12, backgroundColor: "#6d5b5b" }}
      />
    </NodeBox>
  );
}
