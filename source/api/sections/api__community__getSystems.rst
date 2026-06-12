The **getSystems** operation is used to retrieve all systems defined for a specific organisation. To use it make an
HTTP ``GET`` to path ``/api/rest/organisation/{organisation}/systems`` and include in your request an HTTP header named ``ITB-API-KEY`` set to your
**community API key**. The organisation in question is identified by passing it's API key in the ``organisation`` path
parameter.

Calling this operation will return an array of system data, where each item contains the **API key** of the system,
its **short name**, **full name**, **description** and **version**. The following example illustrates a sample response:

.. code-block:: json

  [
    {
      "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F",
      "shortName": "System 1",
      "fullName": "System 1",
      "description": "Description for system 1",
      "version": "1.0"
    },
    {
      "apiKey": "491235ECX4F64X4EBDX9392X7726BA2D1297",
      "shortName": "System 2",
      "fullName": "System 2",
      "description": "Description for system 2",
      "version": "1.0"
    }
  ]

The names returned for each of the systems help you in identifying each one. The API key, then serves as the key to
use in most other system-specific API operations, or operations relative to conformance statements.

.. _api__community__getSystems__response:

getSystems - response schema
++++++++++++++++++++++++++++

The payload of the **getSystems** operation's response is defined by the following :download:`JSON Schema<resources/community/getSystems_response.schema.json>`:

.. literalinclude:: resources/community/getSystems_response.schema.json
   :language: json
