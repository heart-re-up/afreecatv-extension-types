import UserChallengeGift from "./base/UserChallengeGift";

/**
 * `CHALLENGE_MISSION_SETTLED`: 도전미션 정산
 *
 * 2024-02-17: fanNumber 와 userList 가 `CHALLENGE_MISSION_SETTLED_FANLIST` 항목으로 이전 되어 후원자 목록은 해당 메시지에서 처리하고, 이 메시지 객체는 정산만 처리하도록 변경 된 듯 함.
 */
export default interface ChallengeMissionSettled {
  /** 별풍선 개수 */
  readonly count: number;
  /** 세레모니 이미지 주소 */
  readonly imageUrl: string;
  /**
   * 팬클럽 가입 순서 (기존 팬클럽은 0)
   *
   * @deprecated `CHALLENGE_MISSION_SETTLED_FANLIST` 으로 이동 됨.
   */
  readonly fanNumber?: number;
  /**
   * 참여자 목록. 최대 40명.
   *
   * @deprecated `CHALLENGE_MISSION_SETTLED_FANLIST` 으로 이동 됨.
   */
  readonly userList?: Array<UserChallengeGift>;
}
