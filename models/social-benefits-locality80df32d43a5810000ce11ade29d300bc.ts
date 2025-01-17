/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Location80df32d43a5810000d59f391b32400d8 } from './location80df32d43a5810000d59f391b32400d8';
import { SocialBenefitsLocality80df32d43a5810000ce11ade29d300bcAllOf } from './social-benefits-locality80df32d43a5810000ce11ade29d300bc-all-of';

/**
 * 
 * @export
 * @interface SocialBenefitsLocality80df32d43a5810000ce11ade29d300bc
 */
export interface SocialBenefitsLocality80df32d43a5810000ce11ade29d300bc {
    /**
     * Description for the Social Benefits Locality.
     * @type {string}
     * @memberof SocialBenefitsLocality80df32d43a5810000ce11ade29d300bc
     */
    'description'?: string;
    /**
     * 
     * @type {Location80df32d43a5810000d59f391b32400d8}
     * @memberof SocialBenefitsLocality80df32d43a5810000ce11ade29d300bc
     */
    'location'?: Location80df32d43a5810000d59f391b32400d8;
    /**
     * Name for the Social Benefits Locality.
     * @type {string}
     * @memberof SocialBenefitsLocality80df32d43a5810000ce11ade29d300bc
     */
    'name'?: string;
    /**
     * Code for the Social Benefits Locality.
     * @type {string}
     * @memberof SocialBenefitsLocality80df32d43a5810000ce11ade29d300bc
     */
    'code'?: string;
    /**
     * True if the Social Benefits Locality is inactive.
     * @type {boolean}
     * @memberof SocialBenefitsLocality80df32d43a5810000ce11ade29d300bc
     */
    'inactive'?: boolean;
    /**
     * A preview of the instance
     * @type {string}
     * @memberof SocialBenefitsLocality80df32d43a5810000ce11ade29d300bc
     */
    'descriptor'?: string;
}

