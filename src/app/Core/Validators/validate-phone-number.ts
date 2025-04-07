import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ValidatePhoneNumber {
  /**
   * Custom validator to check if the phone number matches the correct pattern.
   * @param control - The form control containing the phone number.
   * @param detectedCountry - The country object containing phone validation regex.
   * @returns A validation error object if invalid, or `null` if valid.
   */
  static syncPatternValidator(
    control: AbstractControl,
    detectedCountry: { phoneRegex?: string } | null
  ): ValidationErrors | null {
    // Return null if no validation is needed
    if (!control.value || !detectedCountry?.phoneRegex) return null;

    // Test the value against the regex
    return new RegExp(detectedCountry.phoneRegex).test(control.value)
      ? null
      : { invalidPattern: true };
  }
}
