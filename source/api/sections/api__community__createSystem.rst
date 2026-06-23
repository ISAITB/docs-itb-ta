The **createSystem** operation is used to create a new system. To use it make an HTTP ``PUT`` to path ``/api/rest/system``
and include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**. This API key identifies the community
within which the system will be created.

In the request's body you specify the information of the new system, of which the ``shortName`` and ``fullName`` are mandatory as defined
in the payload's :ref:`schema <api__community__createSystem__request>`. In addition, you must include the ``organisation`` within which
the system will be created, setting its value to the organisation's API key.

The following example shows how you can create a system under a given organisation with the provided data:

.. code-block:: json

  {
    "shortName": "PS",
    "fullName": "Purchasing system",
    "description": "ACME's flagship purchasing solution.",
    "version": "v1.0",
    "organisation": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

Calling this operation, the Test Bed will create the system and respond with its assigned API key:

.. code-block:: json

  {
    "apiKey": "3F471BA2XDD33X4FCEX8045X1D8039E6B92A"
  }

It is possible to avoid the automatic API key assignment by defining an API key to use as part of the input. This could
be useful if you are configuring a Test Bed instance based on fixed data and you want to ensure assigned API keys have specific, known values.

.. code-block:: json

  {
    "shortName": "PS",
    "fullName": "Purchasing system",
    "apiKey": "A_FIXED_API_KEY_FOR_THE_SYSTEM"
  }

In this case the Test Bed will use the provided API key unless it is found to already exist, in which case a new one will be generated instead. Regardless,
the operation will still report the API key that was assigned.

.. _api__community__createSystem__request:

createSystem - request schema
+++++++++++++++++++++++++++++

The payload of the **createSystem** operation's request is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-createSystem_request.schema.json

   {
       "$id": "https://www.itb.ec.europa.eu/api/createSystem_request",
       "$schema": "http://json-schema.org/draft-07/schema#",
       "description": "JSON schema for the createSystem operation request payload",
       "type": "object",
       "properties": {
           "shortName": {
               "description": "The system's short name.",
               "type": "string"
           },
           "fullName": {
               "description": "The system's full name.",
               "type": "string"
           },
           "description": {
               "description": "The system's description.",
               "type": "string"
           },
           "version": {
               "description": "The system's version information.",
               "type": "string"
           },
           "apiKey": {
               "description": "The API key to set for the system. If this key is already assigned, a new one will be generated.",
               "type": "string"
           },
           "organisation": {
               "description": "The API key identifying the organisation in which to create the system.",
               "type": "string"
           }
       },
       "required": [
           "shortName",
           "fullName",
           "organisation"
       ],
       "additionalProperties": false
   }

.. _api__community__createSystem__response:

createSystem - response schema
++++++++++++++++++++++++++++++

The payload of the **createSystem** operation's response is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-apiKey_response.schema.json

   {
       "$id": "https://www.itb.ec.europa.eu/api/apiKey_response",
       "$schema": "http://json-schema.org/draft-07/schema#",
       "description": "JSON schema to signal an assigned API key response",
       "type": "object",
       "properties": {
           "apiKey": {
             "description": "The API key value.",
             "type": "string"
           }
         },
         "required": [
           "apiKey"
         ],
         "additionalProperties": false
     }
