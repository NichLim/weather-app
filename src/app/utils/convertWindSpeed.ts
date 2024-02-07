export function convertWindSpeed(speedInMetersperSecond: number): string{
  const speedInKilometersPerHour = speedInMetersperSecond * 3.6;
  return `${speedInKilometersPerHour.toFixed(0)}km/h`; //Round to 0 decimal places and add unit
}