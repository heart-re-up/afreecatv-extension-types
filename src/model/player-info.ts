import {Resolution} from "./resolution";

export interface PlayerInfo {
    displayResolution: Resolution
    isFullScreen: Boolean //전체화면 모드 여부
    isMuted: Boolean //음소거 여부
    isScreenMode: Boolean //스크린 모드 여부
    isPipMode: Boolean //PIP 모드 여부
    isRadio: Boolean //라디오 모드 여부
    language: String //언어지역코드 (’ko-kr’)
    theme: String //테마 정보 (’light’, ‘dark’)
    volume: Number //볼륨 정보
}
