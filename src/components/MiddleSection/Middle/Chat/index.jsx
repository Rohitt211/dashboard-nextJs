"use client";
import React, { useRef, useState } from "react";
import "./style.scss";
import Image from "next/image";
import { avatarIcon, clipImage, smileImage } from "@/assets";
import EmojiPicker from "emoji-picker-react";

function Chat() {
  const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [inputChat, setInputChat] = useState("");
  const [selectedEmoji, setSelectedEmoji] = useState(null);

  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  const handleOnchange = (event) => {
    setInputChat(event.target.value);
  };

  const handleEmojiSelect = (event) => {
    setInputChat((prev) => prev + event?.emoji);
  };

  return (
    <>
      <div className="chatParent">
        <div className="chatParent-chatchild">
          <p className="chatParent-chatchild-chatchildHeading">Esther Howard</p>

          <div style={{ display: "flex", marginBottom: "20px" }}>
            <div style={{ flex: 1, width: 100 }}></div>
            <div className="chatParent-chatchild-Chat1">Are you ready?</div>
          </div>

          <div style={{ marginBottom: "10px", display: "flex" }}>
            <Image
              src={avatarIcon}
              height={30}
              width={30}
              className="chatParent-chatchild-womanImage"
              alt="image"
            />
            <div>
              {isEmojiPickerVisible && (
                <EmojiPicker onEmojiClick={handleEmojiSelect} />
              )}
            </div>
            <div className="chatParent-chatchild-Chat2">
              <p style={{ marginTop: "-0.5PX", marginLeft: 10 }}>
                Are you ready?
              </p>
            </div>

            <div style={{ flex: 1, width: 100 }}></div>
          </div>

          <div className="chatParent-chatchild-typeBox">
            <input
              type="textarea"
              onChange={handleOnchange}
              value={inputChat}
              className="chatParent-chatchild-typeBox-inputbox"
            />
            <div style={{ display: "flex" }}>
              <div className="chatParent-chatchild-typeBox-smileImage">
                <Image
                  onClick={() => setEmojiPickerVisible(!isEmojiPickerVisible)}
                  src={smileImage}
                  height={20}
                  width={20}
                  alt="emoji"
                />

                <Image
                  src={clipImage}
                  height={20}
                  width={20}
                  className="chatParent-chatchild-typeBox-smileImage-clipImage"
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

              <div className="chatParent-chatchild-typeBox-smileImage-sendBtn" onClick={() => {}}>
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
