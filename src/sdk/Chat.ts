import { MessageType } from "./MessageType";

/**
 * 실제 채팅 API 객체입니다.
 *
 *
 *
 * 채팅을 수신 및 발신을 위한 함수를 제공합니다.
 */
export default interface Chat {
  /**
   * 채팅이 발생되면 콜백이 호출됩니다.
   * 일종의 `addEventListener` 입니다.
   *
   * @param callback 채팅 메시지가 발생하면 콜백 받을 함수
   */
  listen(callback: ChatListener): void;

  /**
   * 현재 채팅방에 채팅을 보냅니다.
   *
   * @param action `Action.MESSAGE` 만 가능합니다.
   * @param message
   */
  send(action: Action, message: string): void;
}

/**
 * 채팅 API 에서 채팅을 수신하기 위해 등록하는 콜백 함수 타입입니다.
 *
 * @param action
 */
export type ChatListener = (action: Action, message: MessageType) => void;

/**
 * 채팅 수신시 발생하는 액션입니다.
 *
 * 2024-02-17 확인 시 JOIN 과 QUIT 가 제거됨. 도대체 왜 버전 변경을 알려주지 않는지 모르곘음...
 */
export type Action =
  | "JOIN" // 본인 채팅 참여
  | "QUIT" // 본인 채팅 퇴장
  | "IN" // 참여자 참여
  | "OUT" // 참여자 퇴장
  | "USERSTATUS_CHANGED" // 참여자 상태 변경
  | "MESSAGE" // 채팅 메시지
  | "BALLOON_GIFTED" // 별풍선 선물
  | "ADBALLOON_GIFTED" // 애드벌룬 선물
  | "VIDEOBALLOON_GIFTED" // 영상풍선 선물
  | "FANLETTER_GIFTED" // 스티커 선물
  | "QUICKVIEW_GIFTED" // 퀵뷰 선물
  | "OGQ_EMOTICON_GIFTED" // OGQ 이모티콘 선물
  | "SUBSCRIPTION_GIFTED" // 구독권 선물
  | "SUBSCRIBED" // 구독
  | "KEEP_SUBSCRIBED" // 연속 구독
  | "BATTLE_MISSION_GIFTED" // 대결 미션 후원
  | "BATTLE_MISSION_FINISHED" // 대결 미션 종료
  | "BATTLE_MISSION_SETTLED" // 대결 미션 정산
  | "CHALLENGE_MISSION_GIFTED" // 도전미션 후원
  | "CHALLENGE_MISSION_FINISHED" // 도전미션 종료
  | "CHALLENGE_MISSION_SETTLED" // 도전미션 정산
  | "CHALLENGE_MISSION_SETTLED_FANLIST" // 도전미션 정산 - 후원자 목록. 2024-02-17 에 추가를 확인함.
  | "DROPS_NOTIFICATION" // 아이템 드롭스 추첨 완료
  | "GEM_ITEM_SENDED" // 라이브 젬 경품 당첨
  | "BJ_NOTICE" // BJ 채팅 공지
  | "POLL_NOTIFICATION" // 투표 상태 알림
  | "BREAK_TIME_NOTIFICATION"; // 쉬는 시간 알림
