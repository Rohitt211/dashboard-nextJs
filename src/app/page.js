import Footer from "@/components/Footer";
import styles from "./page.module.css";
import RightSidebar from "@/components/RightSidebar";
import MiddleHeader from "@/components/MiddleSection/Header";
import LeftSideBar from "@/components/LeftSideBar";
import ItemList from "@/components/MiddleSection/Middle";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.leftSection}>
        <LeftSideBar />
      </div>
      <div className={styles.middleSection}>
        <div className={styles.middleHeading}>
          <h2 className={styles.middleHeadingName}>Hello, Jhon .D</h2>
          <p className={styles.middleHeadingPara}>
            View and control you finances here.
          </p>
        </div>
        <MiddleHeader />
        <ItemList />
        <Footer />
      </div>
      <RightSidebar />
    </div>
  );
}
