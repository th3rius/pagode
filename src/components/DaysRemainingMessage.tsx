export interface DaysRemainingMessageProps {
  days: number;
}

export default function DaysRemainingMessage({
  days,
}: DaysRemainingMessageProps) {
  if (days === 0) {
    return (
      <>
        <strong>Hoje</strong> é o quinto dia útil do mês!
      </>
    );
  } else if (days === 1) {
    return (
      <>
        <strong>Amanhã</strong> é o próximo quinto dia útil do mês!
      </>
    );
  } else {
    return (
      <>
        Faltam <strong>{days} dias</strong> até o próximo quinto dia útil.
      </>
    );
  }
}
