import { StringValidator } from "../string-validator";

export abstract class RegexValidator extends StringValidator {
    regexp: RegExp = new RegExp('');
    constructor(data: any) {
        super(data);
    }

    get regex() {
        return this.regexp;
    }
}