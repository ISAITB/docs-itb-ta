The **updateTestService** operation is used to update the definition of a test service. To use it make an HTTP ``POST`` to path ``/api/rest/configure/service``
and include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**. This API key identifies a community
that has access to manage the domain in question, either by being directly linked to it or by being linked to no domain.

When calling this operation all input properties are optional except for the ``key`` that is used to identify the target service. In addition, providing ``domain``
and setting it with a domain API key might be needed, in case the relevant domain cannot be determined. For all other properties you specify the ones that you want to update,
and for those that are to be left unchanged you don't include them. In case you want to remove a value you would specify the property in question as an empty string.

The following example illustrates an update of a test service's ``description``, leaving other information unchanged:

.. code-block:: json

  {
    "key": "validationService",
    "description": "The validation service used to validate purchase orders."
  }

In case you want to altogether remove a value, you specify it as an empty string:

.. code-block:: json

  {
    "key": "validationService",
    "description": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__configuration__updateTestService__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__configuration__updateTestService__request:

updateTestService - request schema
++++++++++++++++++++++++++++++++++

The payload of the **updateTestService** operation's request is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-updateTestService_request.schema.json

   {
       "$id": "https://www.itb.ec.europa.eu/api/updateTestService_request",
       "$schema": "http://json-schema.org/draft-07/schema#",
       "description": "JSON schema for the updateTestService operation request payload",
       "type": "object",
     "properties": {
       "key": {
         "description": "The unique key used to identify the service and its underlying domain parameter.",
         "type": "string"
       },
       "address": {
         "description": "The new address to apply for the service. Skip this if no update should be made.",
         "type": "string"
       },
       "description": {
         "description": "The service's description. Skip this if no update should be made.",
         "type": "string"
       },
       "serviceType": {
         "description": "The type of the service. Skip this if no update should be made.",
         "type": "string",
         "enum": ["messaging", "validation", "processing"]
       },
       "apiType": {
         "description": "The API type of the service. Skip this if no update should be made.",
         "type": "string",
         "enum": ["soap", "rest"],
         "default": "soap"
       },
       "authBasicUsername": {
         "description": "When HTTP basic authentication is used, this is the username to use. Skip this if no update should be made or set with an empty string to delete all basic authentication information.",
         "type": "string"
       },
       "authBasicPassword": {
         "description": "When HTTP basic authentication is used, this is the password to use. Skip this if no update should be made.",
         "type": "string"
       },
       "authTokenUsername": {
         "description": "When the WS-Security UsernameToken profile is used, this is the username to use. Skip this if no update should be made or set with an empty string to delete all token authentication information.",
         "type": "string"
       },
       "authTokenPassword": {
         "description": "When the WS-Security UsernameToken profile is used, this is the password to use. Skip this if no update should be made.",
         "type": "string"
       },
       "authTokenPasswordType": {
         "description": "When the WS-Security UsernameToken profile is used, this is the type of password provision to use. Skip this if no update should be made.",
         "type": "string",
         "enum": ["digest", "text"]
       },
       "identifier": {
         "description": "The service's reference identifier. Skip this if no update should be made or set with an empty string to delete the existing value.",
         "type": "string"
       },
       "version": {
         "description": "The service's version. Skip this if no update should be made or set with an empty string to delete the existing value.",
         "type": "string"
       },
       "domain": {
         "description": "The API key identifying the domain of the service. This is required if the community API key used for authentication refers to a community that is not linked to a specific domain.",
         "type": "string"
       }
     },
     "required": [
       "key"
     ],
     "additionalProperties": false
   }
