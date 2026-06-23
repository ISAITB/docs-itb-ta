The **updateStatementProperty** operation is used to update the definition of a conformance statement (actor) property. To use it make an HTTP ``POST`` to path ``/api/rest/configure/actor``,
setting ``{actor}`` with the API key of the target specification actor. In addition, you need to include in your request an HTTP header named ``ITB-API-KEY`` set to a **community API key**.
This API key identifies a community that has access to manage the domain in question, either by being directly linked to it or by being linked to no domain.

When calling this operation all input properties are optional except for the ``key`` that is used to identify the target property. For all other properties you specify the ones that you want to update,
and for those that are to be left unchanged you don't include them. In case you want to remove a value you would specify the property in question as an empty string.

The following example illustrates an update of a conformance statement property's ``description``, leaving other information unchanged:

.. code-block:: json

  {
    "key": "apiEndpoint",
    "description": "The API endpoint root."
  }

In case you want to altogether remove a value, you specify it as an empty string or array (depending on its type):

.. code-block:: json

  {
    "key": "encrypt",
    "allowedValues": [],
    "defaultValue": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__configuration__updateSystemProperty__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__configuration__updateStatementProperty__request:

updateStatementProperty - request schema
++++++++++++++++++++++++++++++++++++++++

The payload of the **updateStatementProperty** operation's request is defined by the following JSON Schema:

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
