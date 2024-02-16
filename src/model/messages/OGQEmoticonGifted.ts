/**
 * `OGQ_EMOTICON_GIFTED`: OGQ 이모티콘 선물
 */
export default interface OGQEmoticonGifted {
  /** 보낸 유저 ID */
  readonly userId: string;
  /** 보낸 유저 닉네임 */
  readonly userNickname: string;
  /** 받는 유저 ID */
  readonly receiverId: string;
  /** 받는 유저 닉네임 */
  readonly receiverNickname: string;
  /** 세레모니 이미지 주소 */
  readonly imageUrl: string;
  /** 이모티콘명 */
  readonly itemName: string;
}
