import UserStatus from "./UserStatus";

export default interface User {
  /** 유저 아이디 */
  readonly userId: string;
  /** 유저 닉네임 */
  readonly userNickname: string;
  /** 유저 상태 */
  readonly userStatus: UserStatus;
}
