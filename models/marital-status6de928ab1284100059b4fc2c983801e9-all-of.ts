/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Location6de928ab1284100059cd755321a501f1 } from './location6de928ab1284100059cd755321a501f1';

/**
 * 
 * @export
 * @interface MaritalStatus6de928ab1284100059b4fc2c983801e9AllOf
 */
export interface MaritalStatus6de928ab1284100059b4fc2c983801e9AllOf {
    /**
     * 
     * @type {Location6de928ab1284100059cd755321a501f1}
     * @memberof MaritalStatus6de928ab1284100059b4fc2c983801e9AllOf
     */
    'location'?: Location6de928ab1284100059cd755321a501f1;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof MaritalStatus6de928ab1284100059b4fc2c983801e9AllOf
     */
    'descriptor'?: string;
}
