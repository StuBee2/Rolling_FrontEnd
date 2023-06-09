import { atom } from "recoil";
import { MemberType } from "../../types/member.type";

export const MyMemberInfo = atom<MemberType | null>({
  key: "myMemberInfo",
  default: null,
});
