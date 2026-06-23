The **createTestService** operation is used to define a new test service. To use it make an HTTP ``PUT`` to path ``/api/rest/configure/service``
and include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**. This API key identifies a community
that has access to manage the domain in question, either by being directly linked to it or by being linked to no domain.

In the request's body you specify the information of the test service, of which the ``key``, ``address`` and ``serviceType`` are mandatory as defined
in the payload's :ref:`schema <api__configuration__createTestService__request>`. In case the target domain cannot be determined by the community
linked to the provided ``ITB-API-KEY``, you also need to specify the ``domain`` property, set with the API key of the target domain.

The following example shows how you can create a test service with the provided data:

.. code-block:: json

  {
    "key": "validationService",
    "address": "http://test-services/services/validation?wsdl",
    "serviceType": "validation",
    "description": "The validation service used to validate purchase orders."
  }

Calling this operation, the Test Bed will create the property and respond with a ``200`` (OK) response if successful.

.. _api__configuration__createTestService__request:

createTestService - request schema
++++++++++++++++++++++++++++++++++

The payload of the **createTestService** operation's request is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-createTestService_request.schema.json

   {
       "$id": "https://www.itb.ec.europa.eu/api/createTestService_request",
       "$schema": "http://json-schema.org/draft-07/schema#",
       "description": "JSON schema for the createTestService operation request payload",
       "type": "object",
     "properties": {
       "key": {
         "description": "The unique key used to identify the service and its underlying domain parameter.",
         "type": "string"
       },
       "address": {
         "description": "The service's address as an absolute HTTP URL.",
         "type": "string"
       },
       "description": {
         "description": "The service's description.",
         "type": "string"
       },
       "serviceType": {
         "description": "The type of the service.",
         "type": "string",
         "enum": ["messaging", "validation", "processing"]
       },
       "apiType": {
         "description": "The API type of the service.",
         "type": "string",
         "enum": ["soap", "rest"],
         "default": "soap"
       },
       "authBasicUsername": {
         "description": "When HTTP basic authentication is used, this is the username to use.",
         "type": "string"
       },
       "authBasicPassword": {
         "description": "When HTTP basic authentication is used, this is the password to use.",
         "type": "string"
       },
       "authTokenUsername": {
         "description": "When the WS-Security UsernameToken profile is used, this is the username to use.",
         "type": "string"
       },
       "authTokenPassword": {
         "description": "When the WS-Security UsernameToken profile is used, this is the password to use.",
         "type": "string"
       },
       "authTokenPasswordType": {
         "description": "When the WS-Security UsernameToken profile is used, this is the type of password provision to use.",
         "type": "string",
         "enum": ["digest", "text"]
       },
       "identifier": {
         "description": "The service's reference identifier.",
         "type": "string"
       },
       "version": {
         "description": "The service's version.",
         "type": "string"
       },
       "domain": {
         "description": "The API key identifying the domain of the service. This is required if the community API key used for authentication refers to a community that is not linked to a specific domain.",
         "type": "string"
       },
       "replaceExisting": {
         "description": "In case the service information matches an existing domain parameter, this flag can be used to link the parameter with the service's definition.",
         "type": "boolean"
       }
     },
     "required": [
       "key",
       "address",
       "serviceType"
     ],
     "additionalProperties": false
   }
