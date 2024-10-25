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

export default function Process() {
  return (
    <NodeBox>
      <ContentBox>
        <label contentEditable="true" style={{height: 40, width: 160}}>labelText1</label>
        <input />
      </ContentBox>

      <ContentBox>
        <label contentEditable="true" style={{height: 40, width: 160}}>labelText2</label>
        <input />
      </ContentBox>

      <Handle
        type="target"
        position={Position.Bottom}
        style={{ width: 12, height: 12, backgroundColor: "#6d5b5b" }}
      />
    </NodeBox>
  );
}
