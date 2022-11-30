class Resp<D, E> {
  data?: D
  error?: E
  constructor(data?: D, error?: E) {
    if (data) {
      this.data = data
    }
    if (error) {
      this.error = error
    }
  }
}
const res = new Resp<string, number>('data', 404)
const res2 = new Resp('data')
//Resp<string, unknown>(data?: string | undefined, error?: unknown): Resp<string, unknown>

//class HTTPResp extends class Resp<D, E>  error нужно явно указывать типы
class HTTPResp extends Resp<string, number> {
  code: number
  setcode(code: number) {
    this.code = code
  }
}
class HTTPResp2<F> extends Resp<string, number> {
  code: F
  setcode(code: F) {
    this.code = code
  }
}
