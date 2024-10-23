import { useState } from "react";
import { Handle, Position } from "@xyflow/react";

export default function CustomNode() {
  const [isEdit, setIsEdit] = useState(false);
  const [inputText, setInputText] = useState("Initial text");

  return (
    <>
      <div>
        <Handle type="target" position={Position.Left} />
        {!isEdit ? (
          <label onClick={() => setIsEdit(true)}>{inputText}</label>
        ) : (
          <div>
            <input
              type="text"
              onChange={(e) => {
                setInputText(e.target.value);
              }}
            />
            <button onClick={() => setIsEdit(false)}>ok</button>
          </div>
        )}
      </div>
      <Handle type="source" position={Position.Right} />
    </>
  );
}
