defmodule GuessingGame do
  @spec compare(Number, Number) :: <<_::56, _::_*8>>
  def compare(secret_number, guess) do
    case {secret_number, guess} do
      {secret_number, guess} when is_number(guess) ->
        cond do
          secret_number == guess -> "Correct"
          secret_number + 1 == guess -> "So close"
          secret_number - 1 == guess -> "So close"
          secret_number < guess -> "Too high"
          secret_number > guess -> "Too low"
          true -> "Make a guess"
        end

      {_, _} ->
        "Make a guess"
    end
  end

  def compare(_) do
    "Make a guess"
  end
end
