export interface AuthInfo {
    accessToken: string // 인증 토큰
    userAgreeToken: string // 유저 동의 토큰
    obscureUserId: string // 보안처리된 유저 식별자
    isBJ: boolean // BJ 여부
}