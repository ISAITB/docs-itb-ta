The **createOrganisationProperty** operation is used to define a new organisation property for a community. To use it make an HTTP ``PUT`` to path ``/api/rest/configure/organisation``
and include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**.

In the request's body you specify the information of the organisation property, of which the ``key`` is mandatory. The full set of information you can set for the property is defined
in the payload's :ref:`schema <api__configuration__createOrganisationProperty__request>`.

The following example shows how you can create an organisation property with the provided data:

.. code-block:: json

  {
    "key": "vatNumber",
    "name": "VAT number",
    "description": "The VAT number of the supplier.",
    "required": true,
    "editableByUsers": true,
    "inTests": true
  }

Other more advanced options include specifying the property's allowed values, default value, and dependencies. In the latter case, ``dependsOn`` is set with the key of the property
that the current one depends upon:

.. code-block:: json

  {
    "key": "vatType",
    "name": "VAT regime",
    "description": "The VAT regime the suppler is subject to.",
    "required": true,
    "editableByUsers": true,
    "inTests": true,
    "allowedValues": [
      { "value": "full", "label": "Full regime" },
      { "value": "minimal", "label": "Minimal regime" },
      { "value": "none", "label": "Exempt" }
    ],
    "defaultValue": "full",
    "dependsOn": "considerTax",
    "dependsOnValue": "Y"
  }

Calling this operation, the Test Bed will create the property and respond with a ``200`` (OK) response if successful.

.. _api__configuration__createOrganisationProperty__request:

createOrganisationProperty - request schema
+++++++++++++++++++++++++++++++++++++++++++

The payload of the **createOrganisationProperty** operation's request is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-organisationPropertyInfo_request.schema.json

   {
       "$id": "https://www.itb.ec.europa.eu/api/organisationPropertyInfo_request",
       "$schema": "http://json-schema.org/draft-07/schema#",
       "description": "JSON schema for the createOrganisationProperty and updateOrganisationProperty operation request payloads",
       "type": "object",
       "properties": {
           "key": {
               "description": "The unique key used to identify the property.",
               "type": "string"
           },
           "name": {
               "description": "The property's name. If not set this will be the same as the property's key.",
               "type": "string"
           },
           "description": {
               "description": "The property's description.",
               "type": "string"
           },
           "required": {
               "description": "Whether the property must be set before executing test sessions.",
               "type": "boolean",
               "default": true
           },
           "editableByUsers": {
               "description": "Whether the property can be set by organisation users.",
               "type": "boolean",
               "default": true
           },
           "inTests": {
               "description": "Whether the property should be exposed to test sessions.",
               "type": "boolean",
               "default": false
           },
           "inExports": {
               "description": "Whether the property should be included in exports.",
               "type": "boolean",
               "default": false
           },
           "inSelfRegistration": {
               "description": "Whether the property should be requested during self-registration.",
               "type": "boolean",
               "default": false
           },
           "hidden": {
               "description": "Whether the property should be hidden from organisation users.",
               "type": "boolean",
               "default": false
           },
           "allowedValues": {
               "description": "The list of allowed values for the property.",
               "type": "array",
               "items": {
                   "$ref": "#/definitions/allowedPropertyValue"
               }
           },
           "displayOrder": {
               "description": "The display order of the property when presented to users.",
               "type": "number"
           },
           "dependsOn": {
               "description": "The key of another property upon which this property's applicability depends on (see also dependsOnValue).",
               "type": "string"
           },
           "dependsOnValue": {
               "description": "If the dependsOn property is set, this is the value that the referred-to property needs to have for this property to be considered applicable.",
               "type": "string"
           },
           "defaultValue": {
               "description": "The default value of the property when a new organisation is created.",
               "type": "string"
           }
       },
       "required": [
           "key"
       ],
       "additionalProperties": false,
       "definitions": {
           "allowedPropertyValue": {
               "description": "An entry for a configuration property representing an allowed value and its display label.",
               "type": "object",
               "properties": {
                   "value": {
                       "description": "The property value.",
                       "type": "string"
                   },
                   "label": {
                       "description": "The property's display label.",
                       "type": "string"
                   }
               },
               "required": [
                   "value",
                   "label"
               ],
               "additionalProperties": false
           }
       }
   }
