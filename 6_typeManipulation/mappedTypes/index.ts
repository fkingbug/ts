type Modifier = 'read' | 'update' | 'create'

type UserRoles = {
  customers: Modifier
  projects?: Modifier
  adminPanel?: Modifier
}

//Маппинг тайпов
type ModifierToAccess<Type> = {
  [Property in keyof Type]: boolean
}
// ===
type userAccess1 = {
  customers?: boolean
  projects?: boolean
  adminPanel?: boolean
}

//Все не обязательные
type ModifierToAccessOptional<Type> = {
  [Property in keyof Type]+?: boolean
}
//Все  обязательные
type ModifierToAccessNotOptional<Type> = {
  [Property in keyof Type]-?: boolean
}
//Добавить всем полям readonly
type ModifierToAccessReadOnly<Type> = {
  +readonly [Property in keyof Type]: boolean
}
//Переименовать К нозванию полей добавляется 'canAccess'
type ModifierRenameAccess<Type> = {
  +readonly [Property in keyof Type as `canAccess${string & Property}`]: boolean
}
type ModifireExcludeAcceess<Type> = {
  +readonly [Property in keyof Type as Exclude<
    `canAccess${string & Property}`,
    'canAccessadminPanel'
  >]: boolean
}
type UserAccess2 = ModifireExcludeAcceess<UserRoles>

//----
