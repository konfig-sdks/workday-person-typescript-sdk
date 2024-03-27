/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PhoneReference1089da0ab90910000f70891a998b0887 } from './phone-reference1089da0ab90910000f70891a998b0887';

/**
 * 
 * @export
 * @interface WorkContactInformationChangesGetPhoneNumbersResponse
 */
export interface WorkContactInformationChangesGetPhoneNumbersResponse {
    /**
     * 
     * @type {Array<PhoneReference1089da0ab90910000f70891a998b0887>}
     * @memberof WorkContactInformationChangesGetPhoneNumbersResponse
     */
    'data'?: Array<PhoneReference1089da0ab90910000f70891a998b0887>;
    /**
     * 
     * @type {number}
     * @memberof WorkContactInformationChangesGetPhoneNumbersResponse
     */
    'total'?: number;
}
