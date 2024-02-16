/**
 * `BALLOON_GIFTED`: 별풍선 선물
 */
export default interface BalloonGifted {
  /** BJ 아이디 */
  readonly bjId: string;
  /** 보낸 유저 ID */
  readonly userId: string;
  /** 보낸 유저 닉네임 */
  readonly userNickname: string;
  /** 별풍선 개수 */
  readonly count: number;
  /** 팬클럽 가입 순서 (기존 팬클럽은 0으로 내려옴) */
  readonly fanNumber: number;
  /** 열혈팬 승급 여부 */
  readonly becomesTopFan: boolean;
  /** 세레모니 이미지 주소 */
  readonly imageUrl: string;
  /** 중계방 여부 */
  readonly relaysBroad: boolean;
  /** VOD 별풍선 여부 */
  readonly fromVod: boolean;
}
