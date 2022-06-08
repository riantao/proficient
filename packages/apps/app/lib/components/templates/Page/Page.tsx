import { FC, PropsWithChildren } from "react";
import Head from "next/head";

import { PageProps } from "./Page.d";

export const Page: FC<PropsWithChildren<PageProps>> = ({
    children,
    description,
    keywords,
    title,
    canonical
}) => (
    <>
        <Head>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <title>{title}</title>
        </Head>
        {children}
    </>
);