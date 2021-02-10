class Transcriptor {
  toRna(dna: string): string {
    const dnaDict: Record<string, string> = {
      G: 'C',
      C: 'G',
      T: 'A',
      A: 'U',
    };
    const rnaArr = [...dna].map((elem) => {
      const dnaToRna = dnaDict[elem];
      if (!dnaToRna) {
        throw 'Invalid input DNA.';
      }
      return dnaToRna;
    });
    const rna = rnaArr.join('');
    return rna;
  }
}

export default Transcriptor;
