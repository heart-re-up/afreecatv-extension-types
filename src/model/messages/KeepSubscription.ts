export default interface KeepSubscription {
  /** BJ 아이디 */
  bjId: string;
  /** 구독한 유저 ID */
  userId: string;
  /** 구독한 유저 닉네임 */
  userNickname: string;
  /** 세레모니 이미지 주소 */
  imageUrl: string;
  /** 구독 유지 기간(개월) */
  periodMonth: number;
}
