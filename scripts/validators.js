const rules = {
    description: /^\S(?:.*\S)?$/,
    amount: /^(0|[1-9]\d*)(\.\d{1,2})?$/,
    date: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
    category: /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/

};

export function validate(field,value) {
if (!rules[field].test(value)) return "Invalid" + field;
if (field == "description" && /\b(\w+)\s+\1\b/i.test(value)) return "Repeated word"; return "";

}