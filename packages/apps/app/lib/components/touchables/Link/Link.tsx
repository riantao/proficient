import { FC, PropsWithChildren } from "react";
import NextLink from "next/link";

import { A } from "./Link.styles";

import { LinkProps } from "./Link.d";
import { setTarget } from "./setTarget";

export const Link: FC<PropsWithChildren<LinkProps>> = ({
    children,
    href,
    target = setTarget(href),
    ...props
}) => (
    <NextLink href={href} passHref>
        <A {...props} role="link" target={target}>
            {children}
        </A>
    </NextLink>
);