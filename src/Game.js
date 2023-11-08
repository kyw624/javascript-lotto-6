import { Random, Console } from '@woowacourse/mission-utils';

import App from './App.js';
import Lotto from './Lotto.js';
import { MESSAGES, RANK, REWARDS, TICKET_PRICE } from './util/constants.js';

class Game {
  constructor(amount) {
    this.amount = amount;
    this.tickets = [];
    this.drawInfo = {
      [RANK[5]]: { winningCount: 0, reward: REWARDS[5], matchCount: 3 },
      [RANK[4]]: { winningCount: 0, reward: REWARDS[4], matchCount: 4 },
      [RANK[3]]: { winningCount: 0, reward: REWARDS[3], matchCount: 5 },
      [RANK[2]]: { winningCount: 0, reward: REWARDS[2], matchCount: 5 },
      [RANK[1]]: { winningCount: 0, reward: REWARDS[1], matchCount: 6 },
    };
  }

  getLottoTickets() {
    const ticketNum = this.amount / TICKET_PRICE;

    for (let i = 0; i < ticketNum; i++) {
      const randomNumbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      const ticket = new Lotto(randomNumbers);

      this.tickets.push(ticket);
    }
  }

  draw({ winningNumbers, bonusNumber }) {
    this.tickets.forEach((ticket) => {
      const result = ticket.getWinningInfo(winningNumbers, bonusNumber);

      if (result.matchCount >= 3) {
        this.recordResult(result);
      }
    });
  }

  recordResult(drawResult) {
    const rank = this.getRank(drawResult);
    this.drawInfo[rank].winningCount += 1;
  }

  printTickets() {
    Console.print(MESSAGES.OUTPUT_BUY_TICKETS(this.amount / TICKET_PRICE));
    this.tickets.forEach((ticket) => Console.print(ticket.info));
  }

  getRank(drawResult) {
    const { matchCount, isBonusMatched } = drawResult;

    switch (matchCount) {
      case 6:
        return RANK[1];

      case 5:
        if (isBonusMatched) {
          return RANK[2];
        }

        return RANK[3];

      case 4:
        return RANK[4];

      case 3:
        return RANK[5];
    }
  }

  getReturn() {
    let totalReturn = 0;

    for (const { winningCount, reward } of Object.values(this.drawInfo)) {
      totalReturn += Number(winningCount * reward);
    }

    return totalReturn;
  }
}

export default Game;
