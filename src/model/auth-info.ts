export interface AuthInfo {
    /** 인증 토큰 */
    accessToken: string
    /** 유저 동의 토큰 */
    userAgreeToken: string
    /** 보안처리된 유저 식별자 */
    obscureUserId: string
    /** BJ 여부 */
    isBJ: boolean
}