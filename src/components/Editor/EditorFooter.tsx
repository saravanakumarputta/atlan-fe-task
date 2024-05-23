import { Badge } from "@/components/ui/badge";
import { DownloadIcon } from "@radix-ui/react-icons";

type EditorFooterProps = {
  onExport: () => void;
};

export const EditorFooter: React.FC<EditorFooterProps> = ({ onExport }) => {
  return (
    <div className="flex justify-end py-2">
      <Badge variant="outline" className="cursor-pointer" onClick={onExport}>
        <DownloadIcon className="mr-1" />
        Export
      </Badge>
    </div>
  );
};
