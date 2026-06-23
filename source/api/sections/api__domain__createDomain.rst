The **createDomain** operation is used to create a new domain. To use it make an HTTP ``PUT`` to path ``/api/rest/domain``
and include in your request an HTTP header named ``ITB-API-KEY`` set to your :ref:`master API key <systemAdmin__config__restApi>`.

In the request's body you specify the information of the new domain, of which the ``shortName`` and ``fullName`` are mandatory. Other information you
could provide, although not mandatory, would be the domain's ``description`` and custom ``reportMetadata`` for XML reports.
For the full set of information you can manage check the payload's :ref:`schema <api__domain__createDomain__request>`.

The following example shows how you can create a domain with the provided data:

.. code-block:: json

  {
    "shortName": "EUPO",
    "fullName": "European Purchase Order",
    "description": "The European Purchase Order specifications defining the exchange of purchase orders in the EU."
  }

Calling this operation, the Test Bed will create the domain and respond with the domain's assigned API key:

.. code-block:: json

  {
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

It is possible to avoid the automatic API key assignment by defining an API key to use as part of the input. This could
be useful if you are configuring a Test Bed instance based on fixed data and you want to ensure assigned API keys have specific, known values.

.. code-block:: json

  {
    "shortName": "EUPO",
    "fullName": "European Purchase Order",
    "description": "The European Purchase Order specifications defining the exchange of purchase orders in the EU.",
    "apiKey": "A_FIXED_API_KEY_FOR_THE_DOMAIN"
  }

In this case the Test Bed will use the provided API key unless it is found to already exist, in which case a new one will be generated instead. Regardless,
the operation will still report the API key that was assigned.

.. _api__domain__createDomain__request:

createDomain - request schema
+++++++++++++++++++++++++++++

The payload of the **createDomain** operation's request is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-createDomain_request.schema.json

   {
       "$id": "https://www.itb.ec.europa.eu/api/createDomain_request",
       "$schema": "http://json-schema.org/draft-07/schema#",
       "description": "JSON schema for the createDomain operation request payload",
       "type": "object",
       "properties": {
           "shortName": {
               "description": "The domain's short name.",
               "type": "string"
           },
           "fullName": {
               "description": "The domain's full name.",
               "type": "string"
           },
           "description": {
               "description": "The domain's description.",
               "type": "string"
           },
           "reportMetadata": {
               "description": "The domain's additional metadata for XML reports.",
               "type": "string"
           },
           "apiKey": {
               "description": "The API key to set for the domain. If this key is already assigned, a new one will be generated.",
               "type": "string"
           }
       },
       "required": [
           "shortName",
           "fullName"
       ],
       "additionalProperties": false
     }

.. _api__domain__createDomain__response:

createDomain - response schema
++++++++++++++++++++++++++++++

The payload of the **createDomain** operation's response is defined by the following JSON Schema:

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
