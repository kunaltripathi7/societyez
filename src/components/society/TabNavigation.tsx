import { JSX } from "react";
import { TabNavigationProps } from "../../types/society";

function TabNavigation({
  activeTab,
  tabs,
  onTabChange,
}: TabNavigationProps): JSX.Element {
  return (
    <div className="border-b border-gray-200">
      <nav className="flex space-x-4" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex items-center px-3 py-2 text-sm font-medium border-b-2 cursor-pointer
              ${
                activeTab === tab.id
                  ? "border-ring text-primary"
                  : "border-transparent text-gray-500 hover:text-accent hover:border-accent"
              }
            `}
            aria-current={activeTab === tab.id ? "page" : undefined}
          >
            <span className="mr-2">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>
    </div>
  );
}

export default TabNavigation;
