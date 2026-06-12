The **createOrganisation** operation is used to create a new organisation. To use it make an HTTP ``PUT`` to path ``/api/rest/organisation`` 
and include in your request an HTTP header named ``ITB-API-KEY`` set to your **community API key**. This API key identifies the community
within which the organisation will be created.

In the request's body you specify the information of the new organisation, of which the ``shortName`` and ``fullName`` are mandatory as defined
in the payload's :ref:`schema <api__community__createOrganisation__request>`.

The following example shows how you can create an organisation with the provided data:

.. code-block:: json

  {
    "shortName": "ACME",
    "fullName": "ACME Ltd."
  }

Calling this operation, the Test Bed will create the organisation and respond with its assigned API key:

.. code-block:: json

  {
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

It is possible to avoid the automatic API key assignment by defining an API key to use as part of the input. This could
be useful if you are configuring a Test Bed instance based on fixed data and you want to ensure assigned API keys have specific, known values.

.. code-block:: json

  {
    "shortName": "ACME",
    "fullName": "ACME Ltd.",
    "apiKey": "A_FIXED_API_KEY_FOR_THE_ORGANISATION"
  }

In this case the Test Bed will use the provided API key unless it is found to already exist, in which case a new one will be generated instead. Regardless,
the operation will still report the API key that was assigned.

.. _api__community__createOrganisation__request:

createOrganisation - request schema
+++++++++++++++++++++++++++++++++++

The payload of the **createOrganisation** operation's request is defined by the following :download:`JSON Schema<resources/community/createOrganisation_request.schema.json>`:

.. literalinclude:: resources/community/createOrganisation_request.schema.json
   :language: json

.. _api__community__createOrganisation__response:

createOrganisation - response schema
++++++++++++++++++++++++++++++++++++

The payload of the **createOrganisation** operation's response is defined by the following :download:`JSON Schema<resources/common/apiKey_response.schema.json>`:

.. literalinclude:: resources/common/apiKey_response.schema.json
   :language: json
