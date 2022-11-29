class User {
  skills: string[]
  //Перегрузка
  addSkill(skill: string): void
  addSkill(skills: string[]): void
  addSkill(skillOrSkills: string | string[]): void {
    if (typeof skillOrSkills === 'string') {
      this.skills.push(skillOrSkills)
    } else {
      this.skills.concat(skillOrSkills)
    }
  }
}

//--
// Примеры перегрузки

function run1(distance: string): void
function run1(distance: number): void
function run1(distance: number | string): void {}

//-- Еще примеры
function run(distance: string): string
function run(distance: number): number
function run(distance: number | string): string | number {
  if (typeof distance === 'number') {
    return 1
  } else {
    return '1'
  }
}
