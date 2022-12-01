type ReadOrWrite = 'read' | 'write'

type Access = `can${ReadOrWrite}` //"canread" | "canwrite"
type UppercaseReadOrWrite = `can${Uppercase<ReadOrWrite>}` //"canREAD" | "canWRITE"
type CapitalizeReadOrWrite = `can${Capitalize<ReadOrWrite>}` //"canRead" | "canWrite"

//--
//+Bulk
type Bulk = 'bulk' | ''
type BulkReadOrWrite = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}` //"canRead" | "canWrite" | "canReadBulk" | "canWriteBulk"

type ErrorOrSuccess = 'error' | 'success'

type ResponseT = {
  result: `http${Capitalize<ErrorOrSuccess>}`
}
const a: ResponseT = {
  result: 'httpSuccess', // httpsuccess | httperror
}

//-----
//Убрать  приставки

type ReadOrWriteNotCan<T> = T extends `can${infer R}` ? R : never
//то что после can если есть то выносим иначе ничего

type TTT = ReadOrWriteNotCan<BulkReadOrWrite> //"Read" | "Write" | "ReadBulk" | "WriteBulk"
