export interface Users {
    userList: User[]
}

export interface User {
    userId: string // 유저 아이디
    userNickname: string // 유저 닉네임
    userStatus: UserStatus // 유저 상태
}

export interface UserChallengeGift {
    userId: string // 유저 아이디
    userNickname: string // 유저 닉네임
    count: number // 개수
    isTopFan: Boolean // 열혈팬 여부
    isFan: Boolean // 팬 여부
}

export interface UserStatus {
    isBJ: boolean // BJ 여부
    isManager: boolean // 매니저 여부
    isGuest: boolean // 로그인 여부
    isTopFan: boolean // 열혈팬 여부
    isFemale: boolean // 여성 여부
    isHideSex: boolean // 성별 숨김 여부
    isFan: boolean // 팬 여부
    isFollower: boolean // 구독자 여부
    isSupporter: boolean // 서포터 여부
    hasAppliedQuickview: boolean // 퀵뷰 사용 여부
}

export interface UserChat extends User {
    message: string // 채팅 메시지
    imageUrl: string // OGQ 이모티콘 이미지 주소
    color: string // 글자색
    followMonths: string // 구독 개월 수
}