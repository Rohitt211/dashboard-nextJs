"use client";
import "./styles.scss";
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
      <div className="middleheader">
        <div className="middleheader-middle">
          <div className="middleheader-leftBox">
            <p>Balance Statistics</p>
            <h3 className="middleheader-textone">$564</h3>
            <div className="middleheader-coinbox">
              <Image
                src={coinImage}
                className="middleheader-coinImage"
                alt="coin"
              />
              <p style={{ fontSize: 13 }}>
                Your total <br /> balance
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <Image src={line2} height={50} width={50} alt="image" />
              <Image
                src={upArrowIcon}
                height={20}
                width={20}
                alt="img"
                className="middleheader-coinText"
              />
              <p style={{ marginLeft: "10px" }}>6%</p>
            </div>
            <p
              style={{ color: "grey", fontSize: 13, marginTop: 15 }}
              className="middleheader-endText"
            >
              Always see your <br /> earning updates
            </p>
          </div>
          <div className="middleheader-rightBox">
            <div className="middleheader-chart">
              <p className="middleheader-filterText">Filter</p>
              <Image
                src={downIcon}
                height={15}
                width={15}
                className="middleheader-downImage"
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
