import { Home, Navigation} from "../lib";

Home.getLayout = page => (
    <Navigation
        description="Husky Proficient"
        title="Husky Proficient | Home"
        keywords="husky, proficient, hylectric"
        canonical="" 
    >
        {page}    
    </Navigation>
);


export default Home;
