import { FC } from "react";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";

import { GlobalStyles } from "@proficient/styles";
import { NextPageWithLayout } from "@proficient/types";

const useLayout = ({ getLayout = (page => page) }: NextPageWithLayout) => ({ getLayout });

const App: FC<AppProps> = ({ Component, pageProps }) => {  
  const { getLayout } = useLayout(Component);

  return (
    <SWRConfig value={{ 
      fallback: pageProps.fallback ?? undefined,
      refreshWhenHidden: false,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateOnMount: false
     }}>
      <RecoilRoot>
        <GlobalStyles />
        {getLayout(<Component {...pageProps} />)}
      </RecoilRoot>
    </SWRConfig>

  );
}

export default App;
