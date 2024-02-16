/**
 * 구독 선물 타입
 */
export type SubscriptionGiftTypes =
  | SubscriptionGift30
  | SubscriptionGift90
  | SubscriptionGift180;

/**
 * 구독선물권 1개월
 * (타인이 선물. 단 타인은 자기 자신이 될 수도 있음. A 유저가 자기 자신인 A 유저에게 선물가능.)
 */
export type SubscriptionGift30 = "GIFT_30";

/**
 * 구독선물권 3개월
 * (타인이 선물. 단 타인은 자기 자신이 될 수도 있음. A 유저가 자기 자신인 A 유저에게 선물가능.)
 */
export type SubscriptionGift90 = "GIFT_90";

/**
 * 구독선물권 6개월
 * (타인이 선물. 단 타인은 자기 자신이 될 수도 있음. A 유저가 자기 자신인 A 유저에게 선물가능.)
 */
export type SubscriptionGift180 = "GIFT_180";
