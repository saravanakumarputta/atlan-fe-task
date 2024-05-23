import { FileTextIcon, PlayIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import React, { ChangeEvent, useCallback, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";

type EditorToolBarProps = {
  onSave: (name: string) => void;
  onRun: () => void;
  isButtonsDisabled: boolean;
};

export const EditorToolBar: React.FC<EditorToolBarProps> = ({
  onRun,
  onSave,
  isButtonsDisabled,
}) => {
  const [name, setName] = useState("");
  const handleNameChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setName(event.target.value);
    },
    []
  );

  const handleSave = () => {
    onSave(name);
  };

  return (
    <div className="flex justify-end space-x-2 my-1">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default" size={"sm"} disabled={isButtonsDisabled}>
            <FileTextIcon className="mr-1" />
            Save
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Input id="name" onChange={handleNameChange} value={name} />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="default" onClick={handleSave}>
                Save Query
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

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
