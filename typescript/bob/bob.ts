export function hey(message: string): string {
  const messageTrim = message.trim();

  const isUpperCase = messageTrim.toLocaleUpperCase() === messageTrim;
  const isQuestion = messageTrim.endsWith('?');
  const isLetter = message.match(/[a-zA-Z]/);
  const isEmpty = messageTrim.length === 0;
  const isScream = isLetter && isUpperCase;

  if (isEmpty) {
    return 'Fine. Be that way!';
  }

  if (isScream && isQuestion) {
    return "Calm down, I know what I'm doing!";
  }

  if (isScream) {
    return 'Whoa, chill out!';
  }

  if (isQuestion) {
    return 'Sure.';
  }

  return 'Whatever.';
}
