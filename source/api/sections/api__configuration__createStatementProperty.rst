The **createStatementProperty** operation is used to define a new conformance statement (actor) property for a community. To use it make an HTTP ``PUT`` to path ``/api/rest/configure/actor/{actor}``,
setting ``{actor}`` with the API key of the target specification actor. In addition, you need to include in your request an HTTP header named ``ITB-API-KEY`` set to a **community API key**.
This API key identifies a community that has access to manage the domain in question, either by being directly linked to it or by being linked to no domain.

In the request's body you specify the information of the conformance statement property, of which the ``key`` is mandatory. The full set of information you can set for the property is defined
in the payload's :ref:`schema <api__configuration__createStatementProperty__request>`.

The following example shows how you can create a conformance statement property with the provided data:

.. code-block:: json

  {
    "key": "apiEndpoint",
    "name": "API endpoint",
    "description": "The API endpoint to send messages to.",
    "required": true,
    "editableByUsers": true,
    "inTests": true
  }

Other more advanced options include specifying the property's allowed values, default value, and dependencies. In the latter case, ``dependsOn`` is set with the key of the property
that the current one depends upon:

.. code-block:: json

  {
    "key": "encrypt",
    "name": "Encrypted endpoint",
    "description": "Whether the provided endpoint is encrypted.",
    "required": true,
    "editableByUsers": true,
    "inTests": true,
    "allowedValues": [
      { "value": "Y", "label": "Yes" },
      { "value": "N", "label": "No" }
    ],
    "defaultValue": "Y",
    "dependsOn": "apiEndpoint"
  }

Calling this operation, the Test Bed will create the property and respond with a ``200`` (OK) response if successful.

.. _api__configuration__createStatementProperty__request:

createStatementProperty - request schema
++++++++++++++++++++++++++++++++++++++++

The payload of the **createStatementProperty** operation's request is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-statementPropertyInfo_request.schema.json

   {
       "$id": "https://www.itb.ec.europa.eu/api/statementPropertyInfo_request",
       "$schema": "http://json-schema.org/draft-07/schema#",
       "description": "JSON schema for the createStatementProperty and updateStatementProperty operation request payloads",
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
               "description": "The default value of the property when a new conformance statement is created.",
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
