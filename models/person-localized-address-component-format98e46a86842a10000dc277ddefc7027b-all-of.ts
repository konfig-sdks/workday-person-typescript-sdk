/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ComponentType98e46a86842a10000dc278233c7e0280 } from './component-type98e46a86842a10000dc278233c7e0280';

/**
 * 
 * @export
 * @interface PersonLocalizedAddressComponentFormat98e46a86842a10000dc277ddefc7027bAllOf
 */
export interface PersonLocalizedAddressComponentFormat98e46a86842a10000dc277ddefc7027bAllOf {
    /**
     * 
     * @type {string}
     * @memberof PersonLocalizedAddressComponentFormat98e46a86842a10000dc277ddefc7027bAllOf
     */
    'type'?: string;
    /**
     * The order in which the address component appears on the address maintenance page. The order of an address component is country-specific.
     * @type {string}
     * @memberof PersonLocalizedAddressComponentFormat98e46a86842a10000dc277ddefc7027bAllOf
     */
    'order'?: string;
    /**
     * Country-specific label override for an address component. If no country-specific override exists, the generic component name is used. For example, for the US, the label State overrides the underlying generic component name Region.
     * @type {string}
     * @memberof PersonLocalizedAddressComponentFormat98e46a86842a10000dc277ddefc7027bAllOf
     */
    'label'?: string;
    /**
     * 
     * @type {ComponentType98e46a86842a10000dc278233c7e0280}
     * @memberof PersonLocalizedAddressComponentFormat98e46a86842a10000dc277ddefc7027bAllOf
     */
    'componentType'?: ComponentType98e46a86842a10000dc278233c7e0280;
    /**
     * The custom Web Service Alias defined on an address component. For use with the Recruiting API.
     * @type {string}
     * @memberof PersonLocalizedAddressComponentFormat98e46a86842a10000dc277ddefc7027bAllOf
     */
    'webServiceAlias'?: string;
    /**
     * True if the address component is required for the country.
     * @type {boolean}
     * @memberof PersonLocalizedAddressComponentFormat98e46a86842a10000dc277ddefc7027bAllOf
     */
    'required'?: boolean;
}

