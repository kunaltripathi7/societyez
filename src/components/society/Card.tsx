import { CardProps } from "../../types/society";

function Card({ title, children }: CardProps): React.ReactNode {
  return (
    <div className="bg-white rounded-md shadow-sm border border-gray-100 p-6">
      <h2 className="text-lg font-medium mb-4">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

export default Card;
