/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PersonLocalizedNameComponentFormat51f9e585eec710001050c68b768b00ea } from './person-localized-name-component-format51f9e585eec710001050c68b768b00ea';

/**
 * 
 * @export
 * @interface CountriesGetNameComponentsResponse
 */
export interface CountriesGetNameComponentsResponse {
    /**
     * 
     * @type {Array<PersonLocalizedNameComponentFormat51f9e585eec710001050c68b768b00ea>}
     * @memberof CountriesGetNameComponentsResponse
     */
    'data'?: Array<PersonLocalizedNameComponentFormat51f9e585eec710001050c68b768b00ea>;
    /**
     * 
     * @type {number}
     * @memberof CountriesGetNameComponentsResponse
     */
    'total'?: number;
}

