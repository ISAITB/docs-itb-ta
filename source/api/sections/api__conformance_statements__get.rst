The **get** operation is used to retrieve the conformance statements defined for a given organisation. It can be used to retrieve
all statements, as well as those specific to a given system, reflecting the latest conformance status or a specific
conformance snapshot.

To retrieve all conformance statements for an organisation make an HTTP ``GET`` to path ``/api/rest/conformance``. In addition,
you must include in your request an HTTP header named ``ITB-API-KEY`` set with the **organisation's API key**. Besides
authorising this call, this API key also specifies the organisation for which conformance statements will be retrieved.

If you want to limit the statements returned to a specific system, the API key of the system in question is added as an
additional path parameter ``/api/rest/conformance/{system}``. When targeting the statements within a conformance snapshot,
this is specified by adding an extra path element followed by the snapshot API key in question. As such, retrieving all
statements for an organisation in a snapshot uses path ``/api/rest/conformance/snapshot/{snapshot}``, whereas the ones linked to
a specific system would be retrieved through path ``/api/rest/conformance/snapshot/{snapshot}/system``.

In all cases the response of these calls will return a JSON payload including an array or ``system`` and ``actor`` API key
combinations such as the following:

.. code-block:: json

  [
    {
      "system": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
      "actor": "491235ECX4F64X4EBDX9392X7726BA2D1297"
    }
  ]

These system and actor combinations serve to identify uniquely a specific conformance statements, and would be the values
needed for subsequent calls such as :ref:`producing a report <api__conformance_statements__report>` or :ref:`executing tests <api__test_sessions__start>`.

.. _api__conformance_statements__get__response:

get - response schema
+++++++++++++++++++++

The payload of the **get** operation's response is defined by the following JSON Schema:

.. code-block:: json
   :class: itb-download-get_response.schema.json

   {
     "$id": "https://www.itb.ec.europa.eu/api/getStatements_response",
     "$schema": "http://json-schema.org/draft-07/schema#",
     "description": "JSON schema for the get statements operation response payload",
     "type": "array",
     "items": {
       "$ref": "#/definitions/ConformanceStatementKeys"
     },
     "definitions": {
       "ConformanceStatementKeys": {
         "description": "The API keys needed to identify a specific conformance statement.",
         "type": "object",
         "properties": {
           "system": {
             "description": "The API key of the statement's related system.",
             "type": "string"
           },
           "actor": {
             "description": "The API key of the statement's related actor.",
             "type": "string"
           }
         },
         "additionalProperties": false
       }
     }
   }
