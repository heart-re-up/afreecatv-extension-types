/**
 * 인증 정보
 *
 * |확장 프로그램|대상|지원여부|
 * |:---:|:---:|:---:|
 * | 팝업형 | 시청자 실행 화면| O |
 * | 팝업형 | BJ 실행 화면   | O |
 * | 송출형 | 방송 송출 화면  | X |
 * | 송출형 | BJ 설정 화면   | O |
 */
export default interface AuthInfo {
  /** 인증 토큰 */
  accessToken: string;
  /** 유저 동의 토큰 */
  userAgreeToken: string;
  /**
   * 보안처리된 유저 식별자
   * 이 식별자가 존재한다면 로그인되어 있는것으로 판단할 수 있습니다.
   */
  obscureUserId: string;
  /** BJ 여부 */
  isBJ: boolean;
}
