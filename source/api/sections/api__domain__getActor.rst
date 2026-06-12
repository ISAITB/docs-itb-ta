The **getActor** operation is used to retrieve a specific actor. To call it make an HTTP ``GET``
to path ``/api/rest/actor/{actor}`` and including an HTTP header named ``ITB-API-KEY`` set with a **community API key**.
This API key identifies the community that is able to manage the actor, either by being directly linked to
its domain or being linked to no domain. The actor in question is identified by passing its API key as the value of the
``actor`` path variable.

This operation returns the information for the actor, specifically its **identifier**, **name**, **description**,
**report metadata**, **default** and **hidden** status, **display order** and **API key**. The following is an example response received after
calling the operation:

.. code-block:: json

  {
    "identifier": "supplier",
    "name": "Supplier",
    "description": "Actor supplying goods and creating purchase orders.",
    "default": false,
    "hidden": false,
    "displayOrder": 0,
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

The returned name and description help to identify the actor in question, whereas the API key is used in other domain
management operations.

.. _api__domain__getActor__response:

getActor - response schema
++++++++++++++++++++++++++

The payload of the **getActor** operation's response is defined by the following :download:`JSON Schema<resources/domain/getActor_response.schema.json>`:

.. literalinclude:: resources/domain/getActor_response.schema.json
   :language: json
