class ResistorColor {
  ResistorColor() {}

  static const COLORS = <String>[
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
  ];

  List<String> get colors => COLORS;

  int colorCode(String s) {
    final index = COLORS.indexOf(s);
    return index;
  }
}
