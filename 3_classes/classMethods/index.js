"use strict";
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Holded"] = 0] = "Holded";
    PaymentStatus[PaymentStatus["Processed"] = 1] = "Processed";
    PaymentStatus[PaymentStatus["Reversed"] = 2] = "Reversed";
})(PaymentStatus || (PaymentStatus = {}));
class Payment {
    constructor(id) {
        this.status = PaymentStatus.Holded;
        this.createAt = new Date();
        this.id = id;
    }
    getPaymentLifeTime() {
        return new Date().getTime() - this.createAt.getTime();
    }
    unholdPayment() {
        if (this.status === PaymentStatus.Processed) {
            throw new Error('bad payment');
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}
const payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
const time = payment.getPaymentLifeTime();
console.log(payment);
//--
//default values
// enum PaymentStatus {
//   Holded,
//   Processed,
//   Reversed,
// }
// class Payment {
//   id: number
//   status: PaymentStatus
//   createAt: Date
//   updatedAt: Date
//   constructor(id: number) {
//     this.id = id
//     this.createAt = new Date()
//     this.status = PaymentStatus.Holded
//   }
//   getPaymentLifeTime(): number {
//     return new Date().getTime() - this.createAt.getTime()
//   }
//   unholdPayment() {
//     if (this.status === PaymentStatus.Processed) {
//       throw new Error('bad payment')
//     }
//     this.status = PaymentStatus.Reversed
//     this.updatedAt = new Date()
//   }
// }
// const payment = new Payment(1)
// payment.unholdPayment()
// console.log(payment)
// const time = payment.getPaymentLifeTime()
// console.log(payment)
