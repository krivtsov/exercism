defmodule LanguageList do
  @spec new :: []
  def new() do
    []
  end

  @spec add(nonempty_maybe_improper_list, any) :: nonempty_maybe_improper_list
  def add(list, language) do
    [language | list]
  end

  @spec remove(nonempty_maybe_improper_list) :: any
  def remove([_ | t]) do
    t
  end

  @spec first(nonempty_maybe_improper_list) :: any
  def first([h | _]) do
    h
  end

  @spec count(list) :: non_neg_integer
  def count(list) do
    length list
  end

  @spec functional_list?(any) :: boolean
  def functional_list?(list) do
    "Elixir" in list
  end
end
