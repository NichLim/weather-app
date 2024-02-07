export function metersToKilometers(visibilityInMeters: number): string {
  const visibilityinKilometers = visibilityInMeters / 1000;
  return `${visibilityinKilometers.toFixed(0)}km`; //Round to 0 decimal places and add unit
}
