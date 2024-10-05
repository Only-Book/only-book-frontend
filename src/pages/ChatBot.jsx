import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import brownGarlic from "../image/brownGarlic.svg";
import chatSend from "../image/chatSend.svg";

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [books, setBooks] = useState([]);
  const [sentMessage, setSentMessage] = useState("");

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    try {
      const res = await axios.post(
        "https://onlybookllm.com/onlybookllm/chatbot/",
        {
          message: message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setResponse(res.data.response);
      setBooks(res.data.books);
      setSentMessage(message);
    } catch (error) {
      console.error("sending message:", error);
      setResponse("error");
      setBooks([]);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <ChatBotContainer>
      <ChattingContainer>
        {message && (
          <MyContainer>
            <MyChatting>{sentMessage}</MyChatting>
          </MyContainer>
        )}
        {response && (
          <BotContainer>
            <Profile>
              <img src={brownGarlic} alt="챗봇 프로필" />
            </Profile>
            <ChattingList>
              <BotChatting>{response}</BotChatting>
              {books.map((book, index) => (
                <BotChatting
                  key={index}
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <Title>{book.title}</Title>
                  <Text>저자: {book.author}</Text>
                  <Text>한 줄 소개: {book.description}</Text>
                </BotChatting>
              ))}
            </ChattingList>
          </BotContainer>
        )}
      </ChattingContainer>
      <MyChatInput>
        <TextInput
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="ex) 힐링이 필요할 때 읽을 책을 추천해줘!"
        />
        <ChatButton onClick={handleSendMessage}>
          <img src={chatSend} alt="채팅 전송" />
        </ChatButton>
      </MyChatInput>
    </ChatBotContainer>
  );
};

const ChatBotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChattingContainer = styled.div`
  display: flex;
  width: 80vw;
  height: 75vh;
  flex-direction: column;
  overflow-y: auto;
  scroll-behavior: smooth;
  margin-bottom: 20px;
`;

const MyContainer = styled.div`
  display: flex;
  width: 80vw;
  justify-content: end;
  margin: 28px 0;
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.beige};
  width: 65px;
  height: 65px;
  margin-right: 10px;
  border-radius: 100%;

  img {
    width: 50px;
    height: 50px;
  }
`;

const ChattingList = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyChatting = styled.p`
  ${({ theme }) => theme.fonts.helperText};
  background-color: ${({ theme }) => theme.colors.beige};
  color: ${({ theme }) => theme.colors.brown};
  display: flex;
  min-height: 59px;
  border-radius: 20px;
  padding: 1.7vw;
  width: 38.82vw;
`;

const BotContainer = styled.div`
  display: flex;
  width: 80vw;
  justify-content: start;
`;

const BotChatting = styled.p`
  ${({ theme }) => theme.fonts.helperText};
  background-color: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.beige};
  display: flex;
  line-height: 160%;
  min-height: 59px;
  border-radius: 20px;
  padding: 1.7vw;
  margin-bottom: 10px;
  width: 60vw;
  max-width: 800px;
  flex-direction: column;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.heading};
  margin-bottom: 10px;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.helperText};
`;

const MyChatInput = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.brown};
  border-radius: 20px;
  padding: 0 3vw;
  width: 70vw;
  height: 8.5161vh;
`;

const TextInput = styled.input`
  ${({ theme }) => theme.fonts.helperText};
  display: flex;
  border: none;
  outline: none;
  width: 60vw;
  margin: 3vh 0;
`;

const ChatButton = styled.div`
  display: flex;

  img {
    width: 31px;
    height: 31px;
  }
`;

export default ChatBot;
