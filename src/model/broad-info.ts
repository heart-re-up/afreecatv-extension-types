import {Resolution} from "./resolution";

export interface BroadInfo {
    broadNo: string //방송 고유 번호
    title: string //방송 제목
    thumbnail: string //방송 썸네일 URL
    startTime: string //방송 시작 시간 (YYYY-MM-DD HH:mm:ss)
    allowsAdult: boolean //성인 전용 방송 여부
    resolution: Resolution // 방송 해상도
    canResend: boolean //방송 재송출 (탐방) 가능 여부
    hasPromotion: boolean //유료 광고 포함 여부
    hasPassword: boolean //비밀번호 설정 여부
    bjId: string //BJ 아이디
    bjNickname: string //BJ 닉네임
    bjThumbnail: string //BJ 썸네일 URL
    categoryNo: string //카테고리 번호
    bitrate: string //영상 비트레이트 정보
}
