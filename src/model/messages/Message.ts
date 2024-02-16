import User from "./base/User";

/**
 * 채팅
 * action : 'MESSAGE'
 */
export default interface Message extends User {
  /** 채팅 메시지 */
  message: string;
  /** OGQ 이모티콘 이미지 주소 */
  imageUrl: string;
  /** 글자색 */
  color: string;
  /** 구독 개월 수 */
  followMonths: string;
}
