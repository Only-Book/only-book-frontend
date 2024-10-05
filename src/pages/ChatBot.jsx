import styled from "styled-components";
import brownGarlic from "../image/brownGarlic.svg";
import chatSend from "../image/chatSend.svg";

const ChatBot = () => {
  return (
    <ChatBotContainer>
      <ChattingContainer>
        <MyContainer>
          <MyChatting>안녕!? 나는 재밌는 책이 읽고 싶어</MyChatting>
        </MyContainer>
        <BotContainer>
          <Profile>
            <img src={brownGarlic} alt="챗봇 프로필" />
          </Profile>
          <BotChatting>
            재미있는 책이 읽고 싶으시다면 ooooo을 추천드립니다!
          </BotChatting>
        </BotContainer>
      </ChattingContainer>
      <MyChatInput>
        <TextInput></TextInput>
        <ChatButton>
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
  min-height: 59px;
  border-radius: 20px;
  padding: 1.7vw;
  width: 38.82vw;
`;

const MyChatInput = styled.div`
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
