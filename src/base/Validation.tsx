import * as Yup from "yup"
import { nameRegex, passwordRegex } from "src/base/AppConstants"
import english from "src/translate/english"

export const AddAccountFieldsSchema = () =>
  Yup.object().shape({
    bankAccountHolderName: Yup.string()
      .trim()
      .required(english.VALIDATIONS.enter_acc_holder_name)
      .matches(nameRegex, english.VALIDATIONS.INVALID_ACCHOLDER)
      .min(3, english.VALIDATIONS.valid_acc_holder),

   
  })

  