The **createActor** operation is used to create a new actor. To use it make an HTTP ``PUT`` to path ``/api/rest/actor`` 
and include in your request an HTTP header named ``ITB-API-KEY`` set to a **community API key**. This API key identifies the community
that is able to manage the actor's domain, either by being directly linked to it or being linked to no domain.

In the request's body you specify the information of the new actor, of which the ``identifier``, ``name`` and ``specification`` are mandatory as defined
in the payload's :ref:`schema <api__domain__createActor__request>`. The ``specification`` property identifies the specification
under which the actor is to be created, and needs to be set with the specification's API key.

The following example shows how you can create an actor with the provided data:

.. code-block:: json

  {
    "identifier": "supplier",
    "name": "Supplier",
    "specification": "1A748C4DXBFD6X4FD3XA196X969D9B695244"
  }

Calling this operation, the Test Bed will create the actor and respond with its assigned API key:

.. code-block:: json

  {
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

It is possible to avoid the automatic API key assignment by defining an API key to use as part of the input. This could
be useful if you are configuring a Test Bed instance based on fixed data and you want to ensure assigned API keys have specific, known values.

.. code-block:: json

  {
    "identifier": "supplier",
    "name": "Supplier",
    "specification": "1A748C4DXBFD6X4FD3XA196X969D9B695244",
    "apiKey": "A_FIXED_API_KEY_FOR_THE_ACTOR"
  }

In this case the Test Bed will use the provided API key unless it is found to already exist, in which case a new one will be generated instead. Regardless,
the operation will still report the API key that was assigned.

.. _api__domain__createActor__request:

createActor - request schema
++++++++++++++++++++++++++++

The payload of the **createActor** operation's request is defined by the following :download:`JSON Schema<resources/domain/createActor_request.schema.json>`:

.. literalinclude:: resources/domain/createActor_request.schema.json
   :language: json

.. _api__domain__createActor__response:

createActor - response schema
+++++++++++++++++++++++++++++

The payload of the **createActor** operation's response is defined by the following :download:`JSON Schema<resources/common/apiKey_response.schema.json>`:

.. literalinclude:: resources/common/apiKey_response.schema.json
   :language: json
