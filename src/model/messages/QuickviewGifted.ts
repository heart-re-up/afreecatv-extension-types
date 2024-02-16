/**
 * `QUICKVIEW_GIFTED`: 퀵뷰 선물 이벤트 메시지
 */
export default interface QuickviewGifted {
  /** 보낸 유저 ID */
  readonly userId: string;
  /** 보낸 유저 닉네임 */
  readonly userNickname: string;
  /** 받는 유저 ID */
  readonly receiverId: string;
  /** 받는 유저 닉네임 */
  readonly receiverNickname: string;
  /** 세레모니 이미지 주소 */
  readonly imageUrl: string;
  /** 이용권 기간 */
  readonly type: QuickViewGiftType;
}

/**
 * 퀵뷰 이용권 기간
 */
export type QuickViewGiftType =
  | "GIFT_30" // 퀵뷰 30일 이용권
  | "GIFT_90" // 퀵뷰 90일 이용권
  | "GIFT_365" // 퀵뷰 365일 이용권
  | "GIFT_PLUS_7" // 퀵뷰 플러스 30일 이용권
  | "GIFT_PLUS_30" // 퀵뷰 플러스 30일 이용권
  | "GIFT_PLUS_90" // 퀵뷰 플러스 90일 이용권
  | "GIFT_PLUS_365"; // 퀵뷰 플러스 365일 이용권
