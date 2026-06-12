The **updateActor** operation is used to update an existing actor. To use it make an HTTP ``POST`` to path ``/api/rest/actor/{actor}``,
setting ``{actor}`` to the target actor's API key. You also need to include in your request an HTTP header named ``ITB-API-KEY``
set to a **community API key**. This API key identifies the community that is able to manage the actor's domain, either by being directly linked to it
or being linked to no domain.

When calling this operation all input properties are optional. You specify the properties that you want to update, and for the ones that are to be left unchanged
you don't include them.

The following example illustrates an update of the actor's ``name``, leaving other information unchanged:

.. code-block:: json

  {
    "name": "Order supplier"
  }

In case you want to altogether remove a property, such as the the actor's description, you specify it's value as an empty string:

.. code-block:: json

  {
    "description": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__domain__updateActor__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__domain__updateActor__request:

updateActor - request schema
++++++++++++++++++++++++++++

The payload of the **updateActor** operation's request is defined by the following :download:`JSON Schema<resources/domain/updateActor_request.schema.json>`:

.. literalinclude:: resources/domain/updateActor_request.schema.json
   :language: json
