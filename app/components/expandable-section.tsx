"use client";

import { useMemo, useState } from "react";

interface ExpandableItem {
  id: string;
  label: React.ReactNode;
  children: React.ReactNode;
}

export function ExpandableList({ items }: { items: ExpandableItem[] }) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const expandedItemSet = useMemo(() => new Set(expandedItems), [expandedItems]);

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const isExpanded = expandedItemSet.has(item.id);

        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => toggleExpand(item.id)}
              className="text-left w-full text-[15px] leading-[1.8] hover:opacity-70 transition-opacity"
              style={{
                cursor: "pointer",
                background: "none",
                border: "none",
                padding: 0,
                font: "inherit",
                color: "inherit",
              }}
            >
              <span className={isExpanded ? "font-semibold underline" : ""}>
                {item.label}
              </span>
            </button>
            {isExpanded && (
              <div
                style={{ marginLeft: "40px", marginTop: "12px" }}
                className="text-[15px] leading-[1.8]"
              >
                {item.children}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
