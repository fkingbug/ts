const skills: string[] = ['Dev', 'DevOps', 'Testing']

for (const skill of skills) {
  console.log(skill.toLowerCase())
}

skills
  .filter((e: string) => e !== 'DevOps')
  .map(s => {
    return 1
  })
  .reduce((a, b) => a + b)
