export default function daysRemainingMessage(days: number) {
  if (days === 0) {
    return "Hoje é o quinto dia útil do mês!";
  } else if (days === 1) {
    return "Amanhã é o próximo quinto dia útil do mês!";
  } else {
    return `Faltam ${days} dias até o próximo quinto dia útil.`;
  }
}
