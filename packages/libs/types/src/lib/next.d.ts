import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout<P = Record<string, never>> = NextPage<P> & {
	getLayout?: (page: ReactElement) => ReactNode;
}

export interface AppPropsWithLayout<P = Record<string, never>> extends AppProps<P> {
	readonly Component: NextPageWithLayout<P>;
}