# `matchbook`
#### Pattern Matching in Typescript, with **_zero_** boilerplate & **_zero_** dependencies.

---

### What is Pattern Matching?
Pattern matching is a feature of many modern languages that lets you
act on a value that may be many different types or states.

### What Problems does `matchbook` solve?
`matchbook` is intended to be a versatile low-cost replacement for nested
`if-else` blocks and `switch` statements.

<details>
<summary>Click to expand</summary>
<blockquote>

For a very simple example, let's suppose you wanted to have a function
that accepts an `Animal` and returns what kind of noise that animal makes.

<details>
<summary>
A naive implementation in `rust`, a language with a native pattern matching operator (Click to expand)
</summary>

```rust
enum Animal {
    Dog,
    Cat,
    Turtle,
}

fn get_noise(animal: Animal) -> &str {
    match animal {
        Animal::Dog => "woof woof!",
        Animal::Cat => "meow!",
        _ => "...",
    }
}

pub fn main() {
    get_noise(Animal::Dog); // -> "woof woof!"
    get_noise(Animal::Cat); // -> "meow!"
    get_noise(Animal::Turtle); // -> "..."
}
```
</details>

<details>
<summary>
The same example in `typescript` using switch / case statements (Click to expand)
</summary>

```typescript
enum Animal {
    Dog,
    Cat,
    Turtle,
}

function getNoise(animal: Animal): string {
    switch (animal) {
        case Animal.Dog:
            return 'woof, woof!';
        case Animal.Cat:
            return 'meow!';
        default:
            return '...';
    }
}

export function main(): void {
    getNoise(Animal.Dog); // -> "woof, woof!"
    getNoise(Animal.Cat); // -> "meow!"
    getNoise(Animal.Turtle); // -> "..."
}
```
</details>

Note that this is not that different than the rust example. At worst, our formatter will make us
separate our `test` from our `action` onto 2 separate lines.

<details>
<summary>
What if we wanted to store information about each animal
in different types?
(Click to expand)
</summary>

```typescript
enum DogBreed { Beagle, GermanShepherd, /* lots more */ }
enum CatFood { Wet, Dry }
enum AnimalType { Cat, Dog, Turtle }

interface Animal {
    animalType: AnimalType;
}

interface Dog extends Animal {
    animalType: AnimalType.Dog;
    breed: DogBreed;
}

interface Cat extends Animal {
    animalType: AnimalType.Cat;
    prefersFood: CatFood;
}

function getNoise(animal: Animal) {
    if (animal.animalType === AnimalType.Dog) {
        return 'woof woof!';
    } else if (animal.animalType === AnimalType.Cat) {
        return 'meow!';
    } else {
        return '...';
    }
}
```
</details>

Let's say we just got some new requirements, too. Our `getNoise` function needs to:
- `'bark'` if `animal` is a `Dog` of `breed` `DogBreed#GermanShepherd`
- `'woof'` if `animal` is a `Dog` of `breed` `DogBreed#Beagle`

<details>
<summary>
Supposing our `getNoise` function is still relevant, what happens to its implementation?
(Click to expand)
</summary>

```typescript
// this is getting bloated!

function getNoise(animal: Animal) {
    if (animal.animalType === AnimalType.Dog) {
        if (animal.breed === DogBreed.GermanShepherd) {
            return 'bark!';
        } else if (animal.breed === DogBreed.Beagle) {
            return 'woof!';
        } else {
            return 'woof woof!';
        }
    } else if (animal.animalType === AnimalType.Cat) {
        return 'meow!';
    } else {
        return '...';
    }
}

// ...
```
</details>

<details>
<summary>
This function is pretty bloated, but
we can manage it if we refactor it like so:
(Click to expand)
</summary>

```typescript
// is this return type syntax new to you?
// if so, check out this link:
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
function animalIsDog(animal: Animal): animal is Dog;
function animalIsCat(animal: Animal): animal is Cat;

function getDogNoise(dog: Dog): string {
    if (dog.breed === DogBreed.GermanShepherd) {
        return 'bark!';
    } else if (dog.breed === DogBreed.Beagle) {
        return 'woof!';
    } else {
        return 'woof woof!';
    }
}

// much better! could still be a little more concise though...
function getNoise(animal: Animal) {
    if (animalIsDog(animal)) {
        return getDogNoise(animal);
    } else if (animalIsCat(animal)) {
        return 'meow!';
    } else {
        return '...';
    }
}
```
</details>

<details>
<summary>
This is better! Although that very succinct rust `match` operator
would be really nice. This is where `matchbook` comes in!
(Click to expand)
</summary>

```typescript
import match from 'matchbook';
import { Dog, DogBreed } from './models';
import { animalIsDog, animalIsCat, dogIsBreed } from './type-guards';

function getDogNoise(dog: Dog): string {
    // example of partially applying match
    const book = match.book([
        [d => dogIsBreed(d, DogBreed.GermanShepherd), 'bark!'],
        [d => dogIsBreed(d, DogBreed.Beagle), 'woof!'],
        [match.default, 'woof!'],
    ]);

    return match.for(dog).strike(book);
}

function getNoise(animal: Animal) {
    return match.strike(animal, [
        [animalIsDog, getDogNoise],
        [animalIsCat, 'meow!'],
        [match.default, '...'],
    ]);
}
```
</details>
</blockquote>
</details>

### Usage Examples

<details>
<summary>Dealing with discriminants (Click to expand)</summary>

```typescript
import match from 'matchbook';

type GithubEvent = GithubPullRequestOpenedEvent | GithubPullRequestClosedEvent;

interface GithubPullRequestOpenedEvent {
    eventType: 'pull_request_opened';
}

interface GithubPullRequestClosedEvent {
    eventType: 'pull_request_closed';
}

function runChecks(event: GithubPullRequestOpenedEvent): void;
function deleteSourceBranch(event: GithubPullRequestClosedEvent): void;

export function handleGithubEvent(event: GithubEvent): void {
    match.strike(event, [
        [e => e.eventType === 'pull_request_opened', runChecks],
        [e => e.eventType === 'pull_request_closed', deleteSourceBranch],
    ]);
}
```
</details>

<details>
<summary>Switch on constructor type (Click to expand)</summary>

```typescript
import match from 'matchbook';

class Good { /* ... */ }
function computationThatMayFail(): Error | Good;
function handleError(e: Error): void;
function handleGood(e: Good): void;

export function doStuff(): void {
    const result = computationThatMayFail();

    match.strike(result, [
        [r => r instanceof Error, handleError], // [1]
        [Good, handleGood], // [2]
    ]);
}

// [1]  in our tester slot, we check if result is an
//      instance of the Error constructor

// [2]  we can optionally just pass the constructor
//      into our tester slot and matchbook will
//      know to check using the instanceof operator.
```
</details>

### API
Coming soon - `typedoc`