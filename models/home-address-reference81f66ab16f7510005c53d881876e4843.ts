/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Country81f66ab16f7510005c53d8fd5f5b4852 } from './country81f66ab16f7510005c53d8fd5f5b4852';
import { CountryCity81f66ab16f7510005c53d89089074844 } from './country-city81f66ab16f7510005c53d89089074844';
import { CountryRegion81f66ab16f7510005c53d8be2fe44847 } from './country-region81f66ab16f7510005c53d8be2fe44847';
import { HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf } from './home-address-reference81f66ab16f7510005c53d881876e4843-all-of';
import { Usage81f66ab16f7510005c53d917926f4857 } from './usage81f66ab16f7510005c53d917926f4857';

/**
 * 
 * @export
 * @interface HomeAddressReference81f66ab16f7510005c53d881876e4843
 */
export interface HomeAddressReference81f66ab16f7510005c53d881876e4843 {
    /**
     * City Subdivision 2 - Local
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'citySubdivision2Local'?: string;
    /**
     * Address Line 9
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'addressLine9'?: string;
    /**
     * City Subdivision 1 - Local
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'citySubdivision1Local'?: string;
    /**
     * Local Address Line 8
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'addressLine8Local'?: string;
    /**
     * Address Line 6
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'addressLine6'?: string;
    /**
     * The date this business process takes effect.
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'effective'?: string;
    /**
     * Address Line 3
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'addressLine3'?: string;
    /**
     * Postal Code
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'postalCode'?: string;
    /**
     * Number of Days WFH
     * @type {number}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'numberDaysWFH'?: number;
    /**
     * Local Address Line 2
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'addressLine2Local'?: string;
    /**
     * City - Local
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'cityLocal'?: string;
    /**
     * Local Address Line 6
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'addressLine6Local'?: string;
    /**
     * Address Line 1
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'addressLine1'?: string;
    /**
     * City Subdivision 1
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'citySubdivision1'?: string;
    /**
     * Region Subdivision 2
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'regionSubdivision2'?: string;
    /**
     * City
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'city'?: string;
    /**
     * Local Address Line 4
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'addressLine4Local'?: string;
    /**
     * Region Subdivision 1
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'regionSubdivision1'?: string;
    /**
     * Address Line 7
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'addressLine7'?: string;
    /**
     * Address Line 2
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'addressLine2'?: string;
    /**
     * Address Line 5
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'addressLine5'?: string;
    /**
     * Local Address Line 9
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'addressLine9Local'?: string;
    /**
     * Local Address Line 3
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'addressLine3Local'?: string;
    /**
     * 
     * @type {CountryCity81f66ab16f7510005c53d89089074844}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'countryCity'?: CountryCity81f66ab16f7510005c53d89089074844;
    /**
     * Local Address Line 7
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'addressLine7Local'?: string;
    /**
     * Local Address Line 1
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'addressLine1Local'?: string;
    /**
     * 
     * @type {Country81f66ab16f7510005c53d8fd5f5b4852}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'country'?: Country81f66ab16f7510005c53d8fd5f5b4852;
    /**
     * 
     * @type {CountryRegion81f66ab16f7510005c53d8be2fe44847}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'countryRegion'?: CountryRegion81f66ab16f7510005c53d8be2fe44847;
    /**
     * Local Address Line 5
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'addressLine5Local'?: string;
    /**
     * Region Subdivision 1 - Local
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'regionSubdivision1Local'?: string;
    /**
     * Address Line 4
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'addressLine4'?: string;
    /**
     * 
     * @type {Usage81f66ab16f7510005c53d917926f4857}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'usage'?: Usage81f66ab16f7510005c53d917926f4857;
    /**
     * Address Line 8
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'addressLine8'?: string;
    /**
     * City Subdivision 2
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'citySubdivision2'?: string;
    /**
     * Id of the instance
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843
     */
    'id'?: string;
}

