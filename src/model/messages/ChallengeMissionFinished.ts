/**
 * `CHALLENGE_MISSION_FINISHED`: 도전미션 종료
 */
export default interface ChallengeMissionFinished {
  /** 미션 상태 */
  readonly missionStatus: "SUCCESS" | "FAIL";
  /** 미션명 */
  readonly title: string;
}
