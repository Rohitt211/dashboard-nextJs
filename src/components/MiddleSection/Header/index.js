"use client";
import styles from "./styles.module.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import HeaderSecond from "./HeaderSecond";
import { coinImage, downIcon, line2, upArrowIcon } from "@/assets";
import Image from "next/image";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const data = {
  labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Monthly Sales",
      data: [19, 15, 5, 3, 2, 3, 1],
      backgroundColor: "rgba(75,192,192,0.6)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
    },
  ],
};

function MiddleHeader() {
  return (
    <>
      <div className={styles.containerFlex}>
        <div className={styles.container}>
          <div className={styles.leftBox}>
            <p className={styles.text}>Balance Statistics</p>
            <h3 className={styles.textone}>$564</h3>
            <div className={styles.coinbox}>
              <Image src={coinImage} className={styles.coinImage} alt="coin" />
              <p style={{ fontSize: 13 }}>
                Your total <br /> balance
              </p>
            </div>
          
            <div style={{ display: "flex", alignItems: 'center', }}>
              <Image src={line2} height={50} width={50} alt="image" />
              <Image
                src={upArrowIcon}
                height={20}
                width={20}
                alt="img"
                className={styles.coinText}
              />
              <p style={{ marginLeft: "10px" }}>6%</p>
            </div>
            <p
              style={{ color: "grey", fontSize: 13, marginTop: 15 }}
              className={styles.endText}
            >
              Always see your <br /> earning updates
            </p>
          </div>
          <div className={styles.rightBox}>
            <div className={styles.chart}>
              <p className={styles.filterText}>Filter</p>
              <Image
                src={downIcon}
                height={15}
                width={15}
                className={styles.downImage}
                alt="image"
              />
            </div>
            <Bar options={options} data={data} width="100px" height="60px" />
          </div>
        </div>
        <div style={{ marginLeft: 10, flexGrow: 1 }}>
          <HeaderSecond />
        </div>
      </div>
    </>
  );
}
export default MiddleHeader;