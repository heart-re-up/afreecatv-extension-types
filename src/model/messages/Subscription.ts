import { SubscriptionGiftTypes } from "../../type/SubscriptionGiftType";
import { SubscriptionTypes } from "../../type/SubscriptionType";

export default interface Subscription {
  bjId: string; // BJ 아이디
  userId: string; // 구독한 유저 ID
  userNickname: string; // 구독한 유저 닉네임
  imageUrl: string; // 세레모니 이미지 주소
  fromVod: boolean; // VOD 를 통한 구독 여부
  type: SubscriptionGiftTypes | SubscriptionTypes;
}
