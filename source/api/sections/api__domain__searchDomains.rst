The **searchDomains** operation is used to search for domains that are accessible for a given community, and optionally
filtering them by domain name. To call the operation make an HTTP ``GET`` to path ``/api/rest/domains`` and including an
HTTP header named ``ITB-API-KEY`` set with the relevant **community API key**.

The operation returns an array of domain data, including for each domain its **short name**, **full name**, **description**,
**report metadata** and **API key**. The following is an example response received after calling the operation:

.. code-block:: json

  [
    {
      "shortName": "EUPO",
      "fullName": "European Purchase Order",
      "description": "The European Purchase Order specifications defining the exchange of purchase orders in the EU.",
      "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
    }
  ]

The returned name and description help to identify the domain in question, whereas the API key is used in other domain
management operations.

When calling the operation using path ``/api/rest/domains`` it will return all the domains linked to specific community.
These can be filtered by passing also a query parameter named ``name``, in which case the domains returned will be those
whose full or short name match the provided value. Matching takes place in a case-insensitive manner and using wildcard matching.
As an example, calling ``/api/rest/domains?name=order`` would return a matching domain as follows (matching the domain's full name):

.. code-block:: json

  [
    {
      "shortName": "EUPO",
      "fullName": "European Purchase Order",
      "description": "The European Purchase Order specifications defining the exchange of purchase orders in the EU.",
      "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
    }
  ]

.. _api__domain__searchDomains__response:

searchDomains - response schema
+++++++++++++++++++++++++++++++

The payload of the **searchDomains** operation's response is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-searchDomains_response.schema.json

   {
     "$id": "https://www.itb.ec.europa.eu/api/searchDomains_response",
     "$schema": "http://json-schema.org/draft-07/schema#",
     "description": "JSON schema for the searchDomains operation response payload",
     "type": "array",
     "items": {
       "$ref": "#/definitions/Domain"
     },
     "definitions": {
       "Domain": {
         "description": "A domain.",
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
             "description": "The domain's API key.",
             "type": "string"
           }
         },
         "required": [
           "shortName",
           "fullName",
           "apiKey"
         ],
         "additionalProperties": false
       }
     }
   }
