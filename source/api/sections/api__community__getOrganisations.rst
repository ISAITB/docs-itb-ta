The **getOrganisations** operation is used to retrieve all organisations defined within a specific community. To use it make an
HTTP ``GET`` to path ``/api/rest/organisation`` and include in your request an HTTP header named ``ITB-API-KEY`` set to your
**community API key**. This API key identifies the community of organisations to be retrieved.

Calling this operation will return an array of organisation data, where each item contains the **API key** of the organisation,
its **short name** and **full name**. The following example illustrates a sample response:

.. code-block:: json

  [
    {
      "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
      "shortName": "Organisation 1",
      "fullName": "Organisation 1"
    },
    {
      "apiKey": "491235ECX4F64X4EBDX9392X7726BA2D1297",
      "shortName": "Organisation 2",
      "fullName": "Organisation 2"
    }
  ]

The names returned for each of the organisations help you in identifying each one. The API key, then serves as the key to
use in most other organisation-specific API operations.

.. _api__community__getOrganisations__response:

getOrganisations - response schema
++++++++++++++++++++++++++++++++++

The payload of the **getOrganisations** operation's response is defined by the following :download:`JSON Schema<resources/community/getOrganisations_response.schema.json>`:

.. literalinclude:: resources/community/getOrganisations_response.schema.json
   :language: json
