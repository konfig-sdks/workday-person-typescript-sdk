/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmailAddressReference0918d433e86b100018119edc1b8f00f7 } from './email-address-reference0918d433e86b100018119edc1b8f00f7';

/**
 * 
 * @export
 * @interface HomeContactInformationChangesGetStagedEmailAddressesResponse
 */
export interface HomeContactInformationChangesGetStagedEmailAddressesResponse {
    /**
     * 
     * @type {Array<EmailAddressReference0918d433e86b100018119edc1b8f00f7>}
     * @memberof HomeContactInformationChangesGetStagedEmailAddressesResponse
     */
    'data'?: Array<EmailAddressReference0918d433e86b100018119edc1b8f00f7>;
    /**
     * 
     * @type {number}
     * @memberof HomeContactInformationChangesGetStagedEmailAddressesResponse
     */
    'total'?: number;
}

