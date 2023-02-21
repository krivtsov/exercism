defmodule FreelancerRates do
  @spec daily_rate(number) :: float
  def daily_rate(hourly_rate) do
    hourly_rate * 8 * 1.0
  end

  @spec apply_discount(number, number) :: float
  def apply_discount(before_discount, discount) do
    before_discount * (100 - discount) / 100
  end

  @spec monthly_rate(number, number) :: integer
  def monthly_rate(hourly_rate, discount) do
    hourly_rate * 22
    |> daily_rate
    |> apply_discount(discount)
    |> Float.ceil()
    |> trunc
  end

  @spec days_in_budget(number, number, number) :: float
  def days_in_budget(budget, hourly_rate, discount) do
    (budget / (hourly_rate |> daily_rate |> apply_discount(discount)))
    |> Float.floor(1)
  end
end
