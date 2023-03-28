defmodule GuessingGame do
  @spec compare(Number, any) :: <<_::56, _::_*8>>

  def compare(_, guess \\ :guess)
  def compare(_, guess) when not is_integer(guess), do: "Make a guess"
  def compare(secret_number, secret_number), do: "Correct"

  def compare(secret_number, guess)
      when is_number(guess) and abs(secret_number - guess) == 1,
      do: "So close"

  def compare(secret_number, guess) when is_number(guess) and secret_number < guess,
    do: "Too high"

  def compare(secret_number, guess) when is_number(guess) and secret_number > guess, do: "Too low"
end
