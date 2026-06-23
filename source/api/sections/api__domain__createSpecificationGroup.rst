The **createSpecificationGroup** operation is used to create a new specification group. To use it make an HTTP ``PUT`` to path ``/api/rest/group``
and include in your request an HTTP header named ``ITB-API-KEY`` set to a **community API key**. This API key identifies the community
that is able to manage the group's domain, either by being directly linked to it or being linked to no domain.

In the request's body you specify the information of the new specification group, of which the ``shortName`` and ``fullName`` are mandatory as defined
in the payload's :ref:`schema <api__domain__createSpecificationGroup__request>`. In case the community identified by the ``ITB-API-KEY`` header
is not linked to a specific domain, you will need to also specify the ``domain`` property with the target domain's API key.

The following example shows how you can create a specification group with the provided data:

.. code-block:: json

  {
    "shortName": "Data package",
    "fullName": "Data package specification"
  }

Calling this operation, the Test Bed will create the specification group and respond with its assigned API key:

.. code-block:: json

  {
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

It is possible to avoid the automatic API key assignment by defining an API key to use as part of the input. This could
be useful if you are configuring a Test Bed instance based on fixed data and you want to ensure assigned API keys have specific, known values.

.. code-block:: json

  {
    "shortName": "Data package",
    "fullName": "Data package specification",
    "apiKey": "A_FIXED_API_KEY_FOR_THE_GROUP"
  }

In this case the Test Bed will use the provided API key unless it is found to already exist, in which case a new one will be generated instead. Regardless,
the operation will still report the API key that was assigned.

.. _api__domain__createSpecificationGroup__request:

createSpecificationGroup - request schema
+++++++++++++++++++++++++++++++++++++++++

The payload of the **createSpecificationGroup** operation's request is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-createSpecificationGroup_request.schema.json

   {
       "$id": "https://www.itb.ec.europa.eu/api/createSpecificationGroup_request",
       "$schema": "http://json-schema.org/draft-07/schema#",
       "description": "JSON schema for the createSpecificationGroup operation request payload",
       "type": "object",
       "properties": {
           "shortName": {
               "description": "The group's short name.",
               "type": "string"
           },
           "fullName": {
               "description": "The group's full name.",
               "type": "string"
           },
           "description": {
               "description": "The group's description.",
               "type": "string"
           },
           "reportMetadata": {
               "description": "The group's additional metadata for XML reports.",
               "type": "string"
           },
           "displayOrder": {
               "description": "The group's display order relative to other groups and specifications.",
               "type": "number"
           },
           "apiKey": {
               "description": "The API key to set for the group. If this key is already assigned, a new one will be generated.",
               "type": "string"
           },
           "domain": {
               "description": "The API key of the domain within which to create the group. This can be omitted if the community identified by the community API key used for authorisation is linked to a specific domain.",
               "type": "string"
           }
       },
       "required": [
           "shortName",
           "fullName"
       ],
       "additionalProperties": false
     }

.. _api__domain__createSpecificationGroup__response:

createSpecificationGroup - response schema
++++++++++++++++++++++++++++++++++++++++++

The payload of the **createSpecificationGroup** operation's response is defined by the following JSON Schema:

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
