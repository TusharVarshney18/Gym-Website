import Header from "../../components/header/header";
import Gallary from "../../components/gallary/gallary";
import Equipment from "../../components/equipment/equipment";
import ClassStudio from "../../components/classStudio/classStudio";
import SuccessStory from "../../components/successStory/successStory";
import Footer from "../../components/footer/footer";
import Coursel from "../../components/coursel/coursel";
import "./home.css"; // Import the CSS file containing the animated scroll styles

const Home = ({ isWideScreen }) => {
  return (
    <>
      <Header isWideScreen={isWideScreen} />
      <Gallary isWideScreen={isWideScreen} />
      <Equipment />
      <Coursel />
      <div className="animatedscroll"></div> {/* Add the animated scroll bar */}
      <ClassStudio isWideScreen={isWideScreen} />
      <SuccessStory />
      <Footer />
    </>
  );
};

export default Home;
