import { render } from "@testing-library/svelte";
import Button from "./Button.svelte";

const comp = <Button>ABCD</Button>;

console.log(comp);

render(comp);
