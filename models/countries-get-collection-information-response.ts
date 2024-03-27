/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { PersonCountryViewDefinitionF206795ea40e1000040cc6f5da4f002a } from './person-country-view-definition-f206795ea40e1000040cc6f5da4f002a';

/**
 * 
 * @export
 * @interface CountriesGetCollectionInformationResponse
 */
export interface CountriesGetCollectionInformationResponse {
    /**
     * 
     * @type {Array<PersonCountryViewDefinitionF206795ea40e1000040cc6f5da4f002a>}
     * @memberof CountriesGetCollectionInformationResponse
     */
    'data'?: Array<PersonCountryViewDefinitionF206795ea40e1000040cc6f5da4f002a>;
    /**
     * 
     * @type {number}
     * @memberof CountriesGetCollectionInformationResponse
     */
    'total'?: number;
}
