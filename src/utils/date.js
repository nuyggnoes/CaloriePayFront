export const getStartAndEndOfWeek = () => {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 (일요일)부터 6 (토요일)까지의 값
  const diffToMonday = now.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // 일요일인 경우 한 주 전 월요일로 이동

  const start = new Date(now.setDate(diffToMonday));
  const end = new Date(now.setDate(start.getDate() + 6)); // 월요일부터 6일 후 일요일

  const formatDate = (date) => date.toISOString().split('T')[0]; // YYYY-MM-DD 형식으로 변환

  return {
    start: formatDate(start),
    end: formatDate(end),
  };
};
