/**
 * `GEM_ITEM_SENDED`: 라이브 젬 경품 당첨
 */
export default interface GemItemSended {
  /** 당첨자 Id */
  readonly receiverId: string;
  /** 당첨자 닉네임 */
  readonly receiverNickname: string;
  /** 아이템명 */
  readonly itemName: string;
}
