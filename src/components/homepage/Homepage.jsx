import Header from "../Header/Header";
import Expertise from "../body/Expertise";
import Message from "../body/Message";
import ProgrammingSkills from "../body/ProgrammingSkills";

const Homepage = () => {
    return (
        <div>
            <Header></Header>
            <section id="skill">
                <Expertise></Expertise>
            </section>
            <section>
                <ProgrammingSkills></ProgrammingSkills>
            </section>
            <section>
                <Message></Message>
            </section>
        </div>
    );
};

export default Homepage;