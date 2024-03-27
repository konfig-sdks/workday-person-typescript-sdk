/*
person

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

The version of the OpenAPI document: v4


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Action38ff08ab6736100010816009079d0126 } from './action38ff08ab6736100010816009079d0126';
import { BusinessProcessParameters83f6f6b7c38d100009c69131dea04a14 } from './business-process-parameters83f6f6b7c38d100009c69131dea04a14';
import { Comments86093b8a932f10001499f356ff83012e } from './comments86093b8a932f10001499f356ff83012e';
import { EventAttachmentsForToolbar43b30ba735b8100011ee4767246d0143 } from './event-attachments-for-toolbar43b30ba735b8100011ee4767246d0143';
import { For5d688bd57bb910001815ab3dd10024a9 } from './for5d688bd57bb910001815ab3dd10024a9';
import { OverallBusinessProcess5d688bd57bb910001815ab49927724aa } from './overall-business-process5d688bd57bb910001815ab49927724aa';
import { TransactionStatus7457adcbe0fa1000089b63ab3a510000 } from './transaction-status7457adcbe0fa1000089b63ab3a510000';

/**
 * The Action Event instance to be used with businessProcessLinkable linked service representations.
 * @export
 * @interface BusinessProcessParametersBdfa2c83ea5e10002b873037350f5d6c
 */
export interface BusinessProcessParametersBdfa2c83ea5e10002b873037350f5d6c {
    /**
     * 
     * @type {OverallBusinessProcess5d688bd57bb910001815ab49927724aa}
     * @memberof BusinessProcessParametersBdfa2c83ea5e10002b873037350f5d6c
     */
    'overallBusinessProcess'?: OverallBusinessProcess5d688bd57bb910001815ab49927724aa;
    /**
     * 
     * @type {Action38ff08ab6736100010816009079d0126}
     * @memberof BusinessProcessParametersBdfa2c83ea5e10002b873037350f5d6c
     */
    'action': Action38ff08ab6736100010816009079d0126;
    /**
     * Returns a null.
     * @type {string}
     * @memberof BusinessProcessParametersBdfa2c83ea5e10002b873037350f5d6c
     */
    'comment'?: string;
    /**
     * Returns the comments for the current business process.
     * @type {Array<Comments86093b8a932f10001499f356ff83012e>}
     * @memberof BusinessProcessParametersBdfa2c83ea5e10002b873037350f5d6c
     */
    'comments'?: Array<Comments86093b8a932f10001499f356ff83012e>;
    /**
     * 
     * @type {TransactionStatus7457adcbe0fa1000089b63ab3a510000}
     * @memberof BusinessProcessParametersBdfa2c83ea5e10002b873037350f5d6c
     */
    'transactionStatus'?: TransactionStatus7457adcbe0fa1000089b63ab3a510000;
    /**
     * Warning message for an action event triggered by a condition.
     * @type {string}
     * @memberof BusinessProcessParametersBdfa2c83ea5e10002b873037350f5d6c
     */
    'warningValidations'?: string;
    /**
     * The current status of the business process.  For example: Successfully Completed, Denied, Terminated.
     * @type {string}
     * @memberof BusinessProcessParametersBdfa2c83ea5e10002b873037350f5d6c
     */
    'overallStatus'?: string;
    /**
     * Returns attachments associated with this business process that are uploaded from the toolbar and are accessible to the processing person. Returns blank if either of these conditions are not met.
     * @type {Array<EventAttachmentsForToolbar43b30ba735b8100011ee4767246d0143>}
     * @memberof BusinessProcessParametersBdfa2c83ea5e10002b873037350f5d6c
     */
    'attachments'?: Array<EventAttachmentsForToolbar43b30ba735b8100011ee4767246d0143>;
    /**
     * Validation message for an action event triggered by a condition.
     * @type {string}
     * @memberof BusinessProcessParametersBdfa2c83ea5e10002b873037350f5d6c
     */
    'criticalValidations'?: string;
    /**
     * 
     * @type {For5d688bd57bb910001815ab3dd10024a9}
     * @memberof BusinessProcessParametersBdfa2c83ea5e10002b873037350f5d6c
     */
    'for'?: For5d688bd57bb910001815ab3dd10024a9;
}
