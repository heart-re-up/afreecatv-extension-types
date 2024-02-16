/**
 * `FANLETTER_GIFTED`: 스티커 선물
 */
export default interface FanLetterGifted {
  /** BJ 아이디 */
  readonly bjId: string;
  /** BJ 닉네임 */
  readonly bjNickname: string;
  /** 보낸 유저 ID */
  readonly userId: string;
  /** 보낸 유저 닉네임 */
  readonly userNickname: string;
  /** 별풍선 개수 */
  readonly count: number;
  /** 선물 메세지 글자색 */
  readonly color: string;
  /** 세레모니 이미지 주소 */
  readonly imageUrl: string;
  /** 서포터 가입 순서 (이미 서포터인 경우에는 0 입니다.) */
  readonly supporterNumber: number;
  /** 중계방 여부 */
  readonly relaysBroad: boolean;
}
