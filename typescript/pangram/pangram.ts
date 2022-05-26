export function isPangram(str: string): boolean {
    const set = new Set();
    const lettersReg = /^[A-Za-z]+$/;
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase();
        if(lettersReg.test(char)) {
            set.add(char);
        }
    }
    const countLetter =  set.size;
    const alphabetSize = 26;
    return countLetter === alphabetSize;
}
