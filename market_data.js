{
  "meta": {
    "version": "2026.07.01",
    "lastUpdated": "2026-07-01T15:00:00+09:00",
    "nextUpdate": "2026-07-07T09:00:00+09:00",
    "updateCycle": "weekly",
    "author": "롯데호텔 경영지원부문 구매팀",
    "triggerPhrase": "오늘 날짜 기준의 최신동향을 알려주고, market_data.json 갱신해줘"
  },
  "coreMessages": [
    "① 원/달러 1,550원 돌파·금융위기 이후 최고 — 수입 식자재·소모품·설비 원가 즉시 재산정·환헤지 50% 이상 검토",
    "② SCFI 3,240p·9주 연속 상승 — 미서안 FEU $6,067, 7월 이후 둔화 전망에도 단기 물류비 재협상 시급",
    "③ 아라비카 311.2¢/lb·4.5개월 최고 — 브라질 폭우·ICE 재고 2년2개월 최저, F&B 커피 선구매·대체 원두 검토"
  ],
  "marketStatus": [
    { "category": "환율", "icon": "💱", "status": "🔴", "value": "1,550원", "change": "장중 1,555원 터치", "note": "美 금리인상·엔저 연동, 2009년 이후 최고" },
    { "category": "유가", "icon": "🛢️", "status": "🟢", "value": "WTI $69.5", "change": "전일 -1.8%", "note": "공급과잉 전망·호르무즈 완화 기대" },
    { "category": "물류비", "icon": "🚢", "status": "🔴", "value": "SCFI 3,240", "change": "9주 연속 ↑ +3.78%", "note": "미주·유럽 노선 강세" },
    { "category": "원자재", "icon": "🏭", "status": "🟡", "value": "구리 $13,287/t", "change": "LME 6/26 종가", "note": "재고 감소 vs 수요 둔화 우려" },
    { "category": "농산물", "icon": "🥬", "status": "🟡", "value": "배추 6,429원/10kg", "change": "가락시장 6/18", "note": "출하량 조절·양파 강보합" },
    { "category": "F&B", "icon": "🥩", "status": "🔴", "value": "커피 311.2¢/lb", "change": "4.5개월 최고", "note": "브라질 폭우·ICE 재고 최저" },
    { "category": "소모품", "icon": "🧴", "status": "🟡", "value": "PP/PE 안정", "change": "유가 하락 수혜 기대", "note": "환율 상승이 단가 상쇄" },
    { "category": "유틸리티", "icon": "⚡", "status": "🟢", "value": "전기·가스 동결", "change": "하반기 동결 확정", "note": "석유최고가 L당 150원 인하" },
    { "category": "지정학", "icon": "🌍", "status": "🔴", "value": "호르무즈 긴장", "change": "통행료·서비스료 논의", "note": "이란 지정 항로 외 차단 경고" }
  ],
  "fx": {
    "kpi": { "usd": 1550.0, "eur": 1792.0, "jpy": 9.53, "cny": 228.2 },
    "trend": [1532, 1545, 1548, 1549.4, 1549.8, 1551.9, 1550.0],
    "trendLabels": ["6/25", "6/26", "6/27", "6/30", "7/1", "7/1", "7/1"],
    "analysis": [
      "7/1 개장 1,549.8원 → 장중 1,551.9원, 고점 1,555원 — 2009년 3월 이후 최고 수준",
      "美 금리 인상 전망·달러 강세·엔/달러 40년 최고가 원화 약세 견인",
      "외국인 주식 매도·반도체 수출 호조가 혼재, 하반기 1,600원 전망도 제기",
      "수입 결제·분기말 대량 송금 일정과 겹침 — 환헤지 50~60% 즉시 검토 권고"
    ]
  },
  "oil": {
    "kpi": { "wti": 69.5, "brent": 72.92, "change_wti": -1.8, "change_brent": -0.3 },
    "trend": [78.5, 75.2, 72.8, 71.5, 70.25, 69.5, 69.5],
    "trendLabels": ["6/23", "6/24", "6/25", "6/26", "6/27", "6/30", "7/1"],
    "domestic": [
      { "item": "휘발유", "price": "약 1,850원/L", "note": "석유최고가 7차 인하 반영 예정" },
      { "item": "경유", "price": "약 1,840원/L", "note": "물류·발전 연료비 하락 기대" },
      { "item": "등유", "price": "약 1,450원/L", "note": "난방유 수요 비수기" }
    ],
    "analysis": [
      "6월 브렌트 -21% — 2020년 3월 이후 최대 월간 하락",
      "모건스탠리, 2027년 일 480만배럴 공급과잉 전망·브렌트 전망 75→70달러 하향",
      "미·이란 도하 협상 재개로 공급 정상화 기대, 단 지정학 변수 잔존",
      "호텔 에너지·운송비 절감 기회 활용, 변동성 모니터링 유지"
    ]
  },
  "logistics": {
    "scfi": 3239.64,
    "scfiChange": 3.78,
    "scfiTrend": [1875, 2218, 2572, 2726, 2985, 3122, 3239.64],
    "scfiTrendLabels": ["4/24", "5/29", "6/5", "6/12", "6/19", "6/26", "6/26"],
    "routes": [
      { "route": "미서안", "unit": "FEU", "price": 6067, "change": 6.76 },
      { "route": "미동안", "unit": "FEU", "price": 7384, "change": 7.43 },
      { "route": "유럽", "unit": "TEU", "price": 3342, "change": 5.83 },
      { "route": "지중해", "unit": "TEU", "price": 4666, "change": 9.53 },
      { "route": "남미", "unit": "TEU", "price": 7970, "change": -2.95 },
      { "route": "중동", "unit": "TEU", "price": 4592, "change": -3.39 }
    ],
    "analysis": [
      "9주 연속 상승, 2024년 8월 이후 3,200선 재돌파",
      "관세 회피 선적·조기 성수기 물량이 상승 견인, 7월 이후 예약 둔화 가능",
      "美 7월 말 관세 조치 재발표 예정 — 추가 선적 rush 변수",
      "장기계약 40~60% + 스팟 20~30% 3단 분할·BAF 조항 재검토 필수"
    ]
  },
  "materials": {
    "kpi": { "copper": 13287, "aluminum": 3589, "zinc": 3524, "nickel": 18530 },
    "trend": [13731, 13716, 13370, 13603, 13655, 13287, 13287],
    "trendLabels": ["6/5", "6/9", "6/10", "6/12", "6/15", "6/26", "6/26"],
    "items": [
      { "metal": "구리", "price": "$13,287/t", "impact": "전기·설비·IT 인프라", "outlook": "LME 재고↓ vs 중국 수요 둔화" },
      { "metal": "알루미늄", "price": "$3,589/t", "impact": "주방기기·포장·건축", "outlook": "중동 공급 정상화 압력" },
      { "metal": "아연", "price": "$3,524/t", "impact": "도금·합금", "outlook": "안정적" },
      { "metal": "니켈", "price": "$18,530/t", "impact": "스테인리스", "outlook": "보합" }
    ]
  },
  "food": {
    "cpi": { "value": 2.1, "period": "2026년 5월", "note": "통계청 최신 발표 기준" },
    "kamis": [
      { "item": "배추", "price": "6,429원", "unit": "10kg 망", "market": "가락", "date": "6/18", "trend": "하락" },
      { "item": "양파", "price": "강보합", "unit": "20kg", "market": "가락", "date": "6/30", "trend": "정부수매·창고입고" },
      { "item": "쪽파", "price": "안정", "unit": "kg", "market": "가락", "date": "6/30", "trend": "보합" },
      { "item": "고구마", "price": "보합", "unit": "10kg", "market": "가락", "date": "6/30", "trend": "수급 안정" }
    ],
    "analysis": [
      "배추, 주초 약세 후 출하량 조절로 반등 시도",
      "양파, 정부 비축·창고 입고로 강보합 유지",
      "여름철 채소류 계절 변동성 — 주 2회 KAMIS 모니터링",
      "환율 1,550원대 진입으로 수입 식자재 단가 압력 가중 — 산지·수입 대체 검토"
    ]
  },
  "fbItems": [
    { "item": "소고기(수입)", "prev_year": "12.5", "prev_month": "11.8", "current": "12.4", "unit": "$/kg", "trend": "🔴" },
    { "item": "연어(수입)", "prev_year": "8.2", "prev_month": "7.9", "current": "8.1", "unit": "$/kg", "trend": "🟡" },
    { "item": "새우(수입)", "prev_year": "9.5", "prev_month": "9.8", "current": "9.7", "unit": "$/kg", "trend": "🟡" },
    { "item": "돼지고기", "prev_year": "3.2", "prev_month": "3.4", "current": "3.3", "unit": "천원/kg", "trend": "🟡" }
  ],
  "beverage": {
    "coffee": { "price": 311.2, "change": 6.9, "unit": "¢/lb", "note": "7/1 급등·4.5개월 최고, 브라질 폭우" },
    "coffeeTrend": [244.4, 253.95, 274, 287.95, 296, 311.2, 305.3],
    "coffeeTrendLabels": ["6/9", "6/17", "6/24", "6/27", "6/30", "7/1", "7/1"],
    "wine": { "note": "수입 와인, 환율 1,550원·운임 반영 단가 상승 압력 확대" }
  },
  "consumables": {
    "items": [
      { "material": "PP (폴리프로필렌)", "trend": "🟡", "note": "유가 하락 vs 환율 상승 상쇄" },
      { "material": "PE (폴리에틸렌)", "trend": "🟡", "note": "원료 하락 기대, 수입 단가는 환율 영향" },
      { "material": "PET", "trend": "🟡", "note": "음료용 수요 성수기" },
      { "material": "면화", "trend": "🟢", "note": "침구·리넨 원가 안정" }
    ]
  },
  "utility": {
    "electricity": { "status": "하반기 동결", "note": "산업용(을) 계시제 개편 4/16 시행" },
    "gas": { "residential": "22.36원/MJ (서울)", "commercial": "업무용 7.05% 인상", "note": "주택용 동결" },
    "oil_cap": { "change": "-150원/L", "note": "7차 석유최고가 인하, 6/27 적용" }
  },
  "geo": {
    "risk": "🔴",
    "headline": "이란, 호르무즈 지정 항로 외 통행 차단 경고 — 오만과 서비스료 공동징수 추진",
    "points": [
      "MOU 60일 무상통항 중이나 이란·오만 '서비스료' 징수 방안 추진, 美 강력 반대",
      "이란 외무부 차관, 지정 항로 미이용 선박 통행 차단 경고",
      "미·이란 도하 협상 재개, 단 통제권·통행료 이견 해소 안 됨",
      "한국 선박 대부분 이탈 완료, 대체 항로·리드타임 +1~2주 리스크 잔존"
    ]
  },
  "top7": [
    { "rank": "01", "status": "🔴", "item": "원/달러 환율", "category": "환율", "factor": "1,550원 돌파·美 금리인상", "outlook": "1,550~1,600 박스", "action": "환헤지 50~60%·결제 일정 분산", "deadline": "7/3", "costImpact": "수입품목 +2~3%" },
    { "rank": "02", "status": "🔴", "item": "해상운임(SCFI)", "category": "물류", "factor": "9주 연속 상승·관세 선적", "outlook": "7월 중순 둔화 가능", "action": "장기계약 재협상·3단 분할", "deadline": "7/15", "costImpact": "물류비 +3~5%" },
    { "rank": "03", "status": "🔴", "item": "아라비카 커피", "category": "F&B", "factor": "브라질 폭우·ICE 재고 최저", "outlook": "단기 변동성 확대", "action": "6개월 선구매·대체 원두", "deadline": "7/3", "costImpact": "F&B +1.5~2%" },
    { "rank": "04", "status": "🔴", "item": "호르무즈 해협", "category": "지정학", "factor": "통행료·항로 통제 분쟁", "outlook": "60일 후 재연 가능", "action": "안전재고·대체 항로 확보", "deadline": "7/11", "costImpact": "리드타임 +1~2주" },
    { "rank": "05", "status": "🟡", "item": "구리", "category": "원자재", "factor": "LME 재고 감소·수요 둔화", "outlook": "고점 부근 조정", "action": "설비 견적 갱신·CAPEX 검토", "deadline": "7/20", "costImpact": "CAPEX +0.5%" },
    { "rank": "06", "status": "🟢", "item": "국제유가", "category": "에너지", "factor": "공급 정상화·과잉 전망", "outlook": "완만한 하락", "action": "에너지 비용 절감 활용", "deadline": "-", "costImpact": "에너지 -0.3%" },
    { "rank": "07", "status": "🟢", "item": "전기·가스요금", "category": "유틸리티", "factor": "정부 하반기 동결", "outlook": "현 수준 유지", "action": "예산 여유 확보", "deadline": "-", "costImpact": "고정비 0%" }
  ],
  "riskMatrix": [
    { "risk": "환율 급등(1,550원+)", "probability": "높음", "impact": "높음", "level": "🔴" },
    { "risk": "운임 급등", "probability": "높음", "impact": "높음", "level": "🔴" },
    { "risk": "호르무즈 재봉쇄", "probability": "중간", "impact": "높음", "level": "🔴" },
    { "risk": "커피 원가 급등", "probability": "높음", "impact": "중간", "level": "🔴" },
    { "risk": "유가 추가 하락", "probability": "중간", "impact": "낮음", "level": "🟢" }
  ],
  "actionPlan": {
    "short": [
      "환율 1,550원 돌파 — 수입 결제 환헤지 50~60% 즉시 실행·분기말 결제 일정 조정",
      "SCFI 급등분 물류비 배부안 사업부 통보 및 거래처 단가 재협상",
      "커피·수입육 핵심 품목 3~6개월 선구매 견적 요청"
    ],
    "mid": [
      "연간 물류 계약 3단 분할(장기·중기·스팟) 및 Incoterms·BAF 조항 갱신",
      "KAMIS 연동 국내 식자재 산지 직계약 확대로 수입 의존도 완화",
      "호르무즈 리스크 대비 F&B·소모품 안전재고 정책 수립"
    ],
    "long": [
      "공급망 다변화 (동남아·국내 대체산지·국산 전환)",
      "GitHub 대시보드 주간 자동화 워크플로우 정기화",
      "환율·원자재 연동 조항 표준화(계약서 템플릿 개정)"
    ]
  },
  "sources": [
    "연합뉴스, 서울외환중개 (환율 7/1)",
    "연합인포맥스, NYMEX (유가 7/1)",
    "상하이해운거래소 SCFI (6/26)",
    "LME, westmetall (원자재 6/26)",
    "KAMIS, 가락시장 (농산물)",
    "ICE NYBOT, Vietnam.vn (커피 7/1)",
    "기재부, 한전, 가스공사 (유틸리티)",
    "연합뉴스, 서울신문, NYT (지정학 6/30~7/1)"
  ],
  "procurementSnapshot": {
    "overallRisk": "🔴",
    "summary": "환율 1,550원 돌파·물류비·커피·지정학 리스크가 동시에 부담. 유가·유틸은 완충 요인이나 수입 의존 품목은 즉시 원가 재산정·환헤지·계약 갱신이 필요한 국면.",
    "kpis": [
      { "label": "수입 의존 품목 비중", "value": "약 62%", "note": "F&B·소모품·설비자재" },
      { "label": "권장 환헤지 비율", "value": "50~60%", "note": "1,550원대 진입 반영" },
      { "label": "물류비 반영 시차", "value": "2~4주", "note": "SCFI→실제 입고단가" },
      { "label": "긴급 조치 필요", "value": "4건", "note": "환율·운임·커피·호르무즈" }
    ]
  },
  "hedgeGuidance": {
    "recommendation": "수입 결제 금액의 50~60% 선물환 헤지 즉시 실행 (기존 40~50%에서 상향)",
    "triggerUp": "원/달러 1,560원 상회 시 → 헤지 70%까지 확대·스팟 결제 최소화",
    "triggerDown": "1,540원 하회 시 → 헤지 40%로 조정·분할결제 비중 확대",
    "notes": [
      "7/1 장중 1,555원 터치 — 변동성 확대 구간 진입",
      "분기말(7월 말) 대량 결제와 환율 고점 겹침 주의",
      "7/6 서울 외환 24시간 거래 개시 — 야간 변동성 대비"
    ]
  },
  "costImpact": [
    { "category": "F&B 식자재", "share": "35%", "impact": "+3.5%", "direction": "up", "driver": "환율·커피·운임", "action": "선구매·뷔페 원가 즉시 재산정" },
    { "category": "소모품·리넨", "share": "18%", "impact": "+2.0%", "direction": "up", "driver": "환율·운임·수입원료", "action": "단가 동결 협상·국산 전환 검토" },
    { "category": "설비·MRO", "share": "22%", "impact": "+1.5%", "direction": "up", "driver": "환율·구리", "action": "CAPEX 견적 갱신·발주 시점 조정" },
    { "category": "에너지·유틸", "share": "15%", "impact": "-0.5%", "direction": "down", "driver": "유가 하락·요금 동결", "action": "예산 여유 활용" },
    { "category": "농산물 국내", "share": "10%", "impact": "±0.3%", "direction": "flat", "driver": "계절·가락시장", "action": "KAMIS 연동 산지계약" }
  ],
  "contractAlerts": [
    { "item": "태평양 해상운송", "vendor": "컨테이너선사 A", "expiry": "2026-08-15", "daysLeft": 45, "status": "🔴", "value": "연간 약 12억", "action": "BAF·FSC 조항 긴급 재협상" },
    { "item": "아라비카 커피 원두", "vendor": "수입상 B", "expiry": "2026-07-31", "daysLeft": 30, "status": "🔴", "value": "분기 3.2억", "action": "6개월 선구매·가격연동 클로징" },
    { "item": "수입 식자재(육류)", "vendor": "수입상 C", "expiry": "2026-07-15", "daysLeft": 14, "status": "🔴", "value": "월 1.8억", "action": "환율 연동·헤지 조항 삽입" },
    { "item": "객실 어메니티", "vendor": "국내 D사", "expiry": "2026-09-30", "daysLeft": 91, "status": "🟡", "value": "연간 4.5억", "action": "환율 반영 단가 협상" }
  ],
  "weeklyDecisions": [
    { "priority": "🔴", "task": "환율 1,550원 돌파 — 수입 결제 환헤지 50~60% 실행 승인", "deadline": "7/2(수)", "owner": "구매팀장", "rationale": "2009년 이후 최고·분기말 결제 집중" },
    { "priority": "🔴", "task": "SCFI 급등분 물류비 배부안 사업부·경리 통보", "deadline": "7/4(금)", "owner": "구매팀", "rationale": "9주 연속 상승, 입고단가 2~4주 내 반영" },
    { "priority": "🔴", "task": "커피 원두 6개월 분 선구매 견적·계약 클로징", "deadline": "7/3(목)", "owner": "F&B구매", "rationale": "311¢/lb·계약 만료 30일 전" },
    { "priority": "🟡", "task": "호르무즈 리스크 대체 항로·안전재고 점검", "deadline": "7/11(금)", "owner": "물류·식자재", "rationale": "통행료·항로 통제 분쟁 지속" },
    { "priority": "🟢", "task": "GitHub 대시보드 팀 북마크 공유·갱신 안내", "deadline": "7/2(수)", "owner": "류숭훈", "rationale": "주간 데이터 7/1 반영 완료" }
  ]
}
