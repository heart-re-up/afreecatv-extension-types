import ChallengeGiftedUser from "./base/UserChallengeGift";

/**
 * `CHALLENGE_MISSION_SETTLED_FANLIST`: 도전미션 정산 - 후원자 목록
 *
 * 2024-02-17: `CHALLENGE_MISSION_SETTLED` 메시지 객체가 이 객체로 변경된 듯 함. 기존 `CHALLENGE_MISSION_SETTLED` 는 도전미션 정산으로 변경됨.
 */
export default interface ChallengeMissionSettledFanlist {
  /** 팬클럽 가입 순서 (기존 팬클럽은 0) */
  readonly fanNumber: number;
  /** 참여자 목록. 최대 40명. */
  readonly userList: Array<ChallengeGiftedUser>;
}
