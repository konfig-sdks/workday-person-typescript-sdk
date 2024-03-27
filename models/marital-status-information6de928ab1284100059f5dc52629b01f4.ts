/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MaritalStatusInformation6de928ab1284100059f5dc52629b01f4AllOf } from './marital-status-information6de928ab1284100059f5dc52629b01f4-all-of';
import { Status6de928ab1284100059f5dc66f77e01f6 } from './status6de928ab1284100059f5dc66f77e01f6';

/**
 * 
 * @export
 * @interface MaritalStatusInformation6de928ab1284100059f5dc52629b01f4
 */
export interface MaritalStatusInformation6de928ab1284100059f5dc52629b01f4 {
    /**
     * The Marital Status Date for a person.
     * @type {string}
     * @memberof MaritalStatusInformation6de928ab1284100059f5dc52629b01f4
     */
    'date'?: string;
    /**
     * 
     * @type {Status6de928ab1284100059f5dc66f77e01f6}
     * @memberof MaritalStatusInformation6de928ab1284100059f5dc52629b01f4
     */
    'status'?: Status6de928ab1284100059f5dc66f77e01f6;
}

