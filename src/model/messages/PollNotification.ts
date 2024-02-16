/**
 * `POLL_NOTIFICATION`: 투표 상태 알림
 */
export default interface PollNotification {
  /** BJ 아이디 */
  readonly bjId: number;
  /** 투표 고유번호 */
  readonly pollNo: number;
  /** 투표 상태 노출 여부 */
  readonly showsPoll: boolean;
  /** 상태 */
  readonly state: "STARTED" | "STOPED" | "FINISHED" | "ANNOUNCED";
}
