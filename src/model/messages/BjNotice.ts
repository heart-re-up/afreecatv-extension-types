/**
 * `BJ_NOTICE`: 공지사항
 */
export default interface BjNotice {
  /** 공지 내용 */
  readonly message: string;
  /** 공지 노출 여부 */
  readonly shows: boolean;
}
