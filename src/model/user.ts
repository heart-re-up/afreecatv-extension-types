export interface Users {
    userList: User[]
}

export interface User {
    /** 유저 아이디 */
    userId: string
    /** 유저 닉네임 */
    userNickname: string
    /** 유저 상태 */
    userStatus: UserStatus
}

export interface UserChallengeGift {
    /** 유저 아이디 */
    userId: string
    /** 유저 닉네임 */
    userNickname: string
    /** 개수 */
    count: number
    /** 열혈팬 여부 */
    isTopFan: Boolean
    /** 팬 여부 */
    isFan: Boolean
}

export interface UserStatus {
    /** BJ 여부 */
    isBJ: boolean
    /** 매니저 여부 */
    isManager: boolean
    /** 로그인 여부 */
    isGuest: boolean
    /** 열혈팬 여부 */
    isTopFan: boolean
    /** 여성 여부 */
    isFemale: boolean
    /** 성별 숨김 여부 */
    isHideSex: boolean
    /** 팬 여부 */
    isFan: boolean
    /** 구독자 여부 */
    isFollower: boolean
    /** 서포터 여부 */
    isSupporter: boolean
    /** 퀵뷰 사용 여부 */
    hasAppliedQuickview: boolean
}