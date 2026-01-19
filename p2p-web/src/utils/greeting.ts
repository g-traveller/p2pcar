/**
 * Get time-based greeting in Chinese
 */
export function getGreeting(): string {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return '上午好';
  } else if (hour >= 12 && hour < 14) {
    return '中午好';
  } else if (hour >= 14 && hour < 18) {
    return '下午好';
  } else if (hour >= 18 && hour < 22) {
    return '晚上好';
  } else {
    return '夜深了';
  }
}
