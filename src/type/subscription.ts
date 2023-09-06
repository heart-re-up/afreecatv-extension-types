export type SubscriptionType =
    | 'NORMAL'          // 일반 구독(월 자동결제)
    | 'MEMBERSHIP_1'    // 1개월 정기 구독권
    | 'MEMBERSHIP_3'    // 3개월 정기 구독권
    | 'MEMBERSHIP_6'    // 6개월 정기 구독권
    | 'MEMBERSHIP_12'   // 12개월 정기 구독권

export type SubscriptionGiftType =
    | 'GIFT_30'         // 구독선물권 1개월
    | 'GIFT_90'         // 구독선물권 3개월
    | 'GIFT_180'        // 구독선물권 6개월