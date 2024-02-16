/**
 * `BREAK_TIME_NOTIFICATION`: 휴식시간 메시지
 */
export default interface BreakTimeNotification {
  /**
   * 쉬는시간 상태입니다.
   *
   * STARTED: 시작
   * STOPED: 종료. STOPPED 인데 오타인 듯...
   */
  readonly state: "STARTED" | "STOPED";

  /**
   * 광고 재생 횟수
   */
  readonly viewCount: number;
}
