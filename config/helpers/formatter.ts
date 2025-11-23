export class Formatter {
  public static currency(value: number): string {
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
    return `$${value.toFixed(2)}`;
  }
}
