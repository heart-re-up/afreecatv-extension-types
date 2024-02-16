/**
 * 영상 풍선 선물
 */
export default interface VideoBalloonGifted {
  bjId: string; // BJ 아이디
  userId: string; // 보낸 유저 ID
  userNickname: string; // 보낸 유저 닉네임
  count: number; // 별풍선 개수
  imageUrl: string; // 세레모니 이미지 주소
  fanNumber: number; // 팬클럽 가입 순서 (기존 팬클럽은 0)
  becomesTopFan: boolean; // 열혈팬 승급 여부
  relaysBroad: boolean; // 중계방 여부
}
