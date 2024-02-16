/**
 * 도전 미션 후원자 정보
 */
export default interface UserChallengeGift {
  /** 유저 아이디 */
  readonly userId: string;
  /** 유저 닉네임 */
  readonly userNickname: string;
  /** 개수 */
  readonly count: number;
  /** 열혈팬 여부 */
  readonly isTopFan: boolean;
  /** 팬 여부 */
  readonly isFan: boolean;
}
