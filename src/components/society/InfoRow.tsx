import { InfoRowProps } from "../../types/society";

function InfoRow({ label, value }: InfoRowProps): React.ReactNode {
  return (
    <div className="flex justify-between">
      {label && <span className="text-gray-500">{label}</span>}
      <span className={`font-medium ${!label ? "w-full" : ""}`}>{value}</span>
    </div>
  );
}

export default InfoRow;
