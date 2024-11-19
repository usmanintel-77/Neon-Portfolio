import MainContent from "../components/About/MainContent";
import Sidebar from "../components/About/Sidebar";
const About = () => {
  return (
    <div className="flex min-h-screen md:mt-[67px]  px-3  ">
      <Sidebar />
      <main className="flex-grow lg:pl-40 md:ml-10 pt-10 lg:pr-20">
        <MainContent />
      </main>
    </div>
  );
};

export default About;
