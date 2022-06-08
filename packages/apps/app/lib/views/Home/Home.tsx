import { NextPageWithLayout } from "@proficient/types";

export const Home: NextPageWithLayout = () => {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            {/* <a href="/customers">Customers</a>
            <a href="/specials">Specials</a> */}
        </div>
    );
};

export default Home;