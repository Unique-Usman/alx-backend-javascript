export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome () {
    return "Working from home";
  }

  getCoffeeBreak () {
    return "Getting a coffee break";
  }

  workDirectorTasks () {
    return "Getting to director tasks";
  }
}

export class Teacher implements TeacherInterface {
  workFromHome () {
    return "Cannot work from home";
  }

  getCoffeeBreak () {
    return "Cannot have a break";
  }

  workTeacherTasks () {
    return "Getting to work";
  }
}

export function createEmployee (salary: number | string) : Teacher | Director {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

export function isDirector (director: Teacher | Director): boolean {
  return director instanceof Director
}

export function executeWork (director: Teacher | Director) {
  if (isDirector(director)) (director as Director).workDirectorTasks();
  else (director as Teacher).workTeacherTasks();
}

export type Subject = "Math" | "History";

export function teachClass (todayClass: Subject) {
  return `Teaching ${todayClass}`;
}
