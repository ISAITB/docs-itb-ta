The **createCommunity** operation is used to create a new community. To use it make an HTTP ``PUT`` to path ``/api/rest/community``
and include in your request an HTTP header named ``ITB-API-KEY`` set to your :ref:`master API key <systemAdmin__config__restApi>`.

In the request's body you specify the information of the new community, of which the ``shortName`` and ``fullName`` are mandatory. Other information you
would typically be providing, although not mandatory, would be the community's ``description`` and the ``domain`` it relates to, the latter identified through
the domain's API key. For the full set of information you can manage check the payload's :ref:`schema <api__community__createCommunity__request>`.

The following example shows how you can create a community with the provided data:

.. code-block:: json

  {
    "shortName": "EUPO community",
    "fullName": "European Purchase Order community",
    "description": "Community for the conformance testing of the European Purchase Order specification.",
    "supportEmail": "support@eupo.eu",
    "interactionNotifications": true,
    "domain": "3F471BA2XDD33X4FCEX8045X1D8039E6B92A"
  }

Calling this operation, the Test Bed will create the community and link it with the identified domain. Once complete, the operation will
respond with the community's assigned API key:

.. code-block:: json

  {
    "apiKey": "B277E210X2FB4X4BD7X88B6X951504F45F8F"
  }

It is possible to avoid the automatic API key assignment by defining an API key to use as part of the input. This could
be useful if you are configuring a Test Bed instance based on fixed data and you want to ensure assigned API keys have specific, known values.

.. code-block:: json

  {
    "shortName": "EUPO community",
    "fullName": "European Purchase Order community",
    "description": "Community for the conformance testing of the European Purchase Order specification.",
    "supportEmail": "support@eupo.eu",
    "interactionNotifications": true,
    "domain": "3F471BA2XDD33X4FCEX8045X1D8039E6B92A",
    "apiKey": "A_FIXED_API_KEY_FOR_THE_COMMUNITY"
  }

In this case the Test Bed will use the provided API key unless it is found to already exist, in which case a new one will be generated instead. Regardless,
the operation will still report the API key that was assigned.

.. _api__community__createCommunity__request:

createCommunity - request schema
++++++++++++++++++++++++++++++++

The payload of the **createCommunity** operation's request is defined by the following :download:`JSON Schema<resources/community/createCommunity_request.schema.json>`:

.. literalinclude:: resources/community/createCommunity_request.schema.json
   :language: json

.. _api__community__createCommunity__response:

createCommunity - response schema
+++++++++++++++++++++++++++++++++

The payload of the **createCommunity** operation's response is defined by the following :download:`JSON Schema<resources/common/apiKey_response.schema.json>`:

.. literalinclude:: resources/common/apiKey_response.schema.json
   :language: json
