interface IPayment {
  sum: number
  from: number
  to: number
}
enum PaymentStatus {
  SUCCESS = 'succeess',
  FAILED = 'failed',
}
interface IPaymentRequest extends IPayment {}

interface IDataSucceess extends IPayment {
  dataBaseId: number
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

type f = (res: IResponseSucces | IResponseFailed) => number

type Res = IResponseSucces | IResponseFailed

function isSuccess(res: Res): res is IResponseSucces {
  return res.status === PaymentStatus.SUCCESS
}

function getIdFromData(res: Res): number {
  if (isSuccess(res)) {
    return res.data.dataBaseId
  } else {
    throw new Error(res.data.errorMessage)
  }
}
