import { MessageType } from "./MessageType";

/**
 * 방송
 */
export default interface Broadcast {
  /**
   * 방송 내 커스텀 메시지를 수신합니다.
   *
   * @param callback
   */
  listen(callback: BroadcastListener): void;

  /**
   * 방송 내 커스텀 메시지를 전송합니다.
   *
   * @param action 커스텀 액션(주제) 이름
   * @param message maximum is 50 byte.
   */
  send(action: string, message: MessageType): void;

  /**
   * 방송 내 특정 대상에게 메시지를 발신합니다.
   *
   * @param userId 대상
   * @param action 커스텀 액션(주제) 이름
   * @param message
   */
  whisper(userId: string, action: string, message: MessageType): void;
}

export type BroadcastListener = (
  action: string,
  message: MessageType,
  fromId: string,
) => void;
