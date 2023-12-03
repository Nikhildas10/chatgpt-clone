import { KeyboardArrowDown } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/chatgpt.svg";
import chatLogo from "../assets/chatgptLogo.svg";
import { ArrowUp } from "react-feather";
import { sendMsg } from "../api/openAi";

const Main = ({ onRecentData }) => {
  const scrollMsg = useRef(null);
  const [sendInitiated, setSendInitiated] = useState(false);
  const [recent, setRecent] = useState([]);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const sug1 = "give me a description about react.js";
  const sug3 = "Write a text inviting my neighbors to a barbecue";
  const sug4 =
    "Suggest some codenames for a project introducing flexible work arrangements";
  const sug2 = "Give me ideas about how to plan my New Years resolutions";

  //suggestions
  const suggestions1 = () => {
    setInput(sug1);
    setSendInitiated(true);
  };
  const suggestions2 = () => {
    setInput(sug2);
    setSendInitiated(true);
  };
  const suggestions3 = () => {
    setInput(sug3);
    setSendInitiated(true);
  };
  const suggestions4 = () => {
    setInput(sug4);
    setSendInitiated(true);
  };
  const handleSend = async () => {
    if (input) {
     
      setRecent((prevRecent) => [...prevRecent, input]);
      
      const copyInput = input;
      console.log(copyInput);

      setInput("");
      setMessages([...messages, { text: copyInput, isBot: false }]);

      setMessages((prevMessages) => [
        ...prevMessages,
        { loading: true, isBot: true },
      ]);
       
      try {
        const res = await sendMsg(copyInput);
        setMessages((prevMessages) => [
          ...prevMessages.slice(0, -1),
          { text: res, isBot: true },
        ]);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };
  useEffect(() => {
        onRecentData(recent);

    if (sendInitiated) {
      handleSend();
      setSendInitiated(false);
      
    }
  }, [sendInitiated, input,recent]);

  useEffect(() => {
    scrollMsg.current?.scrollIntoView();
  }, [messages]);
  const handleEnter = async (e) => {
    if (e.key == "Enter") {
      await handleSend();
    }
  };
  return (
    <div className="main">
      <h2 style={{ margin: "15px" }}>
        ChatGpt 3.5 <KeyboardArrowDown></KeyboardArrowDown>
      </h2>

      <div className="chats">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <div key={index} className={message.isBot ? "chat bot" : "chat"}>
              <img
                src={
                  message.isBot
                    ? chatLogo
                    : "https://i.postimg.cc/BnMDHSKL/vecteezy-default-profile-account-unknown-icon-black-silhouette-20765399.jpg"
                }
                alt=""
              />
              {message.loading ? (
                <div class="loader3">
                  <span></span>
                  <span></span>
                </div>
              ) : (
                <p>{message.text}</p>
              )}
              <div ref={scrollMsg} />
            </div>
          ))
        ) : (
          <>
            <div className="middleMain">
              <div className="logoMidWrap">
                <img src={logo} alt="" />
              </div>
              <h1 style={{ marginTop: "15px" }}>How can I help you today?</h1>
            </div>
            <div className="suggestions">
              <div onClick={suggestions1} className="singleSuggestion">
                <h3>Give me a description</h3>
                <p>about react js</p>
              </div>
              <div onClick={suggestions2} className="singleSuggestion">
                <h3> Give me ideas</h3>
                <p>about how to plan my New Years resolutions</p>{" "}
              </div>
              <div onClick={suggestions3} className="singleSuggestion">
                <h3> Write a text</h3>
                <p>inviting my neighbors to a barbecue</p>{" "}
              </div>
              <div onClick={suggestions4} className="singleSuggestion">
                <h3> Suggest some codenames </h3>
                <p>for a project introducing flexible work arrangements</p>{" "}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="lowMain">
        <div className="search">
          {" "}
          <input
            onChange={(e) => setInput(e.target.value)}
            placeholder="Message chatGPT..."
            value={input}
            onKeyDown={(e) => handleEnter(e)}
            type="text"
          />
          <button onClick={handleSend}>
            <ArrowUp size={23}></ArrowUp>
          </button>
        </div>
        <span style={{ marginTop: "10px", color: "#cecece" }}>
          ChatGPT can make mistakes. Consider checking important information.
        </span>
      </div>
    </div>
  );
};

export default Main;
