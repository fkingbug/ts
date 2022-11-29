abstract class Controller {
  abstract handle(req: any): void
}
//abstract перед class запрещает делать его инстанс new Controller()
//но можно делать инстанс от тех классов которые экстендятся от абстрактного
//абстрактные методы наоборот требуют реализовать их в наследуемых классах
//абстрактные методы не могут быть не в абстрактном классе

class UserController extends Controller {
  handle(req: any): void {
    console.log(req)
  }
}

new UserController()

//---
//не абстрактные классы  наследуются

abstract class ControllerTwo {
  abstract handle(req: any): void

  handleWithLogs(req: any) {
    console.log('start')
    this.handle(req)
    console.log('end')
  }
}

class UserControllerTwo extends ControllerTwo {
  handle(req: any): void {
    console.log(req)
  }
}

const c = new UserControllerTwo()
c.handleWithLogs('req')
