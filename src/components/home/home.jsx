import Header from "../../pages/header/header";
import Gallary from "../../pages/gallary/gallary";
import Equipment from "../../pages/equipment/equipment";
import ClassStudio from "../../pages/classStudio/classStudio";
import SuccessStory from "../../pages/successStory/successStory";
import Footer from "../../pages/footer/footer";
import Coursel from "../../pages/coursel/coursel";

const Home = () => {
  return (
    <>
      <Header />
      <Gallary />
      <Equipment />
      <Coursel />
      <ClassStudio />
      <SuccessStory />
      <Footer />
    </>
  );
};

export default Home;
