The **updateSpecification** operation is used to update an existing specification. To use it make an HTTP ``POST`` to path ``/api/rest/specification/{specification}``,
setting ``{specification}`` to the target specification's API key. You also need to include in your request an HTTP header named ``ITB-API-KEY``
set to a **community API key**. This API key identifies the community that is able to manage the specification's domain, either by being directly linked to it
or being linked to no domain.

When calling this operation all input properties are optional. You specify the properties that you want to update, and for the ones that are to be left unchanged
you don't include them.

The following example illustrates an update of the specification's ``fullName``, leaving other information unchanged:

.. code-block:: json

  {
    "fullName": "Order creation specification"
  }

In case you want to altogether remove a property, such as the the specification's description, you specify it's value as an empty string:

.. code-block:: json

  {
    "description": ""
  }

You can also use this operation to manage the specification's grouping. Setting the ``group`` property to a specification group's API key
will place it within the target group, removing it from its previous group (if defined). If you simply want to remove the specification 
from its current group you can specify the ``group`` property as an empty string:

.. code-block:: json

  {
    "group": ""
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__domain__updateSpecification__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__domain__updateSpecification__request:

updateSpecification - request schema
++++++++++++++++++++++++++++++++++++

The payload of the **updateSpecification** operation's request is defined by the following :download:`JSON Schema<resources/domain/updateSpecification_request.schema.json>`:

.. literalinclude:: resources/domain/updateSpecification_request.schema.json
   :language: json
