export default interface UserStatus {
  /** BJ 여부 */
  readonly isBJ: boolean;
  /** 매니저 여부 */
  readonly isManager: boolean;
  /** 로그인 여부 */
  readonly isGuest: boolean;
  /** 열혈팬 여부 */
  readonly isTopFan: boolean;
  /** 여성 여부 */
  readonly isFemale: boolean;
  /** 성별 숨김 여부 */
  readonly isHideSex: boolean;
  /** 팬 여부 */
  readonly isFan: boolean;
  /** 구독자 여부 */
  readonly isFollower: boolean;
  /** 서포터 여부 */
  readonly isSupporter: boolean;
  /** 퀵뷰 사용 여부 */
  readonly hasAppliedQuickview: boolean;
}
