The **searchSpecificationGroups** operation is used to search for specification groups under a specific domain, possibly
also filtering them by group name. To call the operation make an HTTP ``GET`` to path ``/api/rest/domain/{domain}/groups``
setting ``{domain}`` to the relevant domain's API key. In addition, you must include in your request an HTTP header named
``ITB-API-KEY`` set to a **community API key**. This API key identifies the community that is able to manage the groups'
domain, either by being directly linked to it or being linked to no domain.

The operation returns an array of specification group data, including for each group its **short name**, **full name**, **description**,
**report metadata**, **display order** and **API key**. The following is an example response received after calling the operation:

.. code-block:: json

  [
    {
      "shortName": "Data package",
      "fullName": "Data package specification",
      "description": "This is a set of requirements for data packages.",
      "displayOrder": 0,
      "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
    }
  ]

The returned name and description help to identify the group in question, whereas the API key is used in other domain
management operations.

When calling the operation using path ``/api/rest/domain/{domain}/groups`` it will return all the groups under the specific domain.
These can be filtered by passing also a query parameter named ``name``, in which case the groups returned will be those
whose full or short name match the provided value. Matching takes place in a case-insensitive manner and using wildcard matching.
As an example, calling ``/api/rest/domain/DOMAIN_API_KEY/groups?name=specification`` would return a matching group as follows (matching its full name):

.. code-block:: json

  [
    {
      "shortName": "Data package",
      "fullName": "Data package specification",
      "description": "This is a set of requirements for data packages.",
      "displayOrder": 0,
      "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
    }
  ]

.. _api__domain__searchSpecificationGroups__response:

searchSpecificationGroups - response schema
+++++++++++++++++++++++++++++++++++++++++++

The payload of the **searchSpecificationGroups** operation's response is defined by the following :download:`JSON Schema<resources/domain/searchSpecificationGroups_response.schema.json>`:

.. literalinclude:: resources/domain/searchSpecificationGroups_response.schema.json
   :language: json
