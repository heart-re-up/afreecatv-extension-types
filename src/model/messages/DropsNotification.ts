/**
 * `DROPS_NOTIFICATION`: 아이템 드롭스 추첨 완료
 */
export default interface DropsNotification {
  /** BJ 아이디 */
  readonly bjId: string;
  /** 아이템명 */
  readonly itemName: string;
}
