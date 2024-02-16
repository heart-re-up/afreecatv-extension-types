/**
 * `BATTLE_MISSION_FINISHED`: 대결 미션 종료
 *
 */
export default interface BattleMissionFinished {
  /** 무승부 여부 */
  readonly isDraw: boolean;
  /** 승리팀 */
  readonly winner: string;
}
