/** @format */

export function getDayOrNightIcon(
  iconName: string,
  dateTimeString: string
): string {
  const hours = new Date(dateTimeString).getHours(); //get Hours from the given date and time

  const isDayTime = hours >= 6 && hours < 18; //day is from 6am to 6pm

  return isDayTime ? iconName.replace(/.$/, "d") : iconName.replace(/.$/, "n");
}
