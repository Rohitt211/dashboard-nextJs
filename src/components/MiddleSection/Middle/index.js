import { rightArrowIcon, threeDotsIcon } from "@/assets";
import styles from "./style.module.css";
import Image from "next/image";
import Chat from "./Chat";

function ItemList() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h5 className={styles.containerheading}>List of items to buy</h5>
        <div className={styles.timeBox}>
          <div>
            <h4>02:00</h4>
            <p className={styles.date}>Sat August 12</p>
          </div>
          <div className={styles.arrowImage}>
            <Image src={rightArrowIcon} width={13} height={13} alt="image"/>
          </div>
          <div className={styles.date2}>
            <h4>05:00</h4>
            <p className={styles.date}>Sat September 12</p>
          </div>
        </div>

        <div className={styles.listBox}>
          <div>
            <p className={styles.itemList}>
              0/3{" "}
              <span style={{ color: "black" }}>
                <strong>Shopping List</strong>
              </span>
            </p>
          </div>
          <div className={styles.addItemtext}> + Add an item</div>
        </div>

        <div>
          <div style={{ display: "flex", gap: "10px" }}>
            <div className={styles.itembox1}>
              <div className={styles.itemboxcheckbox}>
                <input type="checkbox" />
                <span className={styles.Item}>Macbook</span>
              </div>
              <Image src={threeDotsIcon} width={20} height={20} alt="image" />
            </div>
            <div className={styles.itembox1}>
              <div className={styles.itemboxcheckbox}>
                <input type="checkbox" />
                <span className={styles.Item}>Bicycle</span>
              </div>
              <Image src={threeDotsIcon} width={20} height={20} alt="image" />
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: 10 }}>
            <div className={styles.itembox1}>
              <div className={styles.itemboxcheckbox}>
                <input type="checkbox" />
                <span className={styles.Item}>Motorcycle</span>
              </div>
              <Image src={threeDotsIcon} width={20} height={20} alt="image" />
            </div>
            <div className={styles.itembox1}>
              <div className={styles.itemboxcheckbox}>
                <input type="checkbox" />
                <span className={styles.Item}>Iphone 14 pro max</span>
              </div>
              <Image src={threeDotsIcon} width={20} height={20} alt="image" />
            </div>
          </div>
        </div>
      </div>
      <Chat />
    </div>
  );
}

export default ItemList;
