/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CountryAb827579ee1710001caa7c36228c0153 } from './country-ab827579ee1710001caa7c36228c0153';
import { CountryPhoneCodeAb827579ee1710001caa7c12047d0152 } from './country-phone-code-ab827579ee1710001caa7c12047d0152';

/**
 * \\~Country\\~ Phone Code
 * @export
 * @interface CountryPhoneCodeDb1991f2fb091000169c5e0cb7c200b9
 */
export interface CountryPhoneCodeDb1991f2fb091000169c5e0cb7c200b9 {
    /**
     * The phone code for a country.
     * @type {string}
     * @memberof CountryPhoneCodeDb1991f2fb091000169c5e0cb7c200b9
     */
    'countryPhoneCode'?: string;
    /**
     * 
     * @type {CountryAb827579ee1710001caa7c36228c0153}
     * @memberof CountryPhoneCodeDb1991f2fb091000169c5e0cb7c200b9
     */
    'country'?: CountryAb827579ee1710001caa7c36228c0153;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof CountryPhoneCodeDb1991f2fb091000169c5e0cb7c200b9
     */
    'descriptor'?: string;
    /**
     * Id of the instance
     * @type {string}
     * @memberof CountryPhoneCodeDb1991f2fb091000169c5e0cb7c200b9
     */
    'id'?: string;
}

