-module(raindrops).

-export([convert/1]).

convert(Number) -> convert(Number, "", 3).

convert(Number, Str, 3) ->
  if
    Number rem 3 == 0 -> convert(Number, Str ++ "Pling", 5);
    true -> convert(Number, Str, 5)
  end;

convert(Number, Str, 5) ->
  if
    Number rem 5 == 0 -> convert(Number, Str ++ "Plang", 7);
    true -> convert(Number, Str, 7)
  end;

convert(Number, Str, 7) ->
  if
    Number rem 7 == 0 -> convert(Number, Str ++ "Plong", 0);
    true -> convert(Number, Str, 0)
  end;

convert(Number, Str, 0) ->
  if
    length(Str) == 0 -> integer_to_list(Number);
    true -> Str
  end.
