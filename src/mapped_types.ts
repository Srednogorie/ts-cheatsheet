// Mapped types
type Properties = 'PropA' | 'PropB';
type MyMappedType = {
    // [P in Properties]: boolean;
    [P in Properties]: P;
}

// Conditional types
type SomeType = string;
type MyConditionalType = SomeType extends string ? string : null;
