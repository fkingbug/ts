interface IPayment {
  sum: number
  from: number
  to: number
}
enum PaymentStatus {
  SUCCESS = 'succeess',
  FAILED = 'failed',
}
interface IPaymentReqest extends IPayment {}

interface IDataSucceess extends IPayment {
  databaseId: number
}
interface IDataFailed {
  errorMessage: string
  errorCode: number
}

interface IResponseSucces {
  status: PaymentStatus.SUCCESS
  data: IDataSucceess
}
interface IResponseFailed {
  status: PaymentStatus.FAILED
  data: IDataFailed
}
