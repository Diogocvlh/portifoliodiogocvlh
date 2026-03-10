interface FileEntryProps {
  name: string;
  description: string;
  variant: "executable" | "config" | "sensitive";
}

const FileEntry = ({ name, description, variant }: FileEntryProps) => {
  const colorClass = variant === "executable"
    ? "text-primary"
    : variant === "sensitive"
    ? "text-secondary"
    : "text-secondary";

  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-2 border-b border-muted-foreground/10">
      <span className={`font-heading text-sm ${colorClass} shrink-0`}>{name}</span>
      <span className="text-muted-foreground text-xs">{description}</span>
    </div>
  );
};

export default FileEntry;
