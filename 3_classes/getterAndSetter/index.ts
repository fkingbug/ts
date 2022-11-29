enum PaymentStatus {
  Holded,
  Processed,
  Reversed,
}

class Payment {
  id: number
  status: PaymentStatus = PaymentStatus.Holded
  createAt: Date = new Date()
  updateAt: Date
  constructor(id: number) {
    this.id = id
  }
}
