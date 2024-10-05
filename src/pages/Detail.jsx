import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Review from "../components/Review";

const Detail = () => {
  const { id } = useParams(); // URL에서 id 가져오기
  console.log(id);
  const [book, setBook] = useState(null); // 상태 초기화
  const [loading, setLoading] = useState(true); // 로딩 상태 초기화
  const [error, setError] = useState(null); // 에러 상태 초기화

  // API 호출
  useEffect(() => {
    if (id) {
      const fetchBookDetails = async () => {
        try {
          const response = await axios.get(`https://onlybook.shop:8443/api/books/${id}`, {
            withCredentials: true, // 이 부분 추가
            });
          setBook(response.data.data); // 'data' 객체에서 정보 가져오기
        } catch (error) {
          setError("책 정보를 가져오는 데 실패했습니다.");
        } finally {
          setLoading(false);
        }
      };
  
      fetchBookDetails();
    } else {
      setError("유효하지 않은 책 ID입니다."); // 유효하지 않은 id일 경우 에러 처리
      setLoading(false);
    }
  }, [id]);

  return (
    <DetailContainer>
      {loading ? (
        <p>로딩 중...</p>
      ) : error ? (
        <p>{error}</p>
      ) : book ? (
        <BookContainer>
          <BookImageContainer>
            <img src={book.imgUrl} alt="책 표지" />
          </BookImageContainer>
          <BookDetailContainer>
            <BookInfoContainer>
              <BookName>{book.title}</BookName>
              <AuthorName>{book.author}</AuthorName>
              <DetailStory>{book.description}</DetailStory>
              <Price>가격: {book.price}원</Price>
              <Category>카테고리: {book.category}</Category>
              <PublishDate>출판일: {book.publish_date}</PublishDate>
            </BookInfoContainer>
            <BookRecommend>
              <RecommendNum>10</RecommendNum>
              <RecommendTitle>추천 수</RecommendTitle>
            </BookRecommend>
          </BookDetailContainer>
        </BookContainer>
      ) : (
        <p>책 정보를 찾을 수 없습니다.</p>
      )}
      <ReviewContainer>
        <Review />
        <Review />
        <Review />
      </ReviewContainer>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const BookContainer = styled.div`
  display: flex;
`;

const BookImageContainer = styled.div`
  display: flex;
  margin: 5vw;

  img {
    width: 17vw;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const BookDetailContainer = styled.div`
  display: flex;
  padding: 5vw 0;
  width: 60%;
  justify-content: space-between;
`;

const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3vw;
`;

const BookName = styled.p`
  ${({ theme }) => theme.fonts.button};
  color: ${({ theme }) => theme.colors.brown};
  margin: 0%.5 0;
`;

const AuthorName = styled.p`
  ${({ theme }) => theme.fonts.helperText};
  margin: 1vw 0;
`;

const DetailStory = styled.p`
  ${({ theme }) => theme.fonts.helperText};
  color: ${({ theme }) => theme.colors.black};
  width: 550px;
  opacity: 45%;
  line-height: 140%;
  margin: 1vw 0;
`;

const Price = styled.p`
  ${({ theme }) => theme.fonts.helperText};
  color: ${({ theme }) => theme.colors.black};
  margin: 1vw 0;
`;

const Category = styled.p`
  ${({ theme }) => theme.fonts.helperText};
  color: ${({ theme }) => theme.colors.black};
  margin: 1vw 0;
`;

const PublishDate = styled.p`
  ${({ theme }) => theme.fonts.helperText};
  color: ${({ theme }) => theme.colors.black};
  margin: 1vw 0;
`;

const BookRecommend = styled.div`
  display: flex;
  width: 200px;
  height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.beige};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

const RecommendNum = styled.p`
  ${({ theme }) => theme.fonts.mainTitle};
  color: ${({ theme }) => theme.colors.brown};
  margin-bottom: 2vw;
`;

const RecommendTitle = styled.p`
  ${({ theme }) => theme.fonts.subTitle};
  color: ${({ theme }) => theme.colors.brown};
  margin: 0 3vw;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 55vh;
  align-items: center;
  justify-content: space-between;
`;

export default Detail;
