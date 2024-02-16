import Resolution from "./Resolution";

/**
 * 인증 정보
 *
 * |확장 프로그램|대상|지원여부|
 * |:---:|:---:|:---:|
 * | 팝업형 | 시청자 실행 화면| O |
 * | 팝업형 | BJ 실행 화면   | X |
 * | 송출형 | 방송 송출 화면  | X |
 * | 송출형 | BJ 설정 화면   | X |
 */
export default interface PlayerInfo {
  displayResolution: Resolution;
  /** 전체화면 모드 여부 */
  isFullScreen: boolean;
  /** 음소거 여부 */
  isMuted: boolean;
  /** 스크린 모드 여부 */
  isScreenMode: boolean;
  /** PIP 모드 여부 */
  isPipMode: boolean;
  /** 라디오 모드 여부 */
  isRadio: boolean;
  /**
   * 언어지역코드 (’ko_KR’)
   *
   * 2024-02-17" 기존 ko-kr 타입에서 ko_KR 로 변경됨
   */
  language: string;
  /** 테마 정보 (’light’, ‘dark’) */
  theme: "light" | "dark";
  /** 볼륨 정보 */
  volume: number;
}
