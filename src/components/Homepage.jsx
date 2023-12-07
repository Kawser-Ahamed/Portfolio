import Header from '../components/Header/Header';
import Expertise from '../components/body/Expertise';
import ProgrammingSkills from '../components/body/ProgrammingSkills';
import Message from '../components/body/Message';
import Footer from './body/footer';

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
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default Homepage;