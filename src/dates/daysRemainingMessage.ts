export default function daysRemainingMessage(days: number) {
  if (days === 0) {
    return "Hoje é o quinto dia útil do mês!";
  } else if (days === 0) {
    return "O próximo quinto dia útil do mês é amanhã!";
  } else {
    return `Faltam ${days} dias até o próximo quinto dia útil.`;
  }
}
