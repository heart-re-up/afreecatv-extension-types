/**
 * 구독 구매 타입 (스스로 구매)
 */
export type SubscriptionTypes =
  | "NORMAL" // 일반 구독(월 자동결제)
  | "MEMBERSHIP_1" // 1개월 정기 구독권
  | "MEMBERSHIP_3" // 3개월 정기 구독권
  | "MEMBERSHIP_6" // 6개월 정기 구독권
  | "MEMBERSHIP_12"; // 12개월 정기 구독권

export type Normal = "NORMAL"; // 일반 구독(월 자동결제)
export type Membership1 = "MEMBERSHIP_1"; // 1개월 정기 구독권
export type Membership3 = "MEMBERSHIP_3"; // 3개월 정기 구독권
export type Membership6 = "MEMBERSHIP_6"; // 6개월 정기 구독권
export type Membership12 = "MEMBERSHIP_12"; // 12개월 정기 구독권
