import Resolution from "./Resolution";

/**
 * 인증 정보
 *
 * |확장 프로그램|대상|지원여부|
 * |:---:|:---:|:---:|
 * | 팝업형 | 시청자 실행 화면| O |
 * | 팝업형 | BJ 실행 화면   | O |
 * | 송출형 | 방송 송출 화면  | O |
 * | 송출형 | BJ 설정 화면   | O |
 */
export default interface BroadInfo {
  /** 방송 고유 번호 */
  broadNo: string;
  /** 방송 제목 */
  title: string;
  /** 방송 썸네일 URL */
  thumbnail: string;
  /** 방송 시작 시간 (YYYY-MM-DD HH:mm:ss) */
  startTime: string;
  /** 성인 전용 방송 여부 */
  allowsAdult: boolean;
  /**  방송 해상도 */
  resolution: Resolution;
  /** 방송 재송출 (탐방) 가능 여부 */
  canResend: boolean;
  /** 유료 광고 포함 여부 */
  hasPromotion: boolean;
  /** 비밀번호 설정 여부 */
  hasPassword: boolean;
  /** BJ 아이디 */
  bjId: string;
  /** BJ 닉네임 */
  bjNickname: string;
  /** BJ 썸네일 URL */
  bjThumbnail: string;
  /** 카테고리 번호 */
  categoryNo: string;
  /** 영상 비트레이트 정보 */
  bitrate: string;
}
