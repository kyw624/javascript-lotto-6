import { Console } from '@woowacourse/mission-utils';

const MESSAGES = {
  INPUT_AMOUNT: '구입금액을 입력해 주세요.',
  INPUT_WINNING_NUMBERS: '\n당첨 번호를 입력해 주세요.',
  INPUT_BONUS_NUMBER: '\n보너스 번호를 입력해 주세요.',

  OUTPUT_BUY_TICKETS: (num) => `\n${num}개를 구매했습니다.`,
  OUTPUT_RESULT: (winningInfo, totalReturn) => `
  당첨 통계
  ---
  3개 일치 (5,000원) - ${winningInfo.count}개
  4개 일치 (50,000원) - ${winningInfo.count}개
  5개 일치 (1,500,000원) - ${winningInfo.count}개
  5개 일치, 보너스 볼 일치 (30,000,000원) - ${winningInfo.count}개
  6개 일치 (2,000,000,000원) - ${winningInfo.count}개
  총 수익률은 ${totalReturn}%입니다.`,
};

class App {
  async play() {}
}

export default App;
