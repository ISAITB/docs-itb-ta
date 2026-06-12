The **updateOrganisation** operation is used to update an existing organisation. To use it make an HTTP ``POST`` to path ``/api/rest/organisation/{organisation}``,
setting ``{organisation}`` to the target organisation's API key. You also need to include in your request an HTTP header named ``ITB-API-KEY`` set to the
**community API key** of the community containing the organisation.

When calling this operation all input properties are optional. You specify the properties that you want to update, and for the ones that are to be left unchanged
you don't include them.

The following example illustrates an update of the organisation's ``fullName``, leaving other information unchanged:

.. code-block:: json

  {
    "fullName": "ACME Limited"
  }

The properties that can be updated through this operation are detailed in the payload's :ref:`schema <api__community__updateOrganisation__request>`.
The operation's response is empty, signalling through a status ``200`` (OK) that the update was successfully made.

.. _api__community__updateOrganisation__request:

updateOrganisation - request schema
+++++++++++++++++++++++++++++++++++

The payload of the **updateOrganisation** operation's request is defined by the following :download:`JSON Schema<resources/community/updateOrganisation_request.schema.json>`:

.. literalinclude:: resources/community/updateOrganisation_request.schema.json
   :language: json
