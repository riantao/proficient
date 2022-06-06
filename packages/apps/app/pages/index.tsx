import { Home } from "@proficient/features/home";
import { Navigation } from "@proficient/features/navigation";

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
