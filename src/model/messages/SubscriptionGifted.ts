import { SubscriptionGiftTypes } from "../../type/SubscriptionGiftType";

/**
 * ``: 구독권 선물 이벤트
 */
export default interface SubscriptionGifted {
  /** 보낸 유저 ID */
  readonly userId: string;
  /** 보낸 유저 닉네임 */
  readonly userNickname: string;
  /** 받는 유저 ID */
  readonly receiverId: string;
  /** 받는 유저 닉네임 */
  readonly receiverNickname: string;
  /** 구독 대상 BJ ID */
  readonly bjId: string;
  /** 구독 대상 BJ 닉네임 */
  readonly bjNickname: string;
  /** 구독권 타입 */
  readonly type: SubscriptionGiftTypes;
}
