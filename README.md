<div align="left">

[![Visit Workday](./header.png)](https://workday.com)

# [Workday](https://workday.com)<a id="workday"></a>

The Person REST APIs enable you to access information about the worker person, including country-specific configuration information about name components.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`workdayperson.promptValues.getAllowedCountryData`](#workdaypersonpromptvaluesgetallowedcountrydata)
  * [`workdayperson.promptValues.getCountryPhoneCodes`](#workdaypersonpromptvaluesgetcountryphonecodes)
  * [`workdayperson.promptValues.getHereditaryValues`](#workdaypersonpromptvaluesgethereditaryvalues)
  * [`workdayperson.promptValues.getInstances`](#workdaypersonpromptvaluesgetinstances)
  * [`workdayperson.promptValues.getInstances_0`](#workdaypersonpromptvaluesgetinstances_0)
  * [`workdayperson.promptValues.getInstances_1`](#workdaypersonpromptvaluesgetinstances_1)
  * [`workdayperson.promptValues.getInstances_2`](#workdaypersonpromptvaluesgetinstances_2)
  * [`workdayperson.promptValues.getInstances_3`](#workdaypersonpromptvaluesgetinstances_3)
  * [`workdayperson.promptValues.getInstances_4`](#workdaypersonpromptvaluesgetinstances_4)
  * [`workdayperson.promptValues.getInstances_5`](#workdaypersonpromptvaluesgetinstances_5)
  * [`workdayperson.promptValues.getOptions`](#workdaypersonpromptvaluesgetoptions)
  * [`workdayperson.promptValues.getOptions_0`](#workdaypersonpromptvaluesgetoptions_0)
  * [`workdayperson.promptValues.getOptions_1`](#workdaypersonpromptvaluesgetoptions_1)
  * [`workdayperson.promptValues.getPhoneDeviceTypes`](#workdaypersonpromptvaluesgetphonedevicetypes)
  * [`workdayperson.promptValues.getTitleComponents`](#workdaypersonpromptvaluesgettitlecomponents)
  * [`workdayperson.promptValues.listCountryData`](#workdaypersonpromptvalueslistcountrydata)
  * [`workdayperson.countries.getAddressComponents`](#workdaypersoncountriesgetaddresscomponents)
  * [`workdayperson.countries.getCollectionInformation`](#workdaypersoncountriesgetcollectioninformation)
  * [`workdayperson.countries.getInfo`](#workdaypersoncountriesgetinfo)
  * [`workdayperson.countries.getNameComponents`](#workdaypersoncountriesgetnamecomponents)
  * [`workdayperson.homeContactInformationChanges.createEmailAddress`](#workdaypersonhomecontactinformationchangescreateemailaddress)
  * [`workdayperson.homeContactInformationChanges.createInstantMessenger`](#workdaypersonhomecontactinformationchangescreateinstantmessenger)
  * [`workdayperson.homeContactInformationChanges.createNewAddress`](#workdaypersonhomecontactinformationchangescreatenewaddress)
  * [`workdayperson.homeContactInformationChanges.createPhoneNumber`](#workdaypersonhomecontactinformationchangescreatephonenumber)
  * [`workdayperson.homeContactInformationChanges.createWebAddress`](#workdaypersonhomecontactinformationchangescreatewebaddress)
  * [`workdayperson.homeContactInformationChanges.getAddressAsStaged`](#workdaypersonhomecontactinformationchangesgetaddressasstaged)
  * [`workdayperson.homeContactInformationChanges.getAddressesStaged`](#workdaypersonhomecontactinformationchangesgetaddressesstaged)
  * [`workdayperson.homeContactInformationChanges.getEmailAddress`](#workdaypersonhomecontactinformationchangesgetemailaddress)
  * [`workdayperson.homeContactInformationChanges.getEventInformation`](#workdaypersonhomecontactinformationchangesgeteventinformation)
  * [`workdayperson.homeContactInformationChanges.getInstantMessenger`](#workdaypersonhomecontactinformationchangesgetinstantmessenger)
  * [`workdayperson.homeContactInformationChanges.getPhoneNumbers`](#workdaypersonhomecontactinformationchangesgetphonenumbers)
  * [`workdayperson.homeContactInformationChanges.getStagedEmailAddresses`](#workdaypersonhomecontactinformationchangesgetstagedemailaddresses)
  * [`workdayperson.homeContactInformationChanges.getStagedInstantMessengers`](#workdaypersonhomecontactinformationchangesgetstagedinstantmessengers)
  * [`workdayperson.homeContactInformationChanges.getStagedPhoneNumber`](#workdaypersonhomecontactinformationchangesgetstagedphonenumber)
  * [`workdayperson.homeContactInformationChanges.getWebAddress`](#workdaypersonhomecontactinformationchangesgetwebaddress)
  * [`workdayperson.homeContactInformationChanges.getWebAddressesStaged`](#workdaypersonhomecontactinformationchangesgetwebaddressesstaged)
  * [`workdayperson.homeContactInformationChanges.removeAddress`](#workdaypersonhomecontactinformationchangesremoveaddress)
  * [`workdayperson.homeContactInformationChanges.removeEmailAddress`](#workdaypersonhomecontactinformationchangesremoveemailaddress)
  * [`workdayperson.homeContactInformationChanges.removeInstantMessenger`](#workdaypersonhomecontactinformationchangesremoveinstantmessenger)
  * [`workdayperson.homeContactInformationChanges.removePhoneNumber`](#workdaypersonhomecontactinformationchangesremovephonenumber)
  * [`workdayperson.homeContactInformationChanges.removeWebAddress`](#workdaypersonhomecontactinformationchangesremovewebaddress)
  * [`workdayperson.homeContactInformationChanges.submitChange`](#workdaypersonhomecontactinformationchangessubmitchange)
  * [`workdayperson.homeContactInformationChanges.updateAddress`](#workdaypersonhomecontactinformationchangesupdateaddress)
  * [`workdayperson.homeContactInformationChanges.updateEmailAddress`](#workdaypersonhomecontactinformationchangesupdateemailaddress)
  * [`workdayperson.homeContactInformationChanges.updateInstantMessenger`](#workdaypersonhomecontactinformationchangesupdateinstantmessenger)
  * [`workdayperson.homeContactInformationChanges.updatePhoneNumber`](#workdaypersonhomecontactinformationchangesupdatephonenumber)
  * [`workdayperson.homeContactInformationChanges.updateWebAddress`](#workdaypersonhomecontactinformationchangesupdatewebaddress)
  * [`workdayperson.people.getAdditionalName`](#workdaypersonpeoplegetadditionalname)
  * [`workdayperson.people.getAdditionalNames`](#workdaypersonpeoplegetadditionalnames)
  * [`workdayperson.people.getById`](#workdaypersonpeoplegetbyid)
  * [`workdayperson.people.getHomeAddress`](#workdaypersonpeoplegethomeaddress)
  * [`workdayperson.people.getHomeAddresses`](#workdaypersonpeoplegethomeaddresses)
  * [`workdayperson.people.getHomeEmail`](#workdaypersonpeoplegethomeemail)
  * [`workdayperson.people.getHomeEmails`](#workdaypersonpeoplegethomeemails)
  * [`workdayperson.people.getHomeInstantMessengerUsername`](#workdaypersonpeoplegethomeinstantmessengerusername)
  * [`workdayperson.people.getHomeInstantMessengers`](#workdaypersonpeoplegethomeinstantmessengers)
  * [`workdayperson.people.getHomePhone`](#workdaypersonpeoplegethomephone)
  * [`workdayperson.people.getHomePhones`](#workdaypersonpeoplegethomephones)
  * [`workdayperson.people.getHomeWebAddress`](#workdaypersonpeoplegethomewebaddress)
  * [`workdayperson.people.getHomeWebAddresses`](#workdaypersonpeoplegethomewebaddresses)
  * [`workdayperson.people.getLegalName`](#workdaypersonpeoplegetlegalname)
  * [`workdayperson.people.getLegalName_0`](#workdaypersonpeoplegetlegalname_0)
  * [`workdayperson.people.getNamePronunciation`](#workdaypersonpeoplegetnamepronunciation)
  * [`workdayperson.people.getNamePronunciations`](#workdaypersonpeoplegetnamepronunciations)
  * [`workdayperson.people.getPersonById`](#workdaypersonpeoplegetpersonbyid)
  * [`workdayperson.people.getPersonalInfo`](#workdaypersonpeoplegetpersonalinfo)
  * [`workdayperson.people.getPersonalInfo_0`](#workdaypersonpeoplegetpersonalinfo_0)
  * [`workdayperson.people.getPersonalPhoto`](#workdaypersonpeoplegetpersonalphoto)
  * [`workdayperson.people.getPersonalPhotos`](#workdaypersonpeoplegetpersonalphotos)
  * [`workdayperson.people.getPreferredName`](#workdaypersonpeoplegetpreferredname)
  * [`workdayperson.people.getPreferredName_0`](#workdaypersonpeoplegetpreferredname_0)
  * [`workdayperson.people.getPublicContactInformation`](#workdaypersonpeoplegetpubliccontactinformation)
  * [`workdayperson.people.getPublicContactInformation_0`](#workdaypersonpeoplegetpubliccontactinformation_0)
  * [`workdayperson.people.getWorkAddress`](#workdaypersonpeoplegetworkaddress)
  * [`workdayperson.people.getWorkAddresses`](#workdaypersonpeoplegetworkaddresses)
  * [`workdayperson.people.getWorkEmail`](#workdaypersonpeoplegetworkemail)
  * [`workdayperson.people.getWorkEmails`](#workdaypersonpeoplegetworkemails)
  * [`workdayperson.people.getWorkInstantMessengerUsername`](#workdaypersonpeoplegetworkinstantmessengerusername)
  * [`workdayperson.people.getWorkInstantMessengerUsernames`](#workdaypersonpeoplegetworkinstantmessengerusernames)
  * [`workdayperson.people.getWorkPhone`](#workdaypersonpeoplegetworkphone)
  * [`workdayperson.people.getWorkPhones`](#workdaypersonpeoplegetworkphones)
  * [`workdayperson.people.getWorkWebAddress`](#workdaypersonpeoplegetworkwebaddress)
  * [`workdayperson.people.getWorkWebAddresses`](#workdaypersonpeoplegetworkwebaddresses)
  * [`workdayperson.phoneValidation.validatePhoneNumber`](#workdaypersonphonevalidationvalidatephonenumber)
  * [`workdayperson.workContactInformationChanges.createAddress`](#workdaypersonworkcontactinformationchangescreateaddress)
  * [`workdayperson.workContactInformationChanges.createEmailAddress`](#workdaypersonworkcontactinformationchangescreateemailaddress)
  * [`workdayperson.workContactInformationChanges.createInstantMessenger`](#workdaypersonworkcontactinformationchangescreateinstantmessenger)
  * [`workdayperson.workContactInformationChanges.createPhoneNumber`](#workdaypersonworkcontactinformationchangescreatephonenumber)
  * [`workdayperson.workContactInformationChanges.createStagedWebAddress`](#workdaypersonworkcontactinformationchangescreatestagedwebaddress)
  * [`workdayperson.workContactInformationChanges.getAddressAsStaged`](#workdaypersonworkcontactinformationchangesgetaddressasstaged)
  * [`workdayperson.workContactInformationChanges.getAddressesStaged`](#workdaypersonworkcontactinformationchangesgetaddressesstaged)
  * [`workdayperson.workContactInformationChanges.getEmailAddress`](#workdaypersonworkcontactinformationchangesgetemailaddress)
  * [`workdayperson.workContactInformationChanges.getEventInfo`](#workdaypersonworkcontactinformationchangesgeteventinfo)
  * [`workdayperson.workContactInformationChanges.getPhoneNumber`](#workdaypersonworkcontactinformationchangesgetphonenumber)
  * [`workdayperson.workContactInformationChanges.getPhoneNumbers`](#workdaypersonworkcontactinformationchangesgetphonenumbers)
  * [`workdayperson.workContactInformationChanges.getStagedEmailAddresses`](#workdaypersonworkcontactinformationchangesgetstagedemailaddresses)
  * [`workdayperson.workContactInformationChanges.getStagedInstantMessenger`](#workdaypersonworkcontactinformationchangesgetstagedinstantmessenger)
  * [`workdayperson.workContactInformationChanges.getStagedInstantMessengers`](#workdaypersonworkcontactinformationchangesgetstagedinstantmessengers)
  * [`workdayperson.workContactInformationChanges.getWebAddress`](#workdaypersonworkcontactinformationchangesgetwebaddress)
  * [`workdayperson.workContactInformationChanges.getWebAddressesStaged`](#workdaypersonworkcontactinformationchangesgetwebaddressesstaged)
  * [`workdayperson.workContactInformationChanges.removeAddress`](#workdaypersonworkcontactinformationchangesremoveaddress)
  * [`workdayperson.workContactInformationChanges.removeEmailAddress`](#workdaypersonworkcontactinformationchangesremoveemailaddress)
  * [`workdayperson.workContactInformationChanges.removeInstantMessenger`](#workdaypersonworkcontactinformationchangesremoveinstantmessenger)
  * [`workdayperson.workContactInformationChanges.removePhoneNumber`](#workdaypersonworkcontactinformationchangesremovephonenumber)
  * [`workdayperson.workContactInformationChanges.removeWebAddress`](#workdaypersonworkcontactinformationchangesremovewebaddress)
  * [`workdayperson.workContactInformationChanges.submit`](#workdaypersonworkcontactinformationchangessubmit)
  * [`workdayperson.workContactInformationChanges.updateAddress`](#workdaypersonworkcontactinformationchangesupdateaddress)
  * [`workdayperson.workContactInformationChanges.updateAlternateWorkLocation`](#workdaypersonworkcontactinformationchangesupdatealternateworklocation)
  * [`workdayperson.workContactInformationChanges.updateEmailAddress`](#workdaypersonworkcontactinformationchangesupdateemailaddress)
  * [`workdayperson.workContactInformationChanges.updateInstantMessenger`](#workdaypersonworkcontactinformationchangesupdateinstantmessenger)
  * [`workdayperson.workContactInformationChanges.updatePhoneNumber`](#workdaypersonworkcontactinformationchangesupdatephonenumber)
  * [`workdayperson.workContactInformationChanges.updateWebAddress`](#workdaypersonworkcontactinformationchangesupdatewebaddress)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Workday&serviceName=Person&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { WorkdayPerson } from "workday-person-typescript-sdk";

const workdayperson = new WorkdayPerson({
  // Defining the base path is optional and defaults to https://<tenantHostname>/person/v4
  // basePath: "https://<tenantHostname>/person/v4",
  accessToken: "ACCESS_TOKEN",
});

const getAllowedCountryDataResponse =
  await workdayperson.promptValues.getAllowedCountryData({});

console.log(getAllowedCountryDataResponse);
```

## Reference<a id="reference"></a>


### `workdayperson.promptValues.getAllowedCountryData`<a id="workdaypersonpromptvaluesgetallowedcountrydata"></a>

The set of countries a person is allowed to populated with country specific data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllowedCountryDataResponse =
  await workdayperson.promptValues.getAllowedCountryData({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### person: `string`<a id="person-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/personalInformationCountry/allowedCountry` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.promptValues.getCountryPhoneCodes`<a id="workdaypersonpromptvaluesgetcountryphonecodes"></a>

Exposes prompting for country phone codes, which are used during the collection of phone numbers.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCountryPhoneCodesResponse =
  await workdayperson.promptValues.getCountryPhoneCodes({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/commonPhone/countryPhoneCodes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.promptValues.getHereditaryValues`<a id="workdaypersonpromptvaluesgethereditaryvalues"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHereditaryValuesResponse =
  await workdayperson.promptValues.getHereditaryValues({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/nameComponents/hereditary` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.promptValues.getInstances`<a id="workdaypersonpromptvaluesgetinstances"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstancesResponse = await workdayperson.promptValues.getInstances({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/nameComponents/religious` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.promptValues.getInstances_0`<a id="workdaypersonpromptvaluesgetinstances_0"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_0Response = await workdayperson.promptValues.getInstances_0(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/nameComponents/honorary` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.promptValues.getInstances_1`<a id="workdaypersonpromptvaluesgetinstances_1"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_1Response = await workdayperson.promptValues.getInstances_1(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/countryComponents/countryCity` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.promptValues.getInstances_2`<a id="workdaypersonpromptvaluesgetinstances_2"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_2Response = await workdayperson.promptValues.getInstances_2(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/nameComponents/social` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.promptValues.getInstances_3`<a id="workdaypersonpromptvaluesgetinstances_3"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_3Response = await workdayperson.promptValues.getInstances_3(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/countryComponents/country` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.promptValues.getInstances_4`<a id="workdaypersonpromptvaluesgetinstances_4"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_4Response = await workdayperson.promptValues.getInstances_4(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/nameComponents/academic` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.promptValues.getInstances_5`<a id="workdaypersonpromptvaluesgetinstances_5"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstances_5Response = await workdayperson.promptValues.getInstances_5(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/countryComponents/countryRegion` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.promptValues.getOptions`<a id="workdaypersonpromptvaluesgetoptions"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOptionsResponse = await workdayperson.promptValues.getOptions({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/nameComponents/royal` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.promptValues.getOptions_0`<a id="workdaypersonpromptvaluesgetoptions_0"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOptions_0Response = await workdayperson.promptValues.getOptions_0({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/nameComponents/salutation` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.promptValues.getOptions_1`<a id="workdaypersonpromptvaluesgetoptions_1"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOptions_1Response = await workdayperson.promptValues.getOptions_1({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/nameComponents/professional` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.promptValues.getPhoneDeviceTypes`<a id="workdaypersonpromptvaluesgetphonedevicetypes"></a>

Exposes prompting for phone device types, which are used during the collection of phone numbers.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPhoneDeviceTypesResponse =
  await workdayperson.promptValues.getPhoneDeviceTypes({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/commonPhone/phoneDeviceTypes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.promptValues.getTitleComponents`<a id="workdaypersonpromptvaluesgettitlecomponents"></a>

Retrieves instances that can be used as values for other endpoint parameters in this service.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTitleComponentsResponse =
  await workdayperson.promptValues.getTitleComponents({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country: `string`<a id="country-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/nameComponents/title` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.promptValues.listCountryData`<a id="workdaypersonpromptvalueslistcountrydata"></a>

The set of countries a person has populated with country specific data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCountryDataResponse =
  await workdayperson.promptValues.listCountryData({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default and maximum is 1000.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### person: `string`<a id="person-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[MULTIPLEINSTANCEMODELREFERENCE](./models/multipleinstancemodelreference.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/values/personalInformationCountry/populatedCountry` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.countries.getAddressComponents`<a id="workdaypersoncountriesgetaddresscomponents"></a>

Retrieves the allowed address components and their configuration for the Country and a given Address Configuration Format.

Secured by: REST API Public

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAddressComponentsResponse =
  await workdayperson.countries.getAddressComponents({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### addressConfigurationFormat: `string`<a id="addressconfigurationformat-string"></a>

The Address Configuration Format to return values for.  Required. Failure to provide this will result in no address components being returned. Available values are: - DEFAULT_AREAS - RECRUITING_FORMAT

##### currentAddress: `string`<a id="currentaddress-string"></a>

The existing address being updated.  Required when you use Default Format and a Country using Local Script to get component data for an existing address. Failure to provide this when appropriate may result in incorrect address component data being returned.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### useWesternScript: `boolean`<a id="usewesternscript-boolean"></a>

Enables Local Script components for Countries using Local Script in Default Format. Optional. When applicable, setting this value to true will enable Local Script components and enforce Western Components as optional. Local Components that are requireable will be enforced as required.

#### 🔄 Return<a id="🔄-return"></a>

[CountriesGetAddressComponentsResponse](./models/countries-get-address-components-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/countries/{ID}/addressComponents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.countries.getCollectionInformation`<a id="workdaypersoncountriesgetcollectioninformation"></a>

Retrieves a collection of information about countries, including their alpha codes, and whether or not they are enabled for address lookup.

Secured by: REST API Public

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCollectionInformationResponse =
  await workdayperson.countries.getCollectionInformation({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[CountriesGetCollectionInformationResponse](./models/countries-get-collection-information-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/countries` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.countries.getInfo`<a id="workdaypersoncountriesgetinfo"></a>

Retrieves information about a country, including their alpha codes, and whether or not they are enabled for address lookup.

Secured by: REST API Public

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInfoResponse = await workdayperson.countries.getInfo({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

#### 🔄 Return<a id="🔄-return"></a>

[PersonCountryViewDefinitionF206795ea40e1000040cc6f5da4f002a](./models/person-country-view-definition-f206795ea40e1000040cc6f5da4f002a.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/countries/{ID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.countries.getNameComponents`<a id="workdaypersoncountriesgetnamecomponents"></a>

Retrieves a collection of configuration information about name components. The Maintain Name Components by Country task enables administrators to configure the allowed and required name components for a country. 

You must specify the required nameConfigurationFormat query parameter.

Secured by: REST API Public

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getNameComponentsResponse =
  await workdayperson.countries.getNameComponents({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### currentName: `string`<a id="currentname-string"></a>

The Workday ID of the person\'s current name being updated.  Required when you use Default Format and a Country using Local Script to get component data for an existing name. Failure to provide this when appropriate may result in incorrect name component data being returned.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### nameConfigurationFormat: `string`<a id="nameconfigurationformat-string"></a>

The Name Configuration Format for which to return values.  Required. Failure to provide this will result in no name components being returned. Available values are: - RECRUITING_FORMAT - The name components specific to Recruiting. - OTHER_FUNCTIONAL_AREAS - The name components for all other functional areas in Workday. Example: nameConfigurationFormat=Name_Configuration_Format_ID=OTHER_FUNCTIONAL_AREAS

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### useWesternScript: `boolean`<a id="usewesternscript-boolean"></a>

If true, this method returns the set of allowed and required name components that uses Western Script.  The default is false.

#### 🔄 Return<a id="🔄-return"></a>

[CountriesGetNameComponentsResponse](./models/countries-get-name-components-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/countries/{ID}/nameComponents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.createEmailAddress`<a id="workdaypersonhomecontactinformationchangescreateemailaddress"></a>

Creates a new email address staged by the parent business process event.

Secured by: Person Data: Home Email, Self-Service: Home Email

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmailAddressResponse =
  await workdayperson.homeContactInformationChanges.createEmailAddress({
    iD: "iD_example",
    emailAddress:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### emailAddress: `string`<a id="emailaddress-string"></a>

The email address.

##### usage: [`Usage6333dee5ac2010000c8653405aaa0038`](./models/usage6333dee5ac2010000c8653405aaa0038.ts)<a id="usage-usage6333dee5ac2010000c8653405aaa0038modelsusage6333dee5ac2010000c8653405aaa0038ts"></a>

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[EmailAddressReference0918d433e86b100018119edc1b8f00f7](./models/email-address-reference0918d433e86b100018119edc1b8f00f7.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/emailAddresses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.createInstantMessenger`<a id="workdaypersonhomecontactinformationchangescreateinstantmessenger"></a>

Creates a new instant messenger staged by the parent business process event.

Secured by: Person Data: Home Instant Messenger, Self-Service: Home Instant Messenger

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createInstantMessengerResponse =
  await workdayperson.homeContactInformationChanges.createInstantMessenger({
    iD: "iD_example",
    userName:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### type: [`TypeDe08a6c876a810000cb2e3dd8853001a`](./models/type-de08a6c876a810000cb2e3dd8853001a.ts)<a id="type-typede08a6c876a810000cb2e3dd8853001amodelstype-de08a6c876a810000cb2e3dd8853001ats"></a>

##### userName: `string`<a id="username-string"></a>

The instant messenger account username.

##### usage: [`UsageDe08a6c876a810000cb2e3d738be0019`](./models/usage-de08a6c876a810000cb2e3d738be0019.ts)<a id="usage-usagede08a6c876a810000cb2e3d738be0019modelsusage-de08a6c876a810000cb2e3d738be0019ts"></a>

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[InstantMessengerReferenceDe08a6c876a810000cb2e38a1d2a0016](./models/instant-messenger-reference-de08a6c876a810000cb2e38a1d2a0016.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/instantMessengers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.createNewAddress`<a id="workdaypersonhomecontactinformationchangescreatenewaddress"></a>

Creates a new address staged by the parent business process event.

Secured by: Person Data: Home Address, Self-Service: Home Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewAddressResponse =
  await workdayperson.homeContactInformationChanges.createNewAddress({
    iD: "iD_example",
    citySubdivision2Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine9:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    citySubdivision1Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine8Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine6:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    effective: "2024-03-23T07:00:00.000Z",
    addressLine3:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    postalCode:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    numberDaysWFH: 1,
    addressLine2Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    cityLocal:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine6Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine1:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    citySubdivision1:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    regionSubdivision2:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    city: "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine4Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    regionSubdivision1:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine7:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine2:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine5:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine9Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine3Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine7Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine1Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine5Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    regionSubdivision1Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine4:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine8:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    citySubdivision2:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### citySubdivision2Local: `string`<a id="citysubdivision2local-string"></a>

City Subdivision 2 - Local

##### addressLine9: `string`<a id="addressline9-string"></a>

Address Line 9

##### citySubdivision1Local: `string`<a id="citysubdivision1local-string"></a>

City Subdivision 1 - Local

##### addressLine8Local: `string`<a id="addressline8local-string"></a>

Local Address Line 8

##### addressLine6: `string`<a id="addressline6-string"></a>

Address Line 6

##### effective: `string`<a id="effective-string"></a>

The date this business process takes effect.

##### addressLine3: `string`<a id="addressline3-string"></a>

Address Line 3

##### postalCode: `string`<a id="postalcode-string"></a>

Postal Code

##### numberDaysWFH: `number`<a id="numberdayswfh-number"></a>

Number of Days WFH

##### addressLine2Local: `string`<a id="addressline2local-string"></a>

Local Address Line 2

##### cityLocal: `string`<a id="citylocal-string"></a>

City - Local

##### addressLine6Local: `string`<a id="addressline6local-string"></a>

Local Address Line 6

##### addressLine1: `string`<a id="addressline1-string"></a>

Address Line 1

##### citySubdivision1: `string`<a id="citysubdivision1-string"></a>

City Subdivision 1

##### regionSubdivision2: `string`<a id="regionsubdivision2-string"></a>

Region Subdivision 2

##### city: `string`<a id="city-string"></a>

City

##### addressLine4Local: `string`<a id="addressline4local-string"></a>

Local Address Line 4

##### regionSubdivision1: `string`<a id="regionsubdivision1-string"></a>

Region Subdivision 1

##### addressLine7: `string`<a id="addressline7-string"></a>

Address Line 7

##### addressLine2: `string`<a id="addressline2-string"></a>

Address Line 2

##### addressLine5: `string`<a id="addressline5-string"></a>

Address Line 5

##### addressLine9Local: `string`<a id="addressline9local-string"></a>

Local Address Line 9

##### addressLine3Local: `string`<a id="addressline3local-string"></a>

Local Address Line 3

##### countryCity: [`CountryCity81f66ab16f7510005c53d89089074844`](./models/country-city81f66ab16f7510005c53d89089074844.ts)<a id="countrycity-countrycity81f66ab16f7510005c53d89089074844modelscountry-city81f66ab16f7510005c53d89089074844ts"></a>

##### addressLine7Local: `string`<a id="addressline7local-string"></a>

Local Address Line 7

##### addressLine1Local: `string`<a id="addressline1local-string"></a>

Local Address Line 1

##### country: [`Country81f66ab16f7510005c53d8fd5f5b4852`](./models/country81f66ab16f7510005c53d8fd5f5b4852.ts)<a id="country-country81f66ab16f7510005c53d8fd5f5b4852modelscountry81f66ab16f7510005c53d8fd5f5b4852ts"></a>

##### countryRegion: [`CountryRegion81f66ab16f7510005c53d8be2fe44847`](./models/country-region81f66ab16f7510005c53d8be2fe44847.ts)<a id="countryregion-countryregion81f66ab16f7510005c53d8be2fe44847modelscountry-region81f66ab16f7510005c53d8be2fe44847ts"></a>

##### addressLine5Local: `string`<a id="addressline5local-string"></a>

Local Address Line 5

##### regionSubdivision1Local: `string`<a id="regionsubdivision1local-string"></a>

Region Subdivision 1 - Local

##### addressLine4: `string`<a id="addressline4-string"></a>

Address Line 4

##### usage: [`Usage81f66ab16f7510005c53d917926f4857`](./models/usage81f66ab16f7510005c53d917926f4857.ts)<a id="usage-usage81f66ab16f7510005c53d917926f4857modelsusage81f66ab16f7510005c53d917926f4857ts"></a>

##### addressLine8: `string`<a id="addressline8-string"></a>

Address Line 8

##### citySubdivision2: `string`<a id="citysubdivision2-string"></a>

City Subdivision 2

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[HomeAddressReference81f66ab16f7510005c53d881876e4843](./models/home-address-reference81f66ab16f7510005c53d881876e4843.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/addresses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.createPhoneNumber`<a id="workdaypersonhomecontactinformationchangescreatephonenumber"></a>

Creates a new phone number staged by the parent business process event.

Secured by: Person Data: Home Phone, Self-Service: Home Phone

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPhoneNumberResponse =
  await workdayperson.homeContactInformationChanges.createPhoneNumber({
    iD: "iD_example",
    extension:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    completePhoneNumber:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### extension: `string`<a id="extension-string"></a>

The phone extension.

##### completePhoneNumber: `string`<a id="completephonenumber-string"></a>

The complete phone number.

##### countryPhoneCode: [`CountryPhoneCode1089da0ab90910000f7089365467088c`](./models/country-phone-code1089da0ab90910000f7089365467088c.ts)<a id="countryphonecode-countryphonecode1089da0ab90910000f7089365467088cmodelscountry-phone-code1089da0ab90910000f7089365467088cts"></a>

##### deviceType: [`DeviceType1089da0ab90910000f7089256c7b0888`](./models/device-type1089da0ab90910000f7089256c7b0888.ts)<a id="devicetype-devicetype1089da0ab90910000f7089256c7b0888modelsdevice-type1089da0ab90910000f7089256c7b0888ts"></a>

##### usage: [`Usage1089da0ab90910000f70892f2de3088a`](./models/usage1089da0ab90910000f70892f2de3088a.ts)<a id="usage-usage1089da0ab90910000f70892f2de3088amodelsusage1089da0ab90910000f70892f2de3088ats"></a>

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[PhoneReference1089da0ab90910000f70891a998b0887](./models/phone-reference1089da0ab90910000f70891a998b0887.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/phoneNumbers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.createWebAddress`<a id="workdaypersonhomecontactinformationchangescreatewebaddress"></a>

Creates a new web address staged by the parent business process event.

Secured by: Person Data: Home Web Address, Self-Service: Home Web Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createWebAddressResponse =
  await workdayperson.homeContactInformationChanges.createWebAddress({
    iD: "iD_example",
    url: "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### usage: [`UsageE357ae6d466510000ce25a08bfe401b3`](./models/usage-e357ae6d466510000ce25a08bfe401b3.ts)<a id="usage-usagee357ae6d466510000ce25a08bfe401b3modelsusage-e357ae6d466510000ce25a08bfe401b3ts"></a>

##### url: `string`<a id="url-string"></a>

The complete URL address for the web address.

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[WebAddressReferenceE357ae6d466510000ce259f323be01b0](./models/web-address-reference-e357ae6d466510000ce259f323be01b0.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/webAddresses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.getAddressAsStaged`<a id="workdaypersonhomecontactinformationchangesgetaddressasstaged"></a>

Retrieve an existing address as it exists when staged by the parent business process.

Secured by: Person Data: Home Address, Self-Service: Home Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAddressAsStagedResponse =
  await workdayperson.homeContactInformationChanges.getAddressAsStaged({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[HomeAddressReference81f66ab16f7510005c53d881876e4843](./models/home-address-reference81f66ab16f7510005c53d881876e4843.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/addresses/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.getAddressesStaged`<a id="workdaypersonhomecontactinformationchangesgetaddressesstaged"></a>

Retrieve all addresses staged for update by the parent business process

Secured by: Person Data: Home Address, Self-Service: Home Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAddressesStagedResponse =
  await workdayperson.homeContactInformationChanges.getAddressesStaged({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

##### usedFor: `string`<a id="usedfor-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[HomeContactInformationChangesGetAddressesStagedResponse](./models/home-contact-information-changes-get-addresses-staged-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/addresses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.getEmailAddress`<a id="workdaypersonhomecontactinformationchangesgetemailaddress"></a>

Retrieve an existing email address as it exists when staged by the parent business process.

Secured by: Person Data: Home Email, Self-Service: Home Email

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmailAddressResponse =
  await workdayperson.homeContactInformationChanges.getEmailAddress({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[EmailAddressReference0918d433e86b100018119edc1b8f00f7](./models/email-address-reference0918d433e86b100018119edc1b8f00f7.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/emailAddresses/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.getEventInformation`<a id="workdaypersonhomecontactinformationchangesgeteventinformation"></a>

Returns basic information about the home contact change event.

Secured by: Change Home Contact Information (REST Service), Person Data: Home Contact Information, Self-Service: Home Contact Information

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEventInformationResponse =
  await workdayperson.homeContactInformationChanges.getEventInformation({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

#### 🔄 Return<a id="🔄-return"></a>

[ChangeContactInformationEvent765b18aa13af1000064a10bf37b800ed](./models/change-contact-information-event765b18aa13af1000064a10bf37b800ed.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.getInstantMessenger`<a id="workdaypersonhomecontactinformationchangesgetinstantmessenger"></a>

Retrieve an existing instant messenger as it exists when staged by the parent business process.

Secured by: Person Data: Home Instant Messenger, Self-Service: Home Instant Messenger

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstantMessengerResponse =
  await workdayperson.homeContactInformationChanges.getInstantMessenger({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[InstantMessengerReferenceDe08a6c876a810000cb2e38a1d2a0016](./models/instant-messenger-reference-de08a6c876a810000cb2e38a1d2a0016.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/instantMessengers/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.getPhoneNumbers`<a id="workdaypersonhomecontactinformationchangesgetphonenumbers"></a>

Retrieve all phone numbers staged for update by the parent business process

Secured by: Person Data: Home Phone, Self-Service: Home Phone

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPhoneNumbersResponse =
  await workdayperson.homeContactInformationChanges.getPhoneNumbers({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

If true, returns only the IDs of the person\'s primary phone numbers.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

If true, returns only the IDs of the person\'s public phone numbers.

##### usageType: `string`<a id="usagetype-string"></a>

Specifies usage type, such as home or work. Only used if the service provides access to multiple usage types from the same endpoint.

##### usedFor: `string`<a id="usedfor-string"></a>

Specifies usage behavior, such as mailing, billing, or shipping. Optional.

#### 🔄 Return<a id="🔄-return"></a>

[HomeContactInformationChangesGetPhoneNumbersResponse](./models/home-contact-information-changes-get-phone-numbers-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/phoneNumbers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.getStagedEmailAddresses`<a id="workdaypersonhomecontactinformationchangesgetstagedemailaddresses"></a>

Retrieve all email addresses staged for update by the parent business process

Secured by: Person Data: Home Email, Self-Service: Home Email

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStagedEmailAddressesResponse =
  await workdayperson.homeContactInformationChanges.getStagedEmailAddresses({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

If true, returns only the IDs of the person\'s primary email addresses.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

If true, returns only the IDs of the person\'s public email addresses.

##### usageType: `string`<a id="usagetype-string"></a>

Specifies usage type, such as home or work. Only used if the service provides access to multiple usage types from the same endpoint.

##### usedFor: `string`<a id="usedfor-string"></a>

Specifies usage behavior, such as mailing, billing, or shipping. Optional.

#### 🔄 Return<a id="🔄-return"></a>

[HomeContactInformationChangesGetStagedEmailAddressesResponse](./models/home-contact-information-changes-get-staged-email-addresses-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/emailAddresses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.getStagedInstantMessengers`<a id="workdaypersonhomecontactinformationchangesgetstagedinstantmessengers"></a>

Retrieve all instant messengers staged for update by the parent business process

Secured by: Person Data: Home Instant Messenger, Self-Service: Home Instant Messenger

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStagedInstantMessengersResponse =
  await workdayperson.homeContactInformationChanges.getStagedInstantMessengers({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

If true, returns only the IDs of the person\'s primary instant messenger account usernames.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

If true, returns only the IDs of the person\'s public instant messenger account usernames.

##### usageType: `string`<a id="usagetype-string"></a>

Specifies usage type, such as home or work. Only used if the service provides access to multiple usage types from the same endpoint.

##### usedFor: `string`<a id="usedfor-string"></a>

Specifies usage behavior, such as mailing, billing, or shipping. Optional.

#### 🔄 Return<a id="🔄-return"></a>

[HomeContactInformationChangesGetStagedInstantMessengersResponse](./models/home-contact-information-changes-get-staged-instant-messengers-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/instantMessengers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.getStagedPhoneNumber`<a id="workdaypersonhomecontactinformationchangesgetstagedphonenumber"></a>

Retrieve an existing phone number as it exists when staged by the parent business process.

Secured by: Person Data: Home Phone, Self-Service: Home Phone

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStagedPhoneNumberResponse =
  await workdayperson.homeContactInformationChanges.getStagedPhoneNumber({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[PhoneReference1089da0ab90910000f70891a998b0887](./models/phone-reference1089da0ab90910000f70891a998b0887.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/phoneNumbers/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.getWebAddress`<a id="workdaypersonhomecontactinformationchangesgetwebaddress"></a>

Retrieve an existing web address as it exists when staged by the parent business process.

Secured by: Person Data: Home Web Address, Self-Service: Home Web Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWebAddressResponse =
  await workdayperson.homeContactInformationChanges.getWebAddress({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[WebAddressReferenceE357ae6d466510000ce259f323be01b0](./models/web-address-reference-e357ae6d466510000ce259f323be01b0.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/webAddresses/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.getWebAddressesStaged`<a id="workdaypersonhomecontactinformationchangesgetwebaddressesstaged"></a>

Retrieve all web addresses staged for update by the parent business process

Secured by: Person Data: Home Web Address, Self-Service: Home Web Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWebAddressesStagedResponse =
  await workdayperson.homeContactInformationChanges.getWebAddressesStaged({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

If true, returns only the IDs of the person\'s primary web addresses.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

If true, returns only the IDs of the person\'s public web addresses.

##### usageType: `string`<a id="usagetype-string"></a>

Specifies usage type, such as home or work. Only used if the service provides access to multiple usage types from the same endpoint.

##### usedFor: `string`<a id="usedfor-string"></a>

Specifies usage behavior, such as mailing, billing, or shipping. Optional.

#### 🔄 Return<a id="🔄-return"></a>

[HomeContactInformationChangesGetWebAddressesStagedResponse](./models/home-contact-information-changes-get-web-addresses-staged-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/webAddresses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.removeAddress`<a id="workdaypersonhomecontactinformationchangesremoveaddress"></a>

Remove the specified address. If this address existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.

Secured by: Person Data: Home Address, Self-Service: Home Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeAddressResponse =
  await workdayperson.homeContactInformationChanges.removeAddress({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/addresses/{subresourceID}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.removeEmailAddress`<a id="workdaypersonhomecontactinformationchangesremoveemailaddress"></a>

Remove the specified email address. If this address existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.

Secured by: Person Data: Home Email, Self-Service: Home Email

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeEmailAddressResponse =
  await workdayperson.homeContactInformationChanges.removeEmailAddress({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/emailAddresses/{subresourceID}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.removeInstantMessenger`<a id="workdaypersonhomecontactinformationchangesremoveinstantmessenger"></a>

Remove the specified instant messenger. If this instant messenger existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.

Secured by: Person Data: Home Instant Messenger, Self-Service: Home Instant Messenger

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeInstantMessengerResponse =
  await workdayperson.homeContactInformationChanges.removeInstantMessenger({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/instantMessengers/{subresourceID}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.removePhoneNumber`<a id="workdaypersonhomecontactinformationchangesremovephonenumber"></a>

Remove the specified phone number. If this address existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.

Secured by: Person Data: Home Phone, Self-Service: Home Phone

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removePhoneNumberResponse =
  await workdayperson.homeContactInformationChanges.removePhoneNumber({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/phoneNumbers/{subresourceID}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.removeWebAddress`<a id="workdaypersonhomecontactinformationchangesremovewebaddress"></a>

Remove the specified web address. If this address existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.

Secured by: Person Data: Home Web Address, Self-Service: Home Web Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeWebAddressResponse =
  await workdayperson.homeContactInformationChanges.removeWebAddress({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/webAddresses/{subresourceID}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.submitChange`<a id="workdaypersonhomecontactinformationchangessubmitchange"></a>

Submits the specified home contact information change ID. 

To submit the Home Contact Change event and initiate the Home Contact Change business process, specify an empty request body: {}.
To save for later, specify this request body:
{
    "businessProcessParameters": {
        "action":{
            "id": "d9e41a8c446c11de98360015c5e6daf6"
        }
    }
}

The action id value is the Workday ID of the Save for Later action. If you submit this endpoint with the Save for Later action, you can no longer edit nor resubmit the Home Contact Change event using the REST APIs. The user with correct permissions can edit and submit the saved Home Contact Change event in the Workday UI.

Secured by: Change Home Contact Information (REST Service)

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submitChangeResponse =
  await workdayperson.homeContactInformationChanges.submitChange({
    iD: "iD_example",
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### businessProcessParameters: [`BusinessProcessParameters83f6f6b7c38d100009c7ad91dd414a16`](./models/business-process-parameters83f6f6b7c38d100009c7ad91dd414a16.ts)<a id="businessprocessparameters-businessprocessparameters83f6f6b7c38d100009c7ad91dd414a16modelsbusiness-process-parameters83f6f6b7c38d100009c7ad91dd414a16ts"></a>

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[ChangeContactInformationEvent765b18aa13af1000064a10bf37b800ed](./models/change-contact-information-event765b18aa13af1000064a10bf37b800ed.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/submit` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.updateAddress`<a id="workdaypersonhomecontactinformationchangesupdateaddress"></a>

Update an existing address that is staged for update by the parent business process event.

Secured by: Person Data: Home Address, Self-Service: Home Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAddressResponse =
  await workdayperson.homeContactInformationChanges.updateAddress({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    citySubdivision2Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine9:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    citySubdivision1Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine8Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine6:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    effective: "2024-03-23T07:00:00.000Z",
    addressLine3:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    postalCode:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    numberDaysWFH: 1,
    addressLine2Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    cityLocal:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine6Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine1:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    citySubdivision1:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    regionSubdivision2:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    city: "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine4Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    regionSubdivision1:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine7:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine2:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine5:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine9Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine3Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine7Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine1Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine5Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    regionSubdivision1Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine4:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine8:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    citySubdivision2:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### citySubdivision2Local: `string`<a id="citysubdivision2local-string"></a>

City Subdivision 2 - Local

##### addressLine9: `string`<a id="addressline9-string"></a>

Address Line 9

##### citySubdivision1Local: `string`<a id="citysubdivision1local-string"></a>

City Subdivision 1 - Local

##### addressLine8Local: `string`<a id="addressline8local-string"></a>

Local Address Line 8

##### addressLine6: `string`<a id="addressline6-string"></a>

Address Line 6

##### effective: `string`<a id="effective-string"></a>

The date this business process takes effect.

##### addressLine3: `string`<a id="addressline3-string"></a>

Address Line 3

##### postalCode: `string`<a id="postalcode-string"></a>

Postal Code

##### numberDaysWFH: `number`<a id="numberdayswfh-number"></a>

Number of Days WFH

##### addressLine2Local: `string`<a id="addressline2local-string"></a>

Local Address Line 2

##### cityLocal: `string`<a id="citylocal-string"></a>

City - Local

##### addressLine6Local: `string`<a id="addressline6local-string"></a>

Local Address Line 6

##### addressLine1: `string`<a id="addressline1-string"></a>

Address Line 1

##### citySubdivision1: `string`<a id="citysubdivision1-string"></a>

City Subdivision 1

##### regionSubdivision2: `string`<a id="regionsubdivision2-string"></a>

Region Subdivision 2

##### city: `string`<a id="city-string"></a>

City

##### addressLine4Local: `string`<a id="addressline4local-string"></a>

Local Address Line 4

##### regionSubdivision1: `string`<a id="regionsubdivision1-string"></a>

Region Subdivision 1

##### addressLine7: `string`<a id="addressline7-string"></a>

Address Line 7

##### addressLine2: `string`<a id="addressline2-string"></a>

Address Line 2

##### addressLine5: `string`<a id="addressline5-string"></a>

Address Line 5

##### addressLine9Local: `string`<a id="addressline9local-string"></a>

Local Address Line 9

##### addressLine3Local: `string`<a id="addressline3local-string"></a>

Local Address Line 3

##### countryCity: [`CountryCity81f66ab16f7510005c53d89089074844`](./models/country-city81f66ab16f7510005c53d89089074844.ts)<a id="countrycity-countrycity81f66ab16f7510005c53d89089074844modelscountry-city81f66ab16f7510005c53d89089074844ts"></a>

##### addressLine7Local: `string`<a id="addressline7local-string"></a>

Local Address Line 7

##### addressLine1Local: `string`<a id="addressline1local-string"></a>

Local Address Line 1

##### country: [`Country81f66ab16f7510005c53d8fd5f5b4852`](./models/country81f66ab16f7510005c53d8fd5f5b4852.ts)<a id="country-country81f66ab16f7510005c53d8fd5f5b4852modelscountry81f66ab16f7510005c53d8fd5f5b4852ts"></a>

##### countryRegion: [`CountryRegion81f66ab16f7510005c53d8be2fe44847`](./models/country-region81f66ab16f7510005c53d8be2fe44847.ts)<a id="countryregion-countryregion81f66ab16f7510005c53d8be2fe44847modelscountry-region81f66ab16f7510005c53d8be2fe44847ts"></a>

##### addressLine5Local: `string`<a id="addressline5local-string"></a>

Local Address Line 5

##### regionSubdivision1Local: `string`<a id="regionsubdivision1local-string"></a>

Region Subdivision 1 - Local

##### addressLine4: `string`<a id="addressline4-string"></a>

Address Line 4

##### usage: [`Usage81f66ab16f7510005c53d917926f4857`](./models/usage81f66ab16f7510005c53d917926f4857.ts)<a id="usage-usage81f66ab16f7510005c53d917926f4857modelsusage81f66ab16f7510005c53d917926f4857ts"></a>

##### addressLine8: `string`<a id="addressline8-string"></a>

Address Line 8

##### citySubdivision2: `string`<a id="citysubdivision2-string"></a>

City Subdivision 2

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[HomeAddressReference81f66ab16f7510005c53d881876e4843](./models/home-address-reference81f66ab16f7510005c53d881876e4843.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/addresses/{subresourceID}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.updateEmailAddress`<a id="workdaypersonhomecontactinformationchangesupdateemailaddress"></a>

Partially update an existing email address that is staged for update by the parent business process event.

Secured by: Person Data: Home Email, Self-Service: Home Email

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmailAddressResponse =
  await workdayperson.homeContactInformationChanges.updateEmailAddress({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    emailAddress:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### emailAddress: `string`<a id="emailaddress-string"></a>

The email address.

##### usage: [`Usage6333dee5ac2010000c8653405aaa0038`](./models/usage6333dee5ac2010000c8653405aaa0038.ts)<a id="usage-usage6333dee5ac2010000c8653405aaa0038modelsusage6333dee5ac2010000c8653405aaa0038ts"></a>

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[EmailAddressReference0918d433e86b100018119edc1b8f00f7](./models/email-address-reference0918d433e86b100018119edc1b8f00f7.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/emailAddresses/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.updateInstantMessenger`<a id="workdaypersonhomecontactinformationchangesupdateinstantmessenger"></a>

Partially update an existing instant messenger that is staged for update by the parent business process event.

Secured by: Person Data: Home Instant Messenger, Self-Service: Home Instant Messenger

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateInstantMessengerResponse =
  await workdayperson.homeContactInformationChanges.updateInstantMessenger({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    userName:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### type: [`TypeDe08a6c876a810000cb2e3dd8853001a`](./models/type-de08a6c876a810000cb2e3dd8853001a.ts)<a id="type-typede08a6c876a810000cb2e3dd8853001amodelstype-de08a6c876a810000cb2e3dd8853001ats"></a>

##### userName: `string`<a id="username-string"></a>

The instant messenger account username.

##### usage: [`UsageDe08a6c876a810000cb2e3d738be0019`](./models/usage-de08a6c876a810000cb2e3d738be0019.ts)<a id="usage-usagede08a6c876a810000cb2e3d738be0019modelsusage-de08a6c876a810000cb2e3d738be0019ts"></a>

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[InstantMessengerReferenceDe08a6c876a810000cb2e38a1d2a0016](./models/instant-messenger-reference-de08a6c876a810000cb2e38a1d2a0016.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/instantMessengers/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.updatePhoneNumber`<a id="workdaypersonhomecontactinformationchangesupdatephonenumber"></a>

Partially update an existing phone number that is staged for update by the parent business process event.

Secured by: Person Data: Home Phone, Self-Service: Home Phone

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePhoneNumberResponse =
  await workdayperson.homeContactInformationChanges.updatePhoneNumber({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    extension:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    completePhoneNumber:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### extension: `string`<a id="extension-string"></a>

The phone extension.

##### completePhoneNumber: `string`<a id="completephonenumber-string"></a>

The complete phone number.

##### countryPhoneCode: [`CountryPhoneCode1089da0ab90910000f7089365467088c`](./models/country-phone-code1089da0ab90910000f7089365467088c.ts)<a id="countryphonecode-countryphonecode1089da0ab90910000f7089365467088cmodelscountry-phone-code1089da0ab90910000f7089365467088cts"></a>

##### deviceType: [`DeviceType1089da0ab90910000f7089256c7b0888`](./models/device-type1089da0ab90910000f7089256c7b0888.ts)<a id="devicetype-devicetype1089da0ab90910000f7089256c7b0888modelsdevice-type1089da0ab90910000f7089256c7b0888ts"></a>

##### usage: [`Usage1089da0ab90910000f70892f2de3088a`](./models/usage1089da0ab90910000f70892f2de3088a.ts)<a id="usage-usage1089da0ab90910000f70892f2de3088amodelsusage1089da0ab90910000f70892f2de3088ats"></a>

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[PhoneReference1089da0ab90910000f70891a998b0887](./models/phone-reference1089da0ab90910000f70891a998b0887.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/phoneNumbers/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.homeContactInformationChanges.updateWebAddress`<a id="workdaypersonhomecontactinformationchangesupdatewebaddress"></a>

Partially update an existing web address that is staged for update by the parent business process event.

Secured by: Person Data: Home Web Address, Self-Service: Home Web Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWebAddressResponse =
  await workdayperson.homeContactInformationChanges.updateWebAddress({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    url: "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### usage: [`UsageE357ae6d466510000ce25a08bfe401b3`](./models/usage-e357ae6d466510000ce25a08bfe401b3.ts)<a id="usage-usagee357ae6d466510000ce25a08bfe401b3modelsusage-e357ae6d466510000ce25a08bfe401b3ts"></a>

##### url: `string`<a id="url-string"></a>

The complete URL address for the web address.

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[WebAddressReferenceE357ae6d466510000ce259f323be01b0](./models/web-address-reference-e357ae6d466510000ce259f323be01b0.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/homeContactInformationChanges/{ID}/webAddresses/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getAdditionalName`<a id="workdaypersonpeoplegetadditionalname"></a>

Retrieves an additional name for the person with the specified ID.

Secured by: Person Data:  Name, Self-Service: Name

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAdditionalNameResponse = await workdayperson.people.getAdditionalName({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[Name33e26848dc0010002f1ae76d63ec0061](./models/name33e26848dc0010002f1ae76d63ec0061.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/additionalNames/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getAdditionalNames`<a id="workdaypersonpeoplegetadditionalnames"></a>

Retrieves all additional names for the person with the specified ID.

Secured by: Person Data:  Name, Self-Service: Name

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAdditionalNamesResponse =
  await workdayperson.people.getAdditionalNames({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleGetAdditionalNamesResponse](./models/people-get-additional-names-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/additionalNames` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getById`<a id="workdaypersonpeoplegetbyid"></a>

Retrieves a person with the specified ID. You can use the returned ID from GET /people or GET /workers as the ID of the person whose information you want to retrieve.

Secured by: REST API Public

Contains attachment(s)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await workdayperson.people.getById({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

#### 🔄 Return<a id="🔄-return"></a>

[PersonRepresentationE451ce2c8b48100007c312f3f72700b3](./models/person-representation-e451ce2c8b48100007c312f3f72700b3.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getHomeAddress`<a id="workdaypersonpeoplegethomeaddress"></a>

Retrieves a home address for the person with the specified ID.

Secured by: Person Data: Home Address, Self-Service: Home Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHomeAddressResponse = await workdayperson.people.getHomeAddress({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[AddressReference9c3ab7b846e4100009e5ec55fa530024](./models/address-reference9c3ab7b846e4100009e5ec55fa530024.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/homeAddresses/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getHomeAddresses`<a id="workdaypersonpeoplegethomeaddresses"></a>

Retrieves all home addresses for the person with the specified ID.

Secured by: Person Data: Home Address, Self-Service: Home Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHomeAddressesResponse = await workdayperson.people.getHomeAddresses({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### effective: `string | Date`<a id="effective-string--date"></a>

The effective date of the person\'s addresses using the yyyy-mm-dd format.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

If true, returns only the IDs of the person\'s primary addresses.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

If true, returns only the IDs of the person\'s public addresses.

##### usedFor: `string`<a id="usedfor-string"></a>

Specifies usage behavior, such as mailing, billing, or shipping. Optional.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleGetHomeAddressesResponse](./models/people-get-home-addresses-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/homeAddresses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getHomeEmail`<a id="workdaypersonpeoplegethomeemail"></a>

Retrieve a home email address for the person with the specified ID.

Secured by: Person Data: Home Email, Self-Service: Home Email

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHomeEmailResponse = await workdayperson.people.getHomeEmail({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[EmailReference9c3ab7b846e41000327e788d9664012a](./models/email-reference9c3ab7b846e41000327e788d9664012a.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/homeEmails/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getHomeEmails`<a id="workdaypersonpeoplegethomeemails"></a>

Retrieve all home email addresses for the person with the specified ID.

Secured by: Person Data: Home Email, Self-Service: Home Email

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHomeEmailsResponse = await workdayperson.people.getHomeEmails({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

If true, returns only the IDs of the person\'s primary email addresses.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

If true, returns only the IDs of the person\'s public email addresses.

##### usedFor: `string`<a id="usedfor-string"></a>

Specifies usage behavior, such as mailing, billing, or shipping. Optional.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleGetHomeEmailsResponse](./models/people-get-home-emails-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/homeEmails` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getHomeInstantMessengerUsername`<a id="workdaypersonpeoplegethomeinstantmessengerusername"></a>

Retrieves a home instant messenger account username for the person with the specified ID.

Secured by: Person Data: Home Instant Messenger, Self-Service: Home Instant Messenger

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHomeInstantMessengerUsernameResponse =
  await workdayperson.people.getHomeInstantMessengerUsername({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[InstantMessengerAccount33e26848dc00100036f723337ebb0132](./models/instant-messenger-account33e26848dc00100036f723337ebb0132.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/homeInstantMessengers/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getHomeInstantMessengers`<a id="workdaypersonpeoplegethomeinstantmessengers"></a>

Retrieves all home instant messenger account usernames for the person with the specified ID.

Secured by: Person Data: Home Instant Messenger, Self-Service: Home Instant Messenger

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHomeInstantMessengersResponse =
  await workdayperson.people.getHomeInstantMessengers({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

If true, returns only the IDs of the person\'s primary instant messenger account usernames.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

If true, returns only the IDs of the person\'s public instant messenger usernames.

##### usedFor: `string`<a id="usedfor-string"></a>

Specifies usage behavior, such as mailing, billing, or shipping. Optional.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleGetHomeInstantMessengersResponse](./models/people-get-home-instant-messengers-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/homeInstantMessengers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getHomePhone`<a id="workdaypersonpeoplegethomephone"></a>

Retrieves a home phone number for the person with the specified ID.

Secured by: Person Data: Home Phone, Self-Service: Home Phone

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHomePhoneResponse = await workdayperson.people.getHomePhone({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[PhoneReferenceDf014bc8b5fa10000af0fe7cb0ab00dd](./models/phone-reference-df014bc8b5fa10000af0fe7cb0ab00dd.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/homePhones/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getHomePhones`<a id="workdaypersonpeoplegethomephones"></a>

Retrieves all home phone numbers for the person with the specified ID.

Secured by: Person Data: Home Phone, Self-Service: Home Phone

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHomePhonesResponse = await workdayperson.people.getHomePhones({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

If true, returns only the IDs of the person\'s primary phone numbers.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

If true, returns only the IDs of the person\'s public phone numbers.

##### usedFor: `string`<a id="usedfor-string"></a>

Specifies usage behavior, such as mailing, billing, or shipping. Optional.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleGetHomePhonesResponse](./models/people-get-home-phones-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/homePhones` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getHomeWebAddress`<a id="workdaypersonpeoplegethomewebaddress"></a>

Retrieves a home web address for the person with the specified ID.

Secured by: Person Data: Home Web Address, Self-Service: Home Web Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHomeWebAddressResponse = await workdayperson.people.getHomeWebAddress({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[WebAddress33e26848dc0010003893a0202ced0165](./models/web-address33e26848dc0010003893a0202ced0165.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/homeWebAddresses/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getHomeWebAddresses`<a id="workdaypersonpeoplegethomewebaddresses"></a>

Retrieves all home web addresses for the person with the specified ID.

Secured by: Person Data: Home Web Address, Self-Service: Home Web Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getHomeWebAddressesResponse =
  await workdayperson.people.getHomeWebAddresses({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

If true, returns only the IDs of the person\'s primary web addresses.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

If true, returns only the IDs of the person\'s public web addresses.

##### usedFor: `string`<a id="usedfor-string"></a>

Specifies usage behavior, such as mailing, billing, or shipping. Optional.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleGetHomeWebAddressesResponse](./models/people-get-home-web-addresses-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/homeWebAddresses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getLegalName`<a id="workdaypersonpeoplegetlegalname"></a>

Retrieves the legal name for the person with the specified ID.

Secured by: Person Data: Legal Name, Self-Service: Legal Name

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLegalNameResponse = await workdayperson.people.getLegalName({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[Name33e26848dc0010002f1ae76d63ec0061](./models/name33e26848dc0010002f1ae76d63ec0061.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/legalName/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getLegalName_0`<a id="workdaypersonpeoplegetlegalname_0"></a>

Retrieves the legal name for the person with the specified ID.

Secured by: Person Data: Legal Name, Self-Service: Legal Name

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLegalName_0Response = await workdayperson.people.getLegalName_0({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleGetLegalNameResponse](./models/people-get-legal-name-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/legalName` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getNamePronunciation`<a id="workdaypersonpeoplegetnamepronunciation"></a>

Retrieves a Audio Name Pronunciation of a Person

Secured by: Person Data: Name Pronunciation

Scope: Personal Data

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getNamePronunciationResponse =
  await workdayperson.people.getNamePronunciation({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[MediaDownload5d5f0fb1184b10000b16f0e5c20f0000](./models/media-download5d5f0fb1184b10000b16f0e5c20f0000.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/audioNamePronunciation/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getNamePronunciations`<a id="workdaypersonpeoplegetnamepronunciations"></a>

Retrieves all Audio Name Pronunciations of a Person

Secured by: Person Data: Name Pronunciation

Scope: Personal Data

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getNamePronunciationsResponse =
  await workdayperson.people.getNamePronunciations({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### currentAudio: `boolean`<a id="currentaudio-boolean"></a>

Download only the currently active audio

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleGetNamePronunciationsResponse](./models/people-get-name-pronunciations-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/audioNamePronunciation` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getPersonById`<a id="workdaypersonpeoplegetpersonbyid"></a>

Retrieves a person of the specified ID.
You can use the returned ID from GET /people or GET /workers as the ID of the person whose information you want to retrieve.
When the person has any person information, for example:home addresses, a hyperlink to the resource of the information will be included in the response.

Secured by: REST API Public

Contains attachment(s)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPersonByIdResponse = await workdayperson.people.getPersonById({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### universalId: `string`<a id="universalid-string"></a>

The Universal ID of the person you want to retrieve.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleGetPersonByIdResponse](./models/people-get-person-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getPersonalInfo`<a id="workdaypersonpeoplegetpersonalinfo"></a>

Retrieves all personal information for the person with the specified ID.

Secured by: Person Data: Personal Information, Self-Service: Personal Information

Scope: Personal Data

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPersonalInfoResponse = await workdayperson.people.getPersonalInfo({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### country: `string`<a id="country-string"></a>

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleGetPersonalInfoResponse](./models/people-get-personal-info-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/personalInformation` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getPersonalInfo_0`<a id="workdaypersonpeoplegetpersonalinfo_0"></a>

Retrieves personal information for the person with the specified ID.

Secured by: Person Data: Personal Information, Self-Service: Personal Information

Scope: Personal Data

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPersonalInfo_0Response = await workdayperson.people.getPersonalInfo_0({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[PersonalInformation414c4cee7d91100023fe329d6f900018](./models/personal-information414c4cee7d91100023fe329d6f900018.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/personalInformation/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getPersonalPhoto`<a id="workdaypersonpeoplegetpersonalphoto"></a>

Retrieves a personal photo for the person with the specified ID.

Secured by: Person Data: Personal Photo, Self-Service: Personal Photo

Scope: Personal Data

Contains attachment(s)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPersonalPhotoResponse = await workdayperson.people.getPersonalPhoto({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[PersonPhoto6b9baf67ce60100007d43c79e7a30011](./models/person-photo6b9baf67ce60100007d43c79e7a30011.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/photos/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getPersonalPhotos`<a id="workdaypersonpeoplegetpersonalphotos"></a>

Retrieves all personal photos for the person with the specified ID.

Secured by: Person Data: Personal Photo, Self-Service: Personal Photo

Scope: Personal Data

Contains attachment(s)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPersonalPhotosResponse = await workdayperson.people.getPersonalPhotos({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleGetPersonalPhotosResponse](./models/people-get-personal-photos-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/photos` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getPreferredName`<a id="workdaypersonpeoplegetpreferredname"></a>

Retrieves the preferred name for the person with the specified ID.

Secured by: Person Data: Preferred Name, Self-Service: Preferred Name

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPreferredNameResponse = await workdayperson.people.getPreferredName({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleGetPreferredNameResponse](./models/people-get-preferred-name-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/preferredName` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getPreferredName_0`<a id="workdaypersonpeoplegetpreferredname_0"></a>

Retrieves the preferred name for the person with the specified ID.

Secured by: Person Data: Preferred Name, Self-Service: Preferred Name

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPreferredName_0Response =
  await workdayperson.people.getPreferredName_0({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[Name33e26848dc0010002f1ae76d63ec0061](./models/name33e26848dc0010002f1ae76d63ec0061.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/preferredName/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getPublicContactInformation`<a id="workdaypersonpeoplegetpubliccontactinformation"></a>

Retrieves public contact information for the person with the specified ID.

Secured by: REST API Public

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPublicContactInformationResponse =
  await workdayperson.people.getPublicContactInformation({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[PersonPublicRepresentationD8f2aecf3d63100016a77ab413a20235](./models/person-public-representation-d8f2aecf3d63100016a77ab413a20235.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/publicContactInformation/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getPublicContactInformation_0`<a id="workdaypersonpeoplegetpubliccontactinformation_0"></a>

Retrieves all public contact information for the person with the specified ID.

Secured by: REST API Public

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPublicContactInformation_0Response =
  await workdayperson.people.getPublicContactInformation_0({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleGetPublicContactInformationResponse](./models/people-get-public-contact-information-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/publicContactInformation` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getWorkAddress`<a id="workdaypersonpeoplegetworkaddress"></a>

Retrieves a work address for the person with the specified ID.

Secured by: Person Data: Work Address, Self-Service: Work Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkAddressResponse = await workdayperson.people.getWorkAddress({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[AddressReference9c3ab7b846e4100009e5ec55fa530024](./models/address-reference9c3ab7b846e4100009e5ec55fa530024.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/workAddresses/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getWorkAddresses`<a id="workdaypersonpeoplegetworkaddresses"></a>

Retrieves all work addresses for the person with the specified ID.

Secured by: Person Data: Work Address, Self-Service: Work Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkAddressesResponse = await workdayperson.people.getWorkAddresses({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### effective: `string | Date`<a id="effective-string--date"></a>

The effective date of the person\'s addresses using the yyyy-mm-dd format.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

If true, returns only the IDs of the person\'s primary addresses.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

If true, returns only the IDs of the person\'s public addresses.

##### usedFor: `string`<a id="usedfor-string"></a>

Specifies usage behavior, such as mailing, billing, or shipping. Optional.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleGetWorkAddressesResponse](./models/people-get-work-addresses-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/workAddresses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getWorkEmail`<a id="workdaypersonpeoplegetworkemail"></a>

Retrieves a work email address for the person with the specified ID.

Secured by: Person Data: Work Email, Self-Service: Work Email

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkEmailResponse = await workdayperson.people.getWorkEmail({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[EmailReference9c3ab7b846e41000327e788d9664012a](./models/email-reference9c3ab7b846e41000327e788d9664012a.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/workEmails/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getWorkEmails`<a id="workdaypersonpeoplegetworkemails"></a>

Retrieves all work email addresses for the person with the specified ID.

Secured by: Person Data: Work Email, Self-Service: Work Email

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkEmailsResponse = await workdayperson.people.getWorkEmails({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

If true, returns only the IDs of the person\'s primary email addresses.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

If true, returns only the IDs of the person\'s public email addresses.

##### usedFor: `string`<a id="usedfor-string"></a>

Specifies usage behavior, such as mailing, billing, or shipping. Optional.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleGetWorkEmailsResponse](./models/people-get-work-emails-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/workEmails` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getWorkInstantMessengerUsername`<a id="workdaypersonpeoplegetworkinstantmessengerusername"></a>

Retrieves a work instant messenger account username for the person with the specified ID.

Secured by: Person Data: Work Instant Messenger, Self-Service: Work Instant Messenger

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkInstantMessengerUsernameResponse =
  await workdayperson.people.getWorkInstantMessengerUsername({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[InstantMessengerAccount33e26848dc00100036f723337ebb0132](./models/instant-messenger-account33e26848dc00100036f723337ebb0132.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/workInstantMessengers/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getWorkInstantMessengerUsernames`<a id="workdaypersonpeoplegetworkinstantmessengerusernames"></a>

Retrieves all work instant messenger account usernames for the person with the specified ID.

Secured by: Person Data: Work Instant Messenger, Self-Service: Work Instant Messenger

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkInstantMessengerUsernamesResponse =
  await workdayperson.people.getWorkInstantMessengerUsernames({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

If true, returns only the IDs of the person\'s primary instant messenger account usernames.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

If true, returns only the IDs of the person\'s public instant messenger usernames.

##### usedFor: `string`<a id="usedfor-string"></a>

Specifies usage behavior, such as mailing, billing, or shipping. Optional.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleGetWorkInstantMessengerUsernamesResponse](./models/people-get-work-instant-messenger-usernames-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/workInstantMessengers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getWorkPhone`<a id="workdaypersonpeoplegetworkphone"></a>

Retrieves a work phone number for the person with the specified ID.

Secured by: Person Data: Work Phone, Self-Service: Work Phone

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkPhoneResponse = await workdayperson.people.getWorkPhone({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[PhoneReferenceDf014bc8b5fa10000af0fe7cb0ab00dd](./models/phone-reference-df014bc8b5fa10000af0fe7cb0ab00dd.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/workPhones/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getWorkPhones`<a id="workdaypersonpeoplegetworkphones"></a>

Retrieves all work phone numbers for the person with the specified ID.

Secured by: Person Data: Work Phone, Self-Service: Work Phone

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkPhonesResponse = await workdayperson.people.getWorkPhones({
  iD: "iD_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

If true, returns only the IDs of the person\'s primary phone numbers.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

If true, returns only the IDs of the person\'s public phone numbers.

##### usedFor: `string`<a id="usedfor-string"></a>

Specifies usage behavior, such as mailing, billing, or shipping. Optional.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleGetWorkPhonesResponse](./models/people-get-work-phones-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/workPhones` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getWorkWebAddress`<a id="workdaypersonpeoplegetworkwebaddress"></a>

Retrieves a work web address for the person with the specified ID.

Secured by: Person Data: Work Web Address, Self-Service: Work Web Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkWebAddressResponse = await workdayperson.people.getWorkWebAddress({
  iD: "iD_example",
  subresourceID: "subresourceID_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[WebAddress33e26848dc0010003893a0202ced0165](./models/web-address33e26848dc0010003893a0202ced0165.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/workWebAddresses/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.people.getWorkWebAddresses`<a id="workdaypersonpeoplegetworkwebaddresses"></a>

Retrieves all work web addresses for the person with the specified ID.

Secured by: Person Data: Work Web Address, Self-Service: Work Web Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWorkWebAddressesResponse =
  await workdayperson.people.getWorkWebAddresses({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

If true, returns only the IDs of the person\'s primary web addresses.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

If true, returns only the IDs of the person\'s public web addresses.

##### usedFor: `string`<a id="usedfor-string"></a>

Specifies usage behavior, such as mailing, billing, or shipping. Optional.

#### 🔄 Return<a id="🔄-return"></a>

[PeopleGetWorkWebAddressesResponse](./models/people-get-work-web-addresses-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/people/{ID}/workWebAddresses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.phoneValidation.validatePhoneNumber`<a id="workdaypersonphonevalidationvalidatephonenumber"></a>

Validates the specified completePhoneNumber in the request body.
The completePhoneNumber field is required in the request body.

If the specified completePhoneNumber is valid, this method returns the 201 response status. If the specified completePhoneNumber is invalid, this method returns the 400 response status with a validation error message. 

This method assumes the Allowed Phone Validations for the country of the phone is enabled on the Tenant Setup - Global configuration.
If the tenant configuration has disabled the Allowed Phone Validations for the associated country, the validation returns as valid.

Secured by: REST API Public

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const validatePhoneNumberResponse =
  await workdayperson.phoneValidation.validatePhoneNumber({
    completePhoneNumber: "+19259519000",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### deviceType: [`DeviceTypeDb1991f2fb091000169c5e28fc0400bb`](./models/device-type-db1991f2fb091000169c5e28fc0400bb.ts)<a id="devicetype-devicetypedb1991f2fb091000169c5e28fc0400bbmodelsdevice-type-db1991f2fb091000169c5e28fc0400bbts"></a>

##### completePhoneNumber: `string`<a id="completephonenumber-string"></a>

The complete phone number.

##### countryPhoneCode: [`CountryPhoneCodeDb1991f2fb091000169c5e0cb7c200b9`](./models/country-phone-code-db1991f2fb091000169c5e0cb7c200b9.ts)<a id="countryphonecode-countryphonecodedb1991f2fb091000169c5e0cb7c200b9modelscountry-phone-code-db1991f2fb091000169c5e0cb7c200b9ts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[PhoneNumberValidationDb1991f2fb091000169c5dfa023800b8](./models/phone-number-validation-db1991f2fb091000169c5dfa023800b8.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/phoneValidation` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.createAddress`<a id="workdaypersonworkcontactinformationchangescreateaddress"></a>

Creates a new address staged by the parent business process event.

Secured by: Person Data: Work Address, Self-Service: Work Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createAddressResponse =
  await workdayperson.workContactInformationChanges.createAddress({
    iD: "iD_example",
    addressLine3:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine8Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    regionSubdivision2:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    cityLocal:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    citySubdivision1Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine6Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine4Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    regionSubdivision1Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine9:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine4:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    citySubdivision1:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine8:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine1:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine5Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine6:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    city: "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine3Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    postalCode:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine9Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine2:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine1Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine7Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine5:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    regionSubdivision1:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine7:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    effective: "2024-03-23T07:00:00.000Z",
    citySubdivision2Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine2Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    citySubdivision2:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### addressLine3: `string`<a id="addressline3-string"></a>

Address Line 3

##### addressLine8Local: `string`<a id="addressline8local-string"></a>

Local Address Line 8

##### regionSubdivision2: `string`<a id="regionsubdivision2-string"></a>

Region Subdivision 2

##### cityLocal: `string`<a id="citylocal-string"></a>

City - Local

##### citySubdivision1Local: `string`<a id="citysubdivision1local-string"></a>

City Subdivision 1 - Local

##### addressLine6Local: `string`<a id="addressline6local-string"></a>

Local Address Line 6

##### addressLine4Local: `string`<a id="addressline4local-string"></a>

Local Address Line 4

##### regionSubdivision1Local: `string`<a id="regionsubdivision1local-string"></a>

Region Subdivision 1 - Local

##### country: [`CountryC1bb9f46f65210002d2fa329fe6700b4`](./models/country-c1bb9f46f65210002d2fa329fe6700b4.ts)<a id="country-countryc1bb9f46f65210002d2fa329fe6700b4modelscountry-c1bb9f46f65210002d2fa329fe6700b4ts"></a>

##### addressLine9: `string`<a id="addressline9-string"></a>

Address Line 9

##### addressLine4: `string`<a id="addressline4-string"></a>

Address Line 4

##### citySubdivision1: `string`<a id="citysubdivision1-string"></a>

City Subdivision 1

##### addressLine8: `string`<a id="addressline8-string"></a>

Address Line 8

##### addressLine1: `string`<a id="addressline1-string"></a>

Address Line 1

##### addressLine5Local: `string`<a id="addressline5local-string"></a>

Local Address Line 5

##### addressLine6: `string`<a id="addressline6-string"></a>

Address Line 6

##### city: `string`<a id="city-string"></a>

City

##### addressLine3Local: `string`<a id="addressline3local-string"></a>

Local Address Line 3

##### postalCode: `string`<a id="postalcode-string"></a>

Postal Code

##### addressLine9Local: `string`<a id="addressline9local-string"></a>

Local Address Line 9

##### addressLine2: `string`<a id="addressline2-string"></a>

Address Line 2

##### addressLine1Local: `string`<a id="addressline1local-string"></a>

Local Address Line 1

##### addressLine7Local: `string`<a id="addressline7local-string"></a>

Local Address Line 7

##### countryRegion: [`CountryRegionC1bb9f46f65210002d2fa322479a00b2`](./models/country-region-c1bb9f46f65210002d2fa322479a00b2.ts)<a id="countryregion-countryregionc1bb9f46f65210002d2fa322479a00b2modelscountry-region-c1bb9f46f65210002d2fa322479a00b2ts"></a>

##### addressLine5: `string`<a id="addressline5-string"></a>

Address Line 5

##### usage: [`UsageC1bb9f46f65210002d2fa2e7babe00a8`](./models/usage-c1bb9f46f65210002d2fa2e7babe00a8.ts)<a id="usage-usagec1bb9f46f65210002d2fa2e7babe00a8modelsusage-c1bb9f46f65210002d2fa2e7babe00a8ts"></a>

##### regionSubdivision1: `string`<a id="regionsubdivision1-string"></a>

Region Subdivision 1

##### addressLine7: `string`<a id="addressline7-string"></a>

Address Line 7

##### effective: `string`<a id="effective-string"></a>

The date this business process takes effect.

##### citySubdivision2Local: `string`<a id="citysubdivision2local-string"></a>

City Subdivision 2 - Local

##### addressLine2Local: `string`<a id="addressline2local-string"></a>

Local Address Line 2

##### countryCity: [`CountryCityC1bb9f46f65210002d2fa2bb24a300a1`](./models/country-city-c1bb9f46f65210002d2fa2bb24a300a1.ts)<a id="countrycity-countrycityc1bb9f46f65210002d2fa2bb24a300a1modelscountry-city-c1bb9f46f65210002d2fa2bb24a300a1ts"></a>

##### citySubdivision2: `string`<a id="citysubdivision2-string"></a>

City Subdivision 2

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[WorkAddressReferenceC1bb9f46f65210002d2fa259a1c10095](./models/work-address-reference-c1bb9f46f65210002d2fa259a1c10095.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/addresses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.createEmailAddress`<a id="workdaypersonworkcontactinformationchangescreateemailaddress"></a>

Creates a new email address staged by the parent business process event.

Secured by: Person Data: Work Email, Self-Service: Work Email

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmailAddressResponse =
  await workdayperson.workContactInformationChanges.createEmailAddress({
    iD: "iD_example",
    emailAddress:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### emailAddress: `string`<a id="emailaddress-string"></a>

The email address.

##### usage: [`Usage6333dee5ac2010000c8653405aaa0038`](./models/usage6333dee5ac2010000c8653405aaa0038.ts)<a id="usage-usage6333dee5ac2010000c8653405aaa0038modelsusage6333dee5ac2010000c8653405aaa0038ts"></a>

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[EmailAddressReference0918d433e86b100018119edc1b8f00f7](./models/email-address-reference0918d433e86b100018119edc1b8f00f7.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/emailAddresses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.createInstantMessenger`<a id="workdaypersonworkcontactinformationchangescreateinstantmessenger"></a>

Creates a new instant messenger staged by the parent business process event.

Secured by: Person Data: Work Instant Messenger, Self-Service: Work Instant Messenger

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createInstantMessengerResponse =
  await workdayperson.workContactInformationChanges.createInstantMessenger({
    iD: "iD_example",
    userName:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### type: [`TypeDe08a6c876a810000cb2e3dd8853001a`](./models/type-de08a6c876a810000cb2e3dd8853001a.ts)<a id="type-typede08a6c876a810000cb2e3dd8853001amodelstype-de08a6c876a810000cb2e3dd8853001ats"></a>

##### userName: `string`<a id="username-string"></a>

The instant messenger account username.

##### usage: [`UsageDe08a6c876a810000cb2e3d738be0019`](./models/usage-de08a6c876a810000cb2e3d738be0019.ts)<a id="usage-usagede08a6c876a810000cb2e3d738be0019modelsusage-de08a6c876a810000cb2e3d738be0019ts"></a>

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[InstantMessengerReferenceDe08a6c876a810000cb2e38a1d2a0016](./models/instant-messenger-reference-de08a6c876a810000cb2e38a1d2a0016.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/instantMessengers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.createPhoneNumber`<a id="workdaypersonworkcontactinformationchangescreatephonenumber"></a>

Creates a new phone number staged by the parent business process event.

Secured by: Person Data: Work Phone, Self-Service: Work Phone

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPhoneNumberResponse =
  await workdayperson.workContactInformationChanges.createPhoneNumber({
    iD: "iD_example",
    extension:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    completePhoneNumber:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### extension: `string`<a id="extension-string"></a>

The phone extension.

##### completePhoneNumber: `string`<a id="completephonenumber-string"></a>

The complete phone number.

##### countryPhoneCode: [`CountryPhoneCode1089da0ab90910000f7089365467088c`](./models/country-phone-code1089da0ab90910000f7089365467088c.ts)<a id="countryphonecode-countryphonecode1089da0ab90910000f7089365467088cmodelscountry-phone-code1089da0ab90910000f7089365467088cts"></a>

##### deviceType: [`DeviceType1089da0ab90910000f7089256c7b0888`](./models/device-type1089da0ab90910000f7089256c7b0888.ts)<a id="devicetype-devicetype1089da0ab90910000f7089256c7b0888modelsdevice-type1089da0ab90910000f7089256c7b0888ts"></a>

##### usage: [`Usage1089da0ab90910000f70892f2de3088a`](./models/usage1089da0ab90910000f70892f2de3088a.ts)<a id="usage-usage1089da0ab90910000f70892f2de3088amodelsusage1089da0ab90910000f70892f2de3088ats"></a>

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[PhoneReference1089da0ab90910000f70891a998b0887](./models/phone-reference1089da0ab90910000f70891a998b0887.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/phoneNumbers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.createStagedWebAddress`<a id="workdaypersonworkcontactinformationchangescreatestagedwebaddress"></a>

Creates a new web address staged by the parent business process event.

Secured by: Person Data: Work Web Address, Self-Service: Work Web Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createStagedWebAddressResponse =
  await workdayperson.workContactInformationChanges.createStagedWebAddress({
    iD: "iD_example",
    url: "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### usage: [`UsageE357ae6d466510000ce25a08bfe401b3`](./models/usage-e357ae6d466510000ce25a08bfe401b3.ts)<a id="usage-usagee357ae6d466510000ce25a08bfe401b3modelsusage-e357ae6d466510000ce25a08bfe401b3ts"></a>

##### url: `string`<a id="url-string"></a>

The complete URL address for the web address.

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[WebAddressReferenceE357ae6d466510000ce259f323be01b0](./models/web-address-reference-e357ae6d466510000ce259f323be01b0.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/webAddresses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.getAddressAsStaged`<a id="workdaypersonworkcontactinformationchangesgetaddressasstaged"></a>

Retrieve an existing address as it exists when staged by the parent business process.

Secured by: Person Data: Work Address, Self-Service: Work Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAddressAsStagedResponse =
  await workdayperson.workContactInformationChanges.getAddressAsStaged({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[WorkAddressReferenceC1bb9f46f65210002d2fa259a1c10095](./models/work-address-reference-c1bb9f46f65210002d2fa259a1c10095.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/addresses/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.getAddressesStaged`<a id="workdaypersonworkcontactinformationchangesgetaddressesstaged"></a>

Retrieve all addresses staged for update by the parent business process

Secured by: Person Data: Work Address, Self-Service: Work Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAddressesStagedResponse =
  await workdayperson.workContactInformationChanges.getAddressesStaged({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

##### usedFor: `string`<a id="usedfor-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WorkContactInformationChangesGetAddressesStagedResponse](./models/work-contact-information-changes-get-addresses-staged-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/addresses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.getEmailAddress`<a id="workdaypersonworkcontactinformationchangesgetemailaddress"></a>

Retrieve an existing email address as it exists when staged by the parent business process.

Secured by: Person Data: Work Email, Self-Service: Work Email

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmailAddressResponse =
  await workdayperson.workContactInformationChanges.getEmailAddress({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[EmailAddressReference0918d433e86b100018119edc1b8f00f7](./models/email-address-reference0918d433e86b100018119edc1b8f00f7.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/emailAddresses/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.getEventInfo`<a id="workdaypersonworkcontactinformationchangesgeteventinfo"></a>

Returns basic information about the work contact change event, as well as the Alternate Work Location staged by the event, if there is one.

Secured by: Change Work Contact Information (REST Service), Person Data: Work Contact Information, Self-Service: Work Contact Information

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEventInfoResponse =
  await workdayperson.workContactInformationChanges.getEventInfo({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

#### 🔄 Return<a id="🔄-return"></a>

[WorkContactChangeEventViewBdfa2c83ea5e10002b70a7e9f69e5d67](./models/work-contact-change-event-view-bdfa2c83ea5e10002b70a7e9f69e5d67.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.getPhoneNumber`<a id="workdaypersonworkcontactinformationchangesgetphonenumber"></a>

Retrieve an existing phone number as it exists when staged by the parent business process.

Secured by: Person Data: Work Phone, Self-Service: Work Phone

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPhoneNumberResponse =
  await workdayperson.workContactInformationChanges.getPhoneNumber({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[PhoneReference1089da0ab90910000f70891a998b0887](./models/phone-reference1089da0ab90910000f70891a998b0887.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/phoneNumbers/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.getPhoneNumbers`<a id="workdaypersonworkcontactinformationchangesgetphonenumbers"></a>

Retrieve all phone numbers staged for update by the parent business process

Secured by: Person Data: Work Phone, Self-Service: Work Phone

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPhoneNumbersResponse =
  await workdayperson.workContactInformationChanges.getPhoneNumbers({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

If true, returns only the IDs of the person\'s primary phone numbers.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

If true, returns only the IDs of the person\'s public phone numbers.

##### usageType: `string`<a id="usagetype-string"></a>

Specifies usage type, such as home or work. Only used if the service provides access to multiple usage types from the same endpoint.

##### usedFor: `string`<a id="usedfor-string"></a>

Specifies usage behavior, such as mailing, billing, or shipping. Optional.

#### 🔄 Return<a id="🔄-return"></a>

[WorkContactInformationChangesGetPhoneNumbersResponse](./models/work-contact-information-changes-get-phone-numbers-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/phoneNumbers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.getStagedEmailAddresses`<a id="workdaypersonworkcontactinformationchangesgetstagedemailaddresses"></a>

Retrieve all email addresses staged for update by the parent business process

Secured by: Person Data: Work Email, Self-Service: Work Email

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStagedEmailAddressesResponse =
  await workdayperson.workContactInformationChanges.getStagedEmailAddresses({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

If true, returns only the IDs of the person\'s primary email addresses.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

If true, returns only the IDs of the person\'s public email addresses.

##### usageType: `string`<a id="usagetype-string"></a>

Specifies usage type, such as home or work. Only used if the service provides access to multiple usage types from the same endpoint.

##### usedFor: `string`<a id="usedfor-string"></a>

Specifies usage behavior, such as mailing, billing, or shipping. Optional.

#### 🔄 Return<a id="🔄-return"></a>

[WorkContactInformationChangesGetStagedEmailAddressesResponse](./models/work-contact-information-changes-get-staged-email-addresses-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/emailAddresses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.getStagedInstantMessenger`<a id="workdaypersonworkcontactinformationchangesgetstagedinstantmessenger"></a>

Retrieve an existing instant messenger as it exists when staged by the parent business process.

Secured by: Person Data: Work Instant Messenger, Self-Service: Work Instant Messenger

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStagedInstantMessengerResponse =
  await workdayperson.workContactInformationChanges.getStagedInstantMessenger({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[InstantMessengerReferenceDe08a6c876a810000cb2e38a1d2a0016](./models/instant-messenger-reference-de08a6c876a810000cb2e38a1d2a0016.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/instantMessengers/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.getStagedInstantMessengers`<a id="workdaypersonworkcontactinformationchangesgetstagedinstantmessengers"></a>

Retrieve all instant messengers staged for update by the parent business process

Secured by: Person Data: Work Instant Messenger, Self-Service: Work Instant Messenger

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStagedInstantMessengersResponse =
  await workdayperson.workContactInformationChanges.getStagedInstantMessengers({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

If true, returns only the IDs of the person\'s primary instant messenger account usernames.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

If true, returns only the IDs of the person\'s public instant messenger account usernames.

##### usageType: `string`<a id="usagetype-string"></a>

Specifies usage type, such as home or work. Only used if the service provides access to multiple usage types from the same endpoint.

##### usedFor: `string`<a id="usedfor-string"></a>

Specifies usage behavior, such as mailing, billing, or shipping. Optional.

#### 🔄 Return<a id="🔄-return"></a>

[WorkContactInformationChangesGetStagedInstantMessengersResponse](./models/work-contact-information-changes-get-staged-instant-messengers-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/instantMessengers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.getWebAddress`<a id="workdaypersonworkcontactinformationchangesgetwebaddress"></a>

Retrieve an existing web address as it exists when staged by the parent business process.

Secured by: Person Data: Work Web Address, Self-Service: Work Web Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWebAddressResponse =
  await workdayperson.workContactInformationChanges.getWebAddress({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🔄 Return<a id="🔄-return"></a>

[WebAddressReferenceE357ae6d466510000ce259f323be01b0](./models/web-address-reference-e357ae6d466510000ce259f323be01b0.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/webAddresses/{subresourceID}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.getWebAddressesStaged`<a id="workdaypersonworkcontactinformationchangesgetwebaddressesstaged"></a>

Retrieve all web addresses staged for update by the parent business process

Secured by: Person Data: Work Web Address, Self-Service: Work Web Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWebAddressesStagedResponse =
  await workdayperson.workContactInformationChanges.getWebAddressesStaged({
    iD: "iD_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### limit: `number`<a id="limit-number"></a>

The maximum number of objects in a single response. The default is 20. The maximum is 100.

##### offset: `number`<a id="offset-number"></a>

The zero-based index of the first object in a response collection. The default is 0. Use offset with the limit parameter to control paging of a response collection. Example: If limit is 5 and offset is 9, the response returns a collection of 5 objects starting with the 10th object.

##### primaryOnly: `boolean`<a id="primaryonly-boolean"></a>

If true, returns only the IDs of the person\'s primary web addresses.

##### publicOnly: `boolean`<a id="publiconly-boolean"></a>

If true, returns only the IDs of the person\'s public web addresses.

##### usageType: `string`<a id="usagetype-string"></a>

Specifies usage type, such as home or work. Only used if the service provides access to multiple usage types from the same endpoint.

##### usedFor: `string`<a id="usedfor-string"></a>

Specifies usage behavior, such as mailing, billing, or shipping. Optional.

#### 🔄 Return<a id="🔄-return"></a>

[WorkContactInformationChangesGetWebAddressesStagedResponse](./models/work-contact-information-changes-get-web-addresses-staged-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/webAddresses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.removeAddress`<a id="workdaypersonworkcontactinformationchangesremoveaddress"></a>

Remove the specified address. If this address existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.

Secured by: Person Data: Work Address, Self-Service: Work Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeAddressResponse =
  await workdayperson.workContactInformationChanges.removeAddress({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/addresses/{subresourceID}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.removeEmailAddress`<a id="workdaypersonworkcontactinformationchangesremoveemailaddress"></a>

Remove the specified email address. If this address existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.

Secured by: Person Data: Work Email, Self-Service: Work Email

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeEmailAddressResponse =
  await workdayperson.workContactInformationChanges.removeEmailAddress({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/emailAddresses/{subresourceID}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.removeInstantMessenger`<a id="workdaypersonworkcontactinformationchangesremoveinstantmessenger"></a>

Remove the specified instant messenger. If this instant messenger existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.

Secured by: Person Data: Work Instant Messenger, Self-Service: Work Instant Messenger

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeInstantMessengerResponse =
  await workdayperson.workContactInformationChanges.removeInstantMessenger({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/instantMessengers/{subresourceID}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.removePhoneNumber`<a id="workdaypersonworkcontactinformationchangesremovephonenumber"></a>

Remove the specified phone number. If this address existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.

Secured by: Person Data: Work Phone, Self-Service: Work Phone

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removePhoneNumberResponse =
  await workdayperson.workContactInformationChanges.removePhoneNumber({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/phoneNumbers/{subresourceID}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.removeWebAddress`<a id="workdaypersonworkcontactinformationchangesremovewebaddress"></a>

Remove the specified web address. If this address existed before the start of the current business process, it won't be removed from the target Person until the parent business process completes.

Secured by: Person Data: Work Web Address, Self-Service: Work Web Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeWebAddressResponse =
  await workdayperson.workContactInformationChanges.removeWebAddress({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/webAddresses/{subresourceID}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.submit`<a id="workdaypersonworkcontactinformationchangessubmit"></a>

Submits the specified work contact information change ID. 

To submit the Work Contact Change event and initiate the Work Contact Change business process, specify an empty request body: {}.
To save for later, specify this request body:
{
    "businessProcessParameters": {
        "action":{
            "id": "d9e41a8c446c11de98360015c5e6daf6"
        }
    }
}

The action id value is the Workday ID of the Save for Later action. If you submit this endpoint with the Save for Later action, you can no longer edit nor resubmit the Work Contact Change event using the REST APIs. The user with correct permissions can edit and submit the saved Work Contact Change event in the Workday UI.

Secured by: Change Work Contact Information (REST Service)

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const submitResponse = await workdayperson.workContactInformationChanges.submit(
  {
    iD: "iD_example",
    descriptor: "Lorem ipsum dolor sit ame",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### businessProcessParameters: [`BusinessProcessParameters83f6f6b7c38d100009c7ad91dd414a16`](./models/business-process-parameters83f6f6b7c38d100009c7ad91dd414a16.ts)<a id="businessprocessparameters-businessprocessparameters83f6f6b7c38d100009c7ad91dd414a16modelsbusiness-process-parameters83f6f6b7c38d100009c7ad91dd414a16ts"></a>

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[ChangeContactInformationEvent765b18aa13af1000064a10bf37b800ed](./models/change-contact-information-event765b18aa13af1000064a10bf37b800ed.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/submit` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.updateAddress`<a id="workdaypersonworkcontactinformationchangesupdateaddress"></a>

Update an existing address that is staged for update by the parent business process event.

Secured by: Person Data: Work Address, Self-Service: Work Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAddressResponse =
  await workdayperson.workContactInformationChanges.updateAddress({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    addressLine3:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine8Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    regionSubdivision2:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    cityLocal:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    citySubdivision1Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine6Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine4Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    regionSubdivision1Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine9:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine4:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    citySubdivision1:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine8:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine1:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine5Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine6:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    city: "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine3Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    postalCode:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine9Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine2:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine1Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine7Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine5:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    regionSubdivision1:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine7:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    effective: "2024-03-23T07:00:00.000Z",
    citySubdivision2Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    addressLine2Local:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    citySubdivision2:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### addressLine3: `string`<a id="addressline3-string"></a>

Address Line 3

##### addressLine8Local: `string`<a id="addressline8local-string"></a>

Local Address Line 8

##### regionSubdivision2: `string`<a id="regionsubdivision2-string"></a>

Region Subdivision 2

##### cityLocal: `string`<a id="citylocal-string"></a>

City - Local

##### citySubdivision1Local: `string`<a id="citysubdivision1local-string"></a>

City Subdivision 1 - Local

##### addressLine6Local: `string`<a id="addressline6local-string"></a>

Local Address Line 6

##### addressLine4Local: `string`<a id="addressline4local-string"></a>

Local Address Line 4

##### regionSubdivision1Local: `string`<a id="regionsubdivision1local-string"></a>

Region Subdivision 1 - Local

##### country: [`CountryC1bb9f46f65210002d2fa329fe6700b4`](./models/country-c1bb9f46f65210002d2fa329fe6700b4.ts)<a id="country-countryc1bb9f46f65210002d2fa329fe6700b4modelscountry-c1bb9f46f65210002d2fa329fe6700b4ts"></a>

##### addressLine9: `string`<a id="addressline9-string"></a>

Address Line 9

##### addressLine4: `string`<a id="addressline4-string"></a>

Address Line 4

##### citySubdivision1: `string`<a id="citysubdivision1-string"></a>

City Subdivision 1

##### addressLine8: `string`<a id="addressline8-string"></a>

Address Line 8

##### addressLine1: `string`<a id="addressline1-string"></a>

Address Line 1

##### addressLine5Local: `string`<a id="addressline5local-string"></a>

Local Address Line 5

##### addressLine6: `string`<a id="addressline6-string"></a>

Address Line 6

##### city: `string`<a id="city-string"></a>

City

##### addressLine3Local: `string`<a id="addressline3local-string"></a>

Local Address Line 3

##### postalCode: `string`<a id="postalcode-string"></a>

Postal Code

##### addressLine9Local: `string`<a id="addressline9local-string"></a>

Local Address Line 9

##### addressLine2: `string`<a id="addressline2-string"></a>

Address Line 2

##### addressLine1Local: `string`<a id="addressline1local-string"></a>

Local Address Line 1

##### addressLine7Local: `string`<a id="addressline7local-string"></a>

Local Address Line 7

##### countryRegion: [`CountryRegionC1bb9f46f65210002d2fa322479a00b2`](./models/country-region-c1bb9f46f65210002d2fa322479a00b2.ts)<a id="countryregion-countryregionc1bb9f46f65210002d2fa322479a00b2modelscountry-region-c1bb9f46f65210002d2fa322479a00b2ts"></a>

##### addressLine5: `string`<a id="addressline5-string"></a>

Address Line 5

##### usage: [`UsageC1bb9f46f65210002d2fa2e7babe00a8`](./models/usage-c1bb9f46f65210002d2fa2e7babe00a8.ts)<a id="usage-usagec1bb9f46f65210002d2fa2e7babe00a8modelsusage-c1bb9f46f65210002d2fa2e7babe00a8ts"></a>

##### regionSubdivision1: `string`<a id="regionsubdivision1-string"></a>

Region Subdivision 1

##### addressLine7: `string`<a id="addressline7-string"></a>

Address Line 7

##### effective: `string`<a id="effective-string"></a>

The date this business process takes effect.

##### citySubdivision2Local: `string`<a id="citysubdivision2local-string"></a>

City Subdivision 2 - Local

##### addressLine2Local: `string`<a id="addressline2local-string"></a>

Local Address Line 2

##### countryCity: [`CountryCityC1bb9f46f65210002d2fa2bb24a300a1`](./models/country-city-c1bb9f46f65210002d2fa2bb24a300a1.ts)<a id="countrycity-countrycityc1bb9f46f65210002d2fa2bb24a300a1modelscountry-city-c1bb9f46f65210002d2fa2bb24a300a1ts"></a>

##### citySubdivision2: `string`<a id="citysubdivision2-string"></a>

City Subdivision 2

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[WorkAddressReferenceC1bb9f46f65210002d2fa259a1c10095](./models/work-address-reference-c1bb9f46f65210002d2fa259a1c10095.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/addresses/{subresourceID}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.updateAlternateWorkLocation`<a id="workdaypersonworkcontactinformationchangesupdatealternateworklocation"></a>

Update the Alternate Work Location staged by this business process event.   Any Home or Work address for the target Person is valid for use as an Alternate Work Location.

Secured by: Person Data: Work Address, Self-Service: Work Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAlternateWorkLocationResponse =
  await workdayperson.workContactInformationChanges.updateAlternateWorkLocation(
    {
      iD: "iD_example",
      descriptor: "Lorem ipsum dolor sit ame",
    }
  );
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### alternateWorkLocation: [`AlternateWorkLocationD72a8353f91e1000169a83b894e7046e`](./models/alternate-work-location-d72a8353f91e1000169a83b894e7046e.ts)<a id="alternateworklocation-alternateworklocationd72a8353f91e1000169a83b894e7046emodelsalternate-work-location-d72a8353f91e1000169a83b894e7046ets"></a>

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[WorkContactChangeEventD72a8353f91e1000169a839c31a0046d](./models/work-contact-change-event-d72a8353f91e1000169a839c31a0046d.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.updateEmailAddress`<a id="workdaypersonworkcontactinformationchangesupdateemailaddress"></a>

Partially update an existing email address that is staged for update by the parent business process event.

Secured by: Person Data: Work Email, Self-Service: Work Email

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmailAddressResponse =
  await workdayperson.workContactInformationChanges.updateEmailAddress({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    emailAddress:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### emailAddress: `string`<a id="emailaddress-string"></a>

The email address.

##### usage: [`Usage6333dee5ac2010000c8653405aaa0038`](./models/usage6333dee5ac2010000c8653405aaa0038.ts)<a id="usage-usage6333dee5ac2010000c8653405aaa0038modelsusage6333dee5ac2010000c8653405aaa0038ts"></a>

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[EmailAddressReference0918d433e86b100018119edc1b8f00f7](./models/email-address-reference0918d433e86b100018119edc1b8f00f7.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/emailAddresses/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.updateInstantMessenger`<a id="workdaypersonworkcontactinformationchangesupdateinstantmessenger"></a>

Partially update an existing instant messenger that is staged for update by the parent business process event.

Secured by: Person Data: Work Instant Messenger, Self-Service: Work Instant Messenger

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateInstantMessengerResponse =
  await workdayperson.workContactInformationChanges.updateInstantMessenger({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    userName:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### type: [`TypeDe08a6c876a810000cb2e3dd8853001a`](./models/type-de08a6c876a810000cb2e3dd8853001a.ts)<a id="type-typede08a6c876a810000cb2e3dd8853001amodelstype-de08a6c876a810000cb2e3dd8853001ats"></a>

##### userName: `string`<a id="username-string"></a>

The instant messenger account username.

##### usage: [`UsageDe08a6c876a810000cb2e3d738be0019`](./models/usage-de08a6c876a810000cb2e3d738be0019.ts)<a id="usage-usagede08a6c876a810000cb2e3d738be0019modelsusage-de08a6c876a810000cb2e3d738be0019ts"></a>

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[InstantMessengerReferenceDe08a6c876a810000cb2e38a1d2a0016](./models/instant-messenger-reference-de08a6c876a810000cb2e38a1d2a0016.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/instantMessengers/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.updatePhoneNumber`<a id="workdaypersonworkcontactinformationchangesupdatephonenumber"></a>

Partially update an existing phone number that is staged for update by the parent business process event.

Secured by: Person Data: Work Phone, Self-Service: Work Phone

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePhoneNumberResponse =
  await workdayperson.workContactInformationChanges.updatePhoneNumber({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    extension:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    completePhoneNumber:
      "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
    descriptor: "Lorem ipsum dolor sit ame",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### extension: `string`<a id="extension-string"></a>

The phone extension.

##### completePhoneNumber: `string`<a id="completephonenumber-string"></a>

The complete phone number.

##### countryPhoneCode: [`CountryPhoneCode1089da0ab90910000f7089365467088c`](./models/country-phone-code1089da0ab90910000f7089365467088c.ts)<a id="countryphonecode-countryphonecode1089da0ab90910000f7089365467088cmodelscountry-phone-code1089da0ab90910000f7089365467088cts"></a>

##### deviceType: [`DeviceType1089da0ab90910000f7089256c7b0888`](./models/device-type1089da0ab90910000f7089256c7b0888.ts)<a id="devicetype-devicetype1089da0ab90910000f7089256c7b0888modelsdevice-type1089da0ab90910000f7089256c7b0888ts"></a>

##### usage: [`Usage1089da0ab90910000f70892f2de3088a`](./models/usage1089da0ab90910000f70892f2de3088a.ts)<a id="usage-usage1089da0ab90910000f70892f2de3088amodelsusage1089da0ab90910000f70892f2de3088ats"></a>

##### descriptor: `string`<a id="descriptor-string"></a>

A preview of the instance

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[PhoneReference1089da0ab90910000f70891a998b0887](./models/phone-reference1089da0ab90910000f70891a998b0887.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/phoneNumbers/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `workdayperson.workContactInformationChanges.updateWebAddress`<a id="workdaypersonworkcontactinformationchangesupdatewebaddress"></a>

Partially update an existing web address that is staged for update by the parent business process event.

Secured by: Person Data: Work Web Address, Self-Service: Work Web Address

Scope: Contact Information

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWebAddressResponse =
  await workdayperson.workContactInformationChanges.updateWebAddress({
    iD: "iD_example",
    subresourceID: "subresourceID_example",
    url: "Lorem ipsum dolor sit amet, cum choro singulis consectetuer ut, ubique iisque contentiones ex duo. Quo lorem etiam eu.",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### iD: `string`<a id="id-string"></a>

The Workday ID of the resource.

##### subresourceID: `string`<a id="subresourceid-string"></a>

The Workday ID of the subresource.

##### usage: [`UsageE357ae6d466510000ce25a08bfe401b3`](./models/usage-e357ae6d466510000ce25a08bfe401b3.ts)<a id="usage-usagee357ae6d466510000ce25a08bfe401b3modelsusage-e357ae6d466510000ce25a08bfe401b3ts"></a>

##### url: `string`<a id="url-string"></a>

The complete URL address for the web address.

##### id: `string`<a id="id-string"></a>

Id of the instance

#### 🔄 Return<a id="🔄-return"></a>

[WebAddressReferenceE357ae6d466510000ce259f323be01b0](./models/web-address-reference-e357ae6d466510000ce259f323be01b0.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/workContactInformationChanges/{ID}/webAddresses/{subresourceID}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
