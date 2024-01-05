"use client";
import React, { useRef,useState } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { avatarIcon, clipImage, smileImage } from "@/assets";
import EmojiPicker from "emoji-picker-react";

function Chat() {
  const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const handleToggleEmojiPicker = () => {
    setEmojiPickerVisible(!isEmojiPickerVisible);
  };

  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  return (

    <>
      <div className={styles.container}>
        <div className={styles.container1}>
          <p className={styles.containerheading}>Esther Howard</p>

          <div style={{ display: "flex", marginBottom: "20px" }}>
            <div style={{ flex: 1, width: 100 }}></div>
            <div className={styles.Chat1}>Are you ready?</div>
          </div>

          <div style={{ marginBottom: "10px", display: "flex" }}>
            <Image
              src={avatarIcon}
              height={30}
              width={30}
              className={styles.womanImage}
              alt="image"
            />
            <div>{isEmojiPickerVisible && (
        <EmojiPicker
          onSelect={(emoji) => {
            console.log(`Selected emoji: ${emoji}`);
            // Handle the selected emoji as needed
          }}
        />
      )}</div>
            <div className={styles.Chat2}>
              <p style={{ marginTop: "-0.5PX", marginLeft: 10 }}>
                Are you ready?
              </p>
            </div>

            <div style={{ flex: 1, width: 100 }}></div>
          </div>

          <div className={styles.typeBox}>
            <input type="textarea" className={styles.inputbox} />
            <div style={{ display: "flex" }}>
              <div className={styles.smileImage}>
                <Image onClick={()=>setEmojiPickerVisible(!isEmojiPickerVisible)} src={smileImage} height={20} width={20} alt="emoji" />

                <Image
                  src={clipImage}
                  height={20}
                  width={20}
                  className={styles.clipImage}
                  onClick={handleButtonClick}
                  alt="folder opener"
                />

                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>

              <div className={styles.sendBtn}>
                <p>Send now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
