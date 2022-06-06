import { FC } from "react";
import { faHome, faUsers, faStar } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "@proficient/components";
import { Link } from "./SideNav.styles";

import { Nav } from "./SideNav.styles";

export const SideNav: FC = () => (
    <Nav role="navigation">
        <Link href="/">
            <Icon icon={faHome} />&nbsp;Home
        </Link>
        <Link href="/customers">
            <Icon icon={faUsers} />&nbsp;Customers
        </Link>
        <Link href="/specials">
            <Icon icon={faStar} />&nbsp;Specials
        </Link>
    </Nav>
);

export default SideNav;