type Props = {};
import Aside from "../../Components/Aside";
import MainComponent from "../../Components/MainComponent";
import "./styles.css";

export default function MainLayout({}: Props) {
  return (
    <main className="main-layout">
      <MainComponent />
      <Aside />
    </main>
  );
}
