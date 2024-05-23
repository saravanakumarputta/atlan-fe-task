import { FileTextIcon, PlayIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import React from "react";

type EditorToolBarProps = {
  onSave: () => void;
  onRun: () => void;
  isButtonsDisabled: boolean;
};

export const EditorToolBar: React.FC<EditorToolBarProps> = ({
  onRun,
  onSave,
  isButtonsDisabled,
}) => {
  return (
    <div className="flex justify-end space-x-2 my-1">
      <Button
        variant="default"
        size={"sm"}
        onClick={onSave}
        disabled={isButtonsDisabled}
      >
        <FileTextIcon className="mr-1" />
        Save
      </Button>
      <Button
        variant="default"
        size={"sm"}
        onClick={onRun}
        disabled={isButtonsDisabled}
      >
        <PlayIcon className="mr-1" />
        Run
      </Button>
    </div>
  );
};
