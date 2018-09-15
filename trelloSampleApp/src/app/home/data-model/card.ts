export class Card {

    constructor(
        public cardName: string,
        public id: number,
        public description: string,
        public link: Array<String>,
        public label: Array<String>
    ) { }

}