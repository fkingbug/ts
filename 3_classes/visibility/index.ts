class Vehicle {
  public make: string
  //если не писать свойство - то по дефолту будет паьлик

  private damages: string[]
  private _model: string

  protected run: number

  #price: number // # как и private

  set model(m: string) {
    this._model = m
  }

  isPriceEqual(v: Vehicle) {
    return this.#price === v.#price
  }

  get model() {
    return this._model
  }

  addDamage(damage: string) {
    this.damages.push(damage)
  }
}

class EuroTruck extends Vehicle {
  //private поля не видны
  setRun(km: number) {
    this.run = km / 0.62
  }
}

//public - видно всеем
//private - видно внутри главного класса
//protected - видно внутри классов
