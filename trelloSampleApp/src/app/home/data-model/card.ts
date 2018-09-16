export class Card {

    constructor(
        public cardName: string,
        public id: string,
        public description: string,
        public link: Array<String>,
        public label: Array<String>,
        public selected:boolean
    ) { }

}