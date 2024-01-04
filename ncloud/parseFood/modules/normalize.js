function normalize(place, menus) {
  return {
    lunch: [
      { place, week: '월', time: '중식', category: '백반', menus: menus[0] },
      { place, week: '화', time: '중식', category: '백반', menus: menus[1] },
      { place, week: '수', time: '중식', category: '백반', menus: menus[2] },
      { place, week: '목', time: '중식', category: '백반', menus: menus[3] },
      { place, week: '금', time: '중식', category: '백반', menus: menus[4] },
    ],
    dinner: [
      { place, week: '월', time: '석식', category: '백반', menus: menus[5] },
      { place, week: '화', time: '석식', category: '백반', menus: menus[6] },
      { place, week: '수', time: '석식', category: '백반', menus: menus[7] },
      { place, week: '목', time: '석식', category: '백반', menus: menus[8] },
      { place, week: '금', time: '석식', category: '백반', menus: menus[9] },
    ],
  }
};

function normalizeHu(place = '후생관', menus) {
  return {
    breakfast: [
      { place, week: '월', time: '조식', category: '찌개 백반', menus: menus[0] },
      { place, week: '화', time: '조식', category: '찌개 백반', menus: menus[1] },
      { place, week: '수', time: '조식', category: '찌개 백반', menus: menus[2] },
      { place, week: '목', time: '조식', category: '찌개 백반', menus: menus[3] },
      { place, week: '금', time: '조식', category: '찌개 백반', menus: menus[4] },
    ],
    lunch: [
      { place, week: '월', time: '중식', category: '찌개', menus: menus[5] },
      { place, week: '월', time: '중식', category: '돌솥', menus: menus[10] },
      { place, week: '월', time: '중식', category: '특식', menus: menus[15] },
      // { place, week: '월', time: '중식', category: '도시락', menus: menus[20] },
      // { place, week: '월', time: '중식', category: '덮밥 비빔밥', menus: menus[25].split('/').join('\n') },
      { place, week: '월', time: '중식', category: '샐러드', menus: menus[30] },
      // { place, week: '월', time: '중식', category: '돈까스', menus: menus[35] },
      { place, week: '월', time: '중식', category: '오므라이스', menus: menus[36]+'\n'+menus[37] },

      // 화
      { place, week: '화', time: '중식', category: '찌개', menus: menus[6] },
      { place, week: '화', time: '중식', category: '돌솥', menus: menus[11] },
      { place, week: '화', time: '중식', category: '특식', menus: menus[16] },
      // { place, week: '화', time: '중식', category: '도시락', menus: menus[21] },
      // { place, week: '화', time: '중식', category: '덮밥 비빔밥', menus: menus[26].split('/').join('\n') },
      { place, week: '화', time: '중식', category: '샐러드', menus: menus[31] },
      // { place, week: '월', time: '중식', category: '돈까스', menus: menus[35] },
      { place, week: '화', time: '중식', category: '오므라이스', menus: menus[36]+'\n'+menus[38] },

      // 수
      { place, week: '수', time: '중식', category: '찌개', menus: menus[7] },
      { place, week: '수', time: '중식', category: '돌솥', menus: menus[12] },
      { place, week: '수', time: '중식', category: '특식', menus: menus[17] },
      // { place, week: '수', time: '중식', category: '도시락', menus: menus[22] },
      // { place, week: '수', time: '중식', category: '덮밥 비빔밥', menus: menus[27].split('/').join('\n') },
      { place, week: '수', time: '중식', category: '샐러드', menus: menus[32] },
      // { place, week: '월', time: '중식', category: '돈까스', menus: menus[35] },
      { place, week: '수', time: '중식', category: '오므라이스', menus: menus[36]+'\n'+menus[39] },

      // 목 
      { place, week: '목', time: '중식', category: '찌개', menus: menus[8] },
      { place, week: '목', time: '중식', category: '돌솥', menus: menus[13] },
      { place, week: '목', time: '중식', category: '특식', menus: menus[18] },
      // { place, week: '목', time: '중식', category: '도시락', menus: menus[23] },
      // { place, week: '목', time: '중식', category: '덮밥 비빔밥', menus: menus[28].split('/').join('\n') },
      { place, week: '목', time: '중식', category: '샐러드', menus: menus[33] },
      // { place, week: '월', time: '중식', category: '돈까스', menus: menus[35] },
      { place, week: '금', time: '중식', category: '오므라이스', menus: menus[36]+'\n'+menus[40] },

      // 금
      { place, week: '금', time: '중식', category: '찌개', menus: menus[9] },
      { place, week: '금', time: '중식', category: '돌솥', menus: menus[14] },
      { place, week: '금', time: '중식', category: '특식', menus: menus[19] },
      // { place, week: '금', time: '중식', category: '도시락', menus: menus[24] },
      // { place, week: '금', time: '중식', category: '덮밥 비빔밥', menus: menus[29].split('/').join('\n') },
      { place, week: '금', time: '중식', category: '샐러드', menus: menus[34] },
      // { place, week: '월', time: '중식', category: '돈까스', menus: menus[35] },
      { place, week: '금', time: '중식', category: '오므라이스', menus: menus[36]+'\n'+menus[41] },
    ],
    dinner: [
      { place, week: '월', time: '석식', category: '백반', menus: menus[20] },
      { place, week: '화', time: '석식', category: '백반', menus: menus[21] },
      { place, week: '수', time: '석식', category: '백반', menus: menus[22] },
      { place, week: '목', time: '석식', category: '백반', menus: menus[23] },
      { place, week: '금', time: '석식', category: '백반', menus: menus[24] },
    ]
  }
}

module.exports = {
  normalize,
  normalizeHu
}