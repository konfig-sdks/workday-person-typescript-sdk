/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CountryPhoneCodeDb1991f2fb091000169c5e0cb7c200b9 } from './country-phone-code-db1991f2fb091000169c5e0cb7c200b9';
import { DeviceTypeDb1991f2fb091000169c5e28fc0400bb } from './device-type-db1991f2fb091000169c5e28fc0400bb';
import { PhoneNumberValidationDb1991f2fb091000169c5dfa023800b8AllOf } from './phone-number-validation-db1991f2fb091000169c5dfa023800b8-all-of';

/**
 * 
 * @export
 * @interface PhoneNumberValidationDb1991f2fb091000169c5dfa023800b8
 */
export interface PhoneNumberValidationDb1991f2fb091000169c5dfa023800b8 {
    /**
     * 
     * @type {DeviceTypeDb1991f2fb091000169c5e28fc0400bb}
     * @memberof PhoneNumberValidationDb1991f2fb091000169c5dfa023800b8
     */
    'deviceType'?: DeviceTypeDb1991f2fb091000169c5e28fc0400bb;
    /**
     * The complete phone number.
     * @type {string}
     * @memberof PhoneNumberValidationDb1991f2fb091000169c5dfa023800b8
     */
    'completePhoneNumber'?: string;
    /**
     * 
     * @type {CountryPhoneCodeDb1991f2fb091000169c5e0cb7c200b9}
     * @memberof PhoneNumberValidationDb1991f2fb091000169c5dfa023800b8
     */
    'countryPhoneCode'?: CountryPhoneCodeDb1991f2fb091000169c5e0cb7c200b9;
}

