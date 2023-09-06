export interface CursorMovedEvent {
    /** clientX 좌표 */
    clientX: number
    /** clientY 좌표 */
    clientY: number
    /** target element 의 class 정보 */
    targetClass: string
    /** target element 의 tag 정보 */
    targetTag: string
}