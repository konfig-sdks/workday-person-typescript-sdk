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
import { Usage81f66ab16f7510005c53d917926f4857 } from './usage81f66ab16f7510005c53d917926f4857';

/**
 * 
 * @export
 * @interface HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
 */
export interface HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf {
    /**
     * City Subdivision 2 - Local
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'citySubdivision2Local'?: string;
    /**
     * Address Line 9
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'addressLine9'?: string;
    /**
     * City Subdivision 1 - Local
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'citySubdivision1Local'?: string;
    /**
     * Local Address Line 8
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'addressLine8Local'?: string;
    /**
     * Address Line 6
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'addressLine6'?: string;
    /**
     * The date this business process takes effect.
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'effective'?: string;
    /**
     * Address Line 3
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'addressLine3'?: string;
    /**
     * Postal Code
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'postalCode'?: string;
    /**
     * Number of Days WFH
     * @type {number}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'numberDaysWFH'?: number;
    /**
     * Local Address Line 2
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'addressLine2Local'?: string;
    /**
     * City - Local
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'cityLocal'?: string;
    /**
     * Local Address Line 6
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'addressLine6Local'?: string;
    /**
     * Address Line 1
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'addressLine1'?: string;
    /**
     * City Subdivision 1
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'citySubdivision1'?: string;
    /**
     * Region Subdivision 2
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'regionSubdivision2'?: string;
    /**
     * City
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'city'?: string;
    /**
     * Local Address Line 4
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'addressLine4Local'?: string;
    /**
     * Region Subdivision 1
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'regionSubdivision1'?: string;
    /**
     * Address Line 7
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'addressLine7'?: string;
    /**
     * Address Line 2
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'addressLine2'?: string;
    /**
     * Address Line 5
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'addressLine5'?: string;
    /**
     * Local Address Line 9
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'addressLine9Local'?: string;
    /**
     * Local Address Line 3
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'addressLine3Local'?: string;
    /**
     * 
     * @type {CountryCity81f66ab16f7510005c53d89089074844}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'countryCity'?: CountryCity81f66ab16f7510005c53d89089074844;
    /**
     * Local Address Line 7
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'addressLine7Local'?: string;
    /**
     * Local Address Line 1
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'addressLine1Local'?: string;
    /**
     * 
     * @type {Country81f66ab16f7510005c53d8fd5f5b4852}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'country'?: Country81f66ab16f7510005c53d8fd5f5b4852;
    /**
     * 
     * @type {CountryRegion81f66ab16f7510005c53d8be2fe44847}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'countryRegion'?: CountryRegion81f66ab16f7510005c53d8be2fe44847;
    /**
     * Local Address Line 5
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'addressLine5Local'?: string;
    /**
     * Region Subdivision 1 - Local
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'regionSubdivision1Local'?: string;
    /**
     * Address Line 4
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'addressLine4'?: string;
    /**
     * 
     * @type {Usage81f66ab16f7510005c53d917926f4857}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'usage'?: Usage81f66ab16f7510005c53d917926f4857;
    /**
     * Address Line 8
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'addressLine8'?: string;
    /**
     * City Subdivision 2
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'citySubdivision2'?: string;
    /**
     * Id of the instance
     * @type {string}
     * @memberof HomeAddressReference81f66ab16f7510005c53d881876e4843AllOf
     */
    'id'?: string;
}

