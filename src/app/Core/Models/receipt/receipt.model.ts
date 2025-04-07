export interface Test {
  title: string;
  name: string;
  value: string;
}

export interface ReceiptRequest {
  phone_number: string;
  count_code: string;
  first_name: string;
  last_name: string;
  birthday: string;
  gender: string;
  email: string;
  dateTimeReceipt: string;
  infoTokenRec: string;
  insuranceNo: string;
  tests: Test[];
  price: string;
}
