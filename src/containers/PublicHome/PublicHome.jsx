import Header from '../../components/PublicHome/Header'
import Carousel from '../../components/PublicHome/Carousel'
import Info from '../../components/PublicHome/Info'
import PracticeAreas from '../../components/PublicHome/PracticeAreas'
import ChooseUs from '../../components/PublicHome/ChooseUs'
import FrequentQuestions from '../../components/PublicHome/FrequentQuestions'
import Testimonials from '../../components/PublicHome/Testimonials'
import ContactUs from '../../components/PublicHome/ContactUs'
import OurTeam from '../../components/PublicHome/OurTeam'

const PublicHome = () => {
    return (
      <div className="">
        <Header />
        <Carousel />
        <Info />
        <PracticeAreas />
        <ChooseUs />
        <FrequentQuestions />
        {/* <Testimonials /> */}
        <OurTeam />
        <ContactUs />
      </div>
    );
};

export default PublicHome;