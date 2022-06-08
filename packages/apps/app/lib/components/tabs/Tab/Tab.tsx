import { FC } from "react";

import { TabItem } from "./Tab.styles";
import type { TabProps } from "./Tab.d";

export const Tab: FC<TabProps> = ({
    label,
    onClick,
    activeTab
}) => {
  const handleClick = () => onClick?.(label);

  return (
    <TabItem onClick={handleClick} $isActive={label === activeTab} role="tab">
      {label}
    </TabItem>
  );
};

export default Tab;