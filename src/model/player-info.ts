import {Resolution} from "./resolution";

export interface PlayerInfo {
    displayResolution: Resolution
    /** 전체화면 모드 여부 */
    isFullScreen: Boolean
    /** 음소거 여부 */
    isMuted: Boolean
    /** 스크린 모드 여부 */
    isScreenMode: Boolean
    /** PIP 모드 여부 */
    isPipMode: Boolean
    /** 라디오 모드 여부 */
    isRadio: Boolean
    /** 언어지역코드 (’ko-kr’) */
    language: String
    /** 테마 정보 (’light’, ‘dark’) */
    theme: String
    /** 볼륨 정보 */
    volume: Number
}
