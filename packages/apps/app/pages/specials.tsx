import { GetServerSideProps } from "next";
import { Specials, Navigation, fetchServerSideSpecials } from "../lib";
import { uniqueBy } from "@proficient/utils";

export const getServerSideProps: GetServerSideProps = async () => {
    const specials = await fetchServerSideSpecials();

    const projects = uniqueBy(
        specials.flatMap(s => s.projects),
        p => p.id
    );

    return {
        props: {
            fallback: {
                "/specials": specials.sort((a, b) => a.id > b.id ? 1 : -1),
                "/projects": projects.sort((a, b) => a.id > b.id ? 1 : -1)
            }
        }
    }
};

Specials.getLayout = page => (
    <Navigation 
        description="View HylecTric specials"
        keywords="specials"
        title="Specials"
    >
        {page}
    </Navigation>
);



export default Specials;