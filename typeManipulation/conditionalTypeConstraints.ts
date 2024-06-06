type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
    message: string
}

interface Dog {
    bark(): void;
}

type EmailMessageContents = MessageOf<Email>

type DogMessageContents = MessageOf<Dog>

type Flatten<T> = T extends any[] ? T[number] : T;

type Str = Flatten<string[]>

type Num = Flatten<number>
