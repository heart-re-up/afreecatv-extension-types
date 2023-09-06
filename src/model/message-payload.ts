import {User, UserChallengeGift} from "./user";
import {SubscriptionGiftType, SubscriptionType} from "../type/subscription";
import {QuickViewGiftType} from "../type/quick-view";


export interface Message extends User {
    /** 채팅 메시지 */
    message: string
    /** OGQ 이모티콘 이미지 주소 */
    imageUrl: string
    /** 글자색 */
    color: string
    /** 구독 개월 수 */
    followMonths: string
}

export interface GiftBalloon {
    bjId: string // BJ 아이디
    userId: string // 보낸 유저 ID
    userNickname: string // 보낸 유저 닉네임
    count: number // 개수
    fanNumber: number // 팬클럽 가입 순서 (기존 팬클럽은 0으로 내려옴)
    becomesTopFan: boolean // 열혈팬 승급 여부
    imageUrl: string // 세레모니 이미지 주소
    relaysBroad: boolean // 중계방 여부
    fromVod: boolean // VOD 별풍선 여부
}

export interface GiftAdBalloon {
    bjId: string // BJ 아이디
    userId: string // 보낸 유저 ID
    userNickname: string // 보낸 유저 닉네임
    count: number // 개수
    imageUrl: string // 세레모니 이미지 주소
    fanNumber: number // 팬클럽 가입 순서 (기존 팬클럽 0)
    title: string // 제휴사 타이틀
    relaysBroad: boolean // 중계방 여부
    fromVod: boolean // VOD 애드벌룬 여부
    fromStation: boolean // 방송국 애드벌룬 여부
}

export interface GiftVideoBalloon {
    bjId: string // BJ 아이디
    userId: string // 보낸 유저 ID
    userNickname: string // 보낸 유저 닉네임
    count: number // 개수
    imageUrl: string // 세레모니 이미지 주소
    fanNumber: number // 팬클럽 가입 순서 (기존 팬클럽은 0)
    becomesTopFan: boolean // 열혈팬 승급 여부
    relaysBroad: boolean // 중계방 여부
}

/**
 * 스티커
 */
export interface GiftFanLetter {
    bjId: string // BJ 아이디
    bjNickname: string // BJ 닉네임
    userId: string // 보낸 유저 ID
    userNickname: string // 보낸 유저 닉네임
    count: number // 개수
    color: string // 선물 메세지 글자색
    imageUrl: string // 세레모니 이미지 주소
    supporterNumber: number // 서포터 가입 순서 (기본 서포터는 0)
    relaysBroad: boolean // 중계방 여부
}

export interface GiftQuickView {
    userId: string // 보낸 유저 ID
    userNickname: string // 보낸 유저 닉네임
    receiverId: string // 받는 유저 ID
    receiverNickname: string // 받는 유저 닉네임
    imageUrl: string // 세레모니 이미지 주소
    type: QuickViewGiftType
}

export interface GiftOGQEmoticon {
    userId: string // 보낸 유저 ID
    userNickname: string // 보낸 유저 닉네임
    receiverId: string // 받는 유저 ID
    receiverNickname: string // 받는 유저 닉네임
    imageUrl: string // 세레모니 이미지 주소
    itemName: string // 이모티콘명
}

export interface GiftOGQEmoticon {
    userId: string // 보낸 유저 ID
    userNickname: string // 보낸 유저 닉네임
    receiverId: string // 받는 유저 ID
    receiverNickname: string // 받는 유저 닉네임
    imageUrl: string // 세레모니 이미지 주소
    itemName: string // 이모티콘명
}

export interface GiftSubscription {
    userId: string // 보낸 유저 ID
    userNickname: string // 보낸 유저 닉네임
    receiverId: string // 받는 유저 ID
    receiverNickname: string // 받는 유저 닉네임
    bjId: string // 구독 대상 BJ ID
    bjNickname: string // 구독 대상 BJ 닉네임
    type: SubscriptionGiftType
}

export interface Subscription {
    bjId: string // BJ 아이디
    userId: string // 구독한 유저 ID
    userNickname: string // 구독한 유저 닉네임
    imageUrl: string // 세레모니 이미지 주소
    fromVod: boolean // VOD 를 통한 구독 여부
    type: SubscriptionGiftType | SubscriptionType
}

export interface KeepSubscription {
    bjId: string // BJ 아이디
    userId: string // 구독한 유저 ID
    userNickname: string // 구독한 유저 닉네임
    imageUrl: string // 세레모니 이미지 주소
    periodMonth: number // 구독 유지 기간(개월)
}

export interface BattleMissionGifted {
    userId: string // 보낸 유저 ID
    userNickname: string // 보낸 유저 닉네임
    count: number // 개수
    imageUrl: string // 세레모니 이미지 주소
    fanNumber: number // 팬클럽 가입 순서 (기존 팬클럽은 0으로 내려옴)
    relaysBroad: boolean // 중계방 여부
}

export interface BattleMissionFinished {
    isDraw: boolean // 무승부 여부
    winner: string // 승리팀
}

export interface BattleMissionSettled {
    count: number // 개수
    imageUrl: string // 세레모니 이미지 주소
}

export interface ChallengeMissionGifted {
    userId: string // 보낸 유저 ID
    userNickname: string // 보낸 유저 닉네임
    count: number // 개수
    imageUrl: string // 세레모니 이미지 주소
    relaysBroad: boolean // 중계방 여부
}

export interface ChallengeMissionFinished {
    missionStatus: 'SUCCESS' | 'FAIL'
    title: string
}

export interface ChallengeMissionSettled {
    fanNumber: number // 팬클럽 가입 순서 (기존 팬클럽은 0)
    userList: UserChallengeGift[] // 참여자 목록. 최대 40명.
    count: number // 개수
    imageUrl: string // 세레모니 이미지 주소
}

export interface DropsNotification {
    bjId: string // BJ 아이디
    itemName: string // 아이템명
}

export interface GemItemSended {
    receiverId: string // 당첨자 Id
    receiverNickname: string // 당첨자 닉네임
    itemName: string // 아이템명
}

export interface BjNotice {
    message: string // 공지 내용
    shows: boolean // 공지 노출 여부
}

export interface PollNotification {
    bjId: number // BJ 아이디
    pollNo: number // 투표 고유번호
    showsPoll: boolean // 투표 상태 노출 여부
    state: 'STARTED' | 'STOPED' | 'FINISHED' | 'ANNOUNCED'
}

export interface BreakTimeNotification {
    state: 'STARTED' | 'STOPED' // 상태
    viewCount: Number // 광고 재생 횟수
}