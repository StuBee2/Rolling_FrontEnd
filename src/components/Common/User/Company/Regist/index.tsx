import { FiX } from "react-icons/fi";
import { CommonWrap, ScrollBox, Able, ListContainer } from "../style";
import * as S from "./style";
import { CompanyListType } from "../../../../../types/company.type";
import { getDateText } from "../../../../../libs/Date/getDateCounter";

interface Props {
  data: CompanyListType[];
}

export default function Regist({ data }: Props) {
  return (
    <CommonWrap>
      <ScrollBox>
        {data.map((regist) => (
          <ListContainer>
            <Able isTop={true}>
              <div style={{ fontWeight: "bold", fontSize: "17px" }}>
                등록완료
              </div>
              <FiX size={23} color="#999999" cursor="pointer" />
            </Able>
            <S.RegistBody>
              <img src={regist.imgUrl} alt="" />
              <ul>
                <S.RegistLi isDate={true}>
                  {getDateText(new Date(regist.createdAt))} 등록
                </S.RegistLi>
                <S.RegistLi>{regist.name}</S.RegistLi>
                <S.RegistLi>{regist.description}</S.RegistLi>
                <S.RegistLi isAddress={true}>{regist.address}</S.RegistLi>
              </ul>
            </S.RegistBody>
            <Able isTop={false}>
              <button>수정하기</button>
              <button>상세보기</button>
            </Able>
          </ListContainer>
        ))}
      </ScrollBox>
    </CommonWrap>
  );
}
