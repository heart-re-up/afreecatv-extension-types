/**
 * `ADBALLOON_GIFTED`: 애드벌룬 선물
 */
export default interface AdBalloonGifted {
  readonly bjId: string; // BJ 아이디
  readonly userId: string; // 보낸 유저 ID
  readonly userNickname: string; // 보낸 유저 닉네임
  readonly count: number; // 별풍선 개수
  readonly imageUrl: string; // 세레모니 이미지 주소
  readonly fanNumber: number; // 팬클럽 가입 순서 (기존 팬클럽 0)
  readonly title: string; // 제휴사 타이틀
  readonly relaysBroad: boolean; // 중계방 여부
  readonly fromVod: boolean; // VOD 애드벌룬 여부
  readonly fromStation: boolean; // 방송국 애드벌룬 여부
}
