import React, { useState, useEffect } from "react";
import * as S from "./style";
import RankingImg from "../../../assets/RankingImg.png";
import kakaoMap from "./KakaoMapScrip";
import Token from "../../../libs/Token/Token";
import { ACCESS_TOKEN_KEY } from "../../../constants/Auth/auth.constant";
import { useLogging } from "../../../hooks/Log/useLogging";
import { LOG_ITEM } from "../../../constants/Log/log.constants";
import { useGetMyInfoQuery } from "../../../queries/Member/Member.query";
import useTokenCheck from "../../../hooks/Auth/useTokenCheck";

export default function Home() {
  const { handleLoggingClick } = useLogging();
  const { data } = useGetMyInfoQuery();

  interface companyDataType {
    id: number;
    name: string;
  }
  const [lanking, setLanking] = useState<companyDataType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    kakaoMap();

    const intervalLanking = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % lanking.length);
    }, 1000);

    return () => {
      clearInterval(intervalLanking);
    };
  }, [lanking]);

  useEffect(() => {
    const companyData = [
      { id: 1, name: "Google" },
      { id: 2, name: "Naver" },
      { id: 3, name: "Kakao" },
    ];
    setLanking(companyData);
  }, []);

  const companyLanking = {
    lanker: ["1. Google", "2. Naver", "3. Kakao"],
  };
  useTokenCheck();
  return (
    <S.body>
      <S.container>
        {Token.getToken(ACCESS_TOKEN_KEY) && (
          <S.ProfileContainer onClick={() => handleLoggingClick(LOG_ITEM[1])}>
            <S.ProfilImg src={data?.socialDetails.imageUrl} alt="Error" />
            <S.ProfilName>{data?.socialDetails.socialId}</S.ProfilName>
          </S.ProfileContainer>
        )}
        <S.mainContainer isToken={Token.getToken(ACCESS_TOKEN_KEY) !== null}>
          <div style={{ width: "100%" }}>
            <S.rankingContainer>
              <S.rankingImg src={RankingImg} alt="Error" />
              {lanking.length > 0 && lanking[currentIndex] && (
                <S.rankerName>
                  {lanking[currentIndex].id + ". " + lanking[currentIndex].name}
                </S.rankerName>
              )}
            </S.rankingContainer>
          </div>
          <div style={{ display: "flex" }}>
            <S.mapBox id="myMap" />
            <S.chattingContainer>
              <S.chetting></S.chetting>
              <S.chettingInputContainer>
                <input placeholder="질문이 있으신가요?" />
                <div>
                  <S.HiArrowUpIcon />
                </div>
              </S.chettingInputContainer>
            </S.chattingContainer>
          </div>
        </S.mainContainer>
        <S.AiFillExclamationCircleIcon
          onClick={() => window.alert("버그수정문의 ,팝업 구현 예정")}
        />
      </S.container>
    </S.body>
  );
}
