export class DnDCharacter {
    hitpoints: number;
    constitution: number;
    strength: number;
    dexterity: number;
    intelligence: number;
    wisdom: number;
    charisma: number;

    constructor() {
        this.constitution = DnDCharacter.generateAbilityScore();
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
    }

    public static generateAbilityScore(): number {
        const getRandom = (): number => (Math.floor(Math.random() * 6) + 1);
        const num1 = getRandom();
        const num2 = getRandom();
        const num3 = getRandom();
        const num4 = getRandom();
        const minNum = Math.min(num1, num2, num3, num4);
        return num1 + num2 + num3 + num4 - minNum;
    }

    public static getModifierFor(abilityValue: number): number {
        return Math.floor((abilityValue - 10) / 2);
    }
}
