import { addAvailabilty } from "./js/available";

@addAvailabilty(true)
class Course{ available: boolean = false }

console.log(new Course());