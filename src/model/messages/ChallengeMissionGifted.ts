/**
 * `CHALLENGE_MISSION_GIFTED`: 도전미션 별풍선 선물
 */
export default interface ChallengeMissionGifted {
  /** 보낸 유저 ID */
  readonly userId: string;
  /** 보낸 유저 닉네임 */
  readonly userNickname: string;
  /** 별풍선 개수 */
  readonly count: number;
  /** 세레모니 이미지 주소 */
  readonly imageUrl: string;
  /** 중계방 여부 */
  readonly relaysBroad: boolean;
}
