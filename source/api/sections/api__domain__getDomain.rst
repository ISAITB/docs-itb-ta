The **getDomain** operation is used to retrieve a specific domain linked to a community. To call it make an HTTP ``GET``
to path ``/api/rest/domain/{domain}`` and including an HTTP header named ``ITB-API-KEY`` set with the relevant **community API key**.
The domain in question is identified by passing its API key as the value of the ``domain`` path variable.

This operation returns the information for the domain, specifically its **short name**, **full name**, **description**,
**report metadata** and **API key**. The following is an example response received after calling the operation:

.. code-block:: json

  {
    "shortName": "EUPO",
    "fullName": "European Purchase Order",
    "description": "The European Purchase Order specifications defining the exchange of purchase orders in the EU.",
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

The returned name and description help to identify the domain in question, whereas the API key is used in other domain
management operations.

.. _api__domain__getDomain__response:

getDomain - response schema
+++++++++++++++++++++++++++

The payload of the **getDomain** operation's response is defined by the following :download:`JSON Schema<resources/domain/getDomain_response.schema.json>`:

.. literalinclude:: resources/domain/getDomain_response.schema.json
   :language: json
