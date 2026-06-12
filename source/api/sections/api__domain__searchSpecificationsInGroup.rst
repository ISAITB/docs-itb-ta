The **searchSpecificationsInGroup** operation is used to search for specification under a specific group, possibly also filtering them by name.
To call the operation make an HTTP ``GET`` to path ``/api/rest/group/{group}/specifications``
setting ``{group}`` to the relevant specification group's API key. In addition, you must include in your request an HTTP header named
``ITB-API-KEY`` set to a **community API key**. This API key identifies the community that is able to manage the specifications'
domain, either by being directly linked to it or being linked to no domain.

The operation returns an array of specification data, including for each specification its **short name**, **full name**, **description**,
**report metadata**, **hidden** status, **display order** and **API key**. The following is an example response received after
calling the operation:

.. code-block:: json

  [
    {
      "shortName": "Create order",
      "fullName": "Create order specification",
      "description": "Requirements for creating purchase orders.",
      "hidden": false,
      "displayOrder": 0,
      "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
    },
    {
      "shortName": "Update order",
      "fullName": "Update order specification",
      "description": "Requirements for updating purchase orders.",
      "hidden": false,
      "displayOrder": 1,
      "apiKey": "491235ECX4F64X4EBDX9392X7726BA2D1297"
    }
  ]

The returned names and descriptions help to identify the specifications, whereas the API keys are used in other domain
management operations.

When calling the operation using path ``/api/rest/group/{group}/specifications`` it will return all the specifications
directly under the specific group. These can be filtered by passing also a query parameter named ``name``, in which case the
specifications returned will be those whose full or short name match the provided value. Matching takes place in a case-insensitive
manner and using wildcard matching. As an example, calling ``/api/rest/group/GROUP_API_KEY/specifications?name=update`` would return
a matching specification as follows:

.. code-block:: json

  [
    {
      "shortName": "Update order",
      "fullName": "Update order specification",
      "description": "Requirements for updating purchase orders.",
      "hidden": false,
      "displayOrder": 1,
      "apiKey": "491235ECX4F64X4EBDX9392X7726BA2D1297"
    }
  ]

.. _api__domain__searchSpecificationsInGroup__response:

searchSpecificationsInGroup - response schema
+++++++++++++++++++++++++++++++++++++++++++++

The payload of the **searchSpecificationsInGroup** operation's response is defined by the following :download:`JSON Schema<resources/domain/searchSpecificationsInGroup_response.schema.json>`:

.. literalinclude:: resources/domain/searchSpecificationsInGroup_response.schema.json
   :language: json
