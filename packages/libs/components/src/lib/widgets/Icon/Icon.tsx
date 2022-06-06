import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IconProps } from "./Icon.d";

export const Icon: FC<IconProps> = ({ icon }) => 
    <FontAwesomeIcon icon={icon} />